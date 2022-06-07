<script>
  // -- data
  import { projects } from "../db/projects.js";

  // -- comps
  import Bubble from "../chunks/buttons/bubble.svelte";
  import ShowProjectModal from "../layouts/show_project_modal.svelte";

  //helpers
  import { deviceType } from "../helpers/get-device-type";

  // -- state
  let modal = {
    show: false,
    modal: {},
  };

  // load the project modal
  const loadModal = (e) => {
    modal.show = true;
    modal.modal = projects[e.detail.bubble];
  };
</script>

<div>
  <div class="bkg" />
  <h1 class="intro-title">SOFTWARE ARTIST</h1>
  <Bubble on:loadModal={loadModal} />
  {#if modal.show}
    <ShowProjectModal
      modal={modal.modal}
      on:closemodal={() => {
        modal.show = false;
      }}
    />
  {/if}

  <p class="image-rights">
    images by: <a href="https://skfb.ly/onrRX">brain</a> and
    <a href="https://skfb.ly/6SusI">heart</a>
  </p>
</div>

<style>
  .intro-title {
    position: fixed;
    z-index: -1;
    top: calc(50vh - var(--intro-title));
    left: 0;
    right: 0;
    font-family: var(--accent-font);
    font-weight: 900;
    font-size: var(--intro-title);
    margin: auto;
    text-align: center;
    line-height: 1.5em;
    width: 90%;
  }

  .bkg {
    position: fixed;
    z-index: -2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    height: 90vw;
    max-height: 800px;
    max-width: 800px;
    background-image: url("/bkg.png");
    background-size: 90%;
    background-repeat: no-repeat;
    opacity: 0.5;
  }

  .image-rights {
    position: fixed;
    z-index: -1;
    bottom: 0;
    left: auto;
    right: 1rem;
    top: auto;
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 1.2rem;
    margin: auto;
    opacity: 0.5;
  }

  .image-rights a {
    text-decoration: underline;
  }
  @media (min-width: 600px) {
    .bkg {
      bottom: -15vh;
    }
  }
</style>
