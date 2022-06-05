<script>
  // -- data
  import { projects } from "../db/projects.js";

  // -- comps
  import Bubble from "../chunks/buttons/bubble.svelte";
  import ShowProjectModal from "../layouts/show_project_modal.svelte";

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

  // close the modal
  const closeProjectModal = () => {
    modal.show = false;
  };
</script>

<div on:dblclick={closeProjectModal}>
  <div class="bkg" />
  <h1 class="intro-title">SOFTWARE ARTIST</h1>
  <Bubble on:loadModal={loadModal} />
  {#if modal.show}
    <ShowProjectModal modal={modal.modal} />
  {/if}
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
</style>
