<script>
  // -- svelte
  // import {createEventDispatcher} from "svelte";
  // const dispatch = createEventDispatcher();

  // -- comps
  import TechStack from "../chunks/displays/tech-stack-show-off.svelte";
  import ProjectCarrousel from "../chunks/displays/project-carrousel.svelte";

  // -- props
  export let modal;

  // -- state
  let entranceAnimation = "";
  let descriptionAnimation = "";
  let showTechStack = true;
  let currentDescription = 0;
  let instructionLayoutHide = true;

  setTimeout(() => {
    entranceAnimation = "animation";
  }, 500);

  /// set the timeout to show the instructive layer
  setTimeout(() => {
    instructionLayoutHide = document.cookie.includes("project-layout=true");
  }, 3500);

  // --------------- update the descriptio for the new screen
  const updateDescription = (e) => {
    e.detail.desc > 0 ? (showTechStack = false) : (showTechStack = true);
    currentDescription = e.detail.desc;
    descriptionAnimation = "desc-animation";
    entranceAnimation = "animation animationFast";

    // change the description animation class so that it triggers in the next event
    setTimeout(() => {
      descriptionAnimation = "stay";
    }, 1000);
  };

  // ---------------- close the projec modal
  // const closeProjetModal = ()=>{
  //   dispatch('closeProjectModal')
  // }
  const handleAcknowledgeInstructions = () => {
    instructionLayoutHide = true;
    document.cookie = "project-layout=true";
  };
</script>

<section class="view-project-modal">
  {#if !instructionLayoutHide}
    <div class="intruction-layout">
      <div>
        <p>Swipe right & lef to change screens</p>
        <p>Tap twice anywhere to close modal</p>
        <button on:click={handleAcknowledgeInstructions} class="std-button"
          >OK</button
        >
      </div>
    </div>
  {/if}
  <!-- <div class="close-modal {entranceAnimation}" style={`background-color: ${modal.color};`} on:click={closeProjetModal}></div> -->
  <div
    class={`top-modal ${entranceAnimation}`}
    style={`background-color: ${modal.bkgColor};`}
  />
  <h1
    style={`color: ${modal.color};`}
    class="project-title {entranceAnimation}"
  >
    {modal.title}
  </h1>

  <ProjectCarrousel
    images={modal.images}
    on:updateDescription={updateDescription}
  />
  {#if !showTechStack}
    <p class={`project-description ${descriptionAnimation}`}>
      {modal.description[currentDescription]}
    </p>
  {/if}

  {#if showTechStack}
    <div class={`tech-stack ${entranceAnimation}`}>
      <TechStack
        techStack={modal.technologies}
        git={modal.git}
        url={modal.url}
      />
    </div>
  {/if}

  <div class={`bottom-modal ${entranceAnimation}`} />
</section>

<style>
  .view-project-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100vw;
    height: 100vh;
    z-index: 5;
  }

  .top-modal {
    display: none;
  }

  .top-modal.animation {
    z-index: 5;
    display: block;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 80vh;
    animation: topEntry 1000ms cubic-bezier(0.07, 0.97, 1, -0.96) 0ms;
  }

  @keyframes topEntry {
    0% {
      top: -81vh;
    }
    100% {
      top: 0;
    }
  }

  .bottom-modal.animation {
    z-index: 5;
    position: fixed;
    background-color: #fff;
    width: 200%;
    bottom: 0;
    left: -50%;
    height: 30vh;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    animation: bottomEntry 1000ms cubic-bezier(0.07, 0.97, 1, -0.96) 0ms;
  }

  @media (min-height: 700px) {
    .bottom-modal.animation {
      height: 40vh;
    }
  }

  @keyframes bottomEntry {
    0% {
      bottom: -31vh;
    }
    100% {
      bottom: 0;
    }
  }

  .project-title {
    opacity: 0;
  }

  .project-title.animation {
    position: relative;
    opacity: 1;
    font-weight: 700;
    font-size: var(--main-title-size);
    font-family: var(--accent-font);
    text-align: center;
    margin-top: 2rem;
    animation: textEntry 3000ms ease;
    top: 0vh;
    width: 100%;
    z-index: 7;
  }

  @media (max-height: 600px) {
    .project-title.animation {
      top: -1vh;
    }
  }

  @media (min-height: 800px) {
    .project-title.animation {
      top: 2vh;
    }
  }

  .project-description {
    opacity: 0;
  }

  .project-description.desc-animation,
  .project-description.stay {
    position: fixed;
    opacity: 1;
    top: auto;
    left: 0;
    right: 0;
    bottom: 15vh;
    margin: auto;
    width: 85%;
    color: black;
    z-index: inherit;
    z-index: 6;
    animation: textEntry 1000ms ease;
    font-size: var(--body-font-size);
    max-width: 600px;
  }

  .project-description.stay {
    animation: none;
  }

  .tech-stack {
    opacity: 0;
  }

  .tech-stack.animation,
  .tech-stack.animationFast {
    top: auto;
    left: 0;
    right: 0;
    bottom: 5vh;
    margin: auto;
    opacity: 1;
    position: fixed;
    z-index: 6;
    animation: textEntry 3000ms ease;
    width: 85%;
    max-width: 600px;
  }

  .tech-stack.animationFast {
    animation: textEntry 1000ms ease;
  }

  @media (max-height: 600px) {
    .tech-stack.animation {
      bottom: 1vh;
    }
    .project-description.desc-animation,
    .project-description.stay {
      bottom: 15vh;
    }
  }

  @media (min-height: 700px) {
    .tech-stack.animation {
      bottom: 9vh;
    }

    .project-description.desc-animation,
    .project-description.stay {
      bottom: 18vh;
    }
  }

  @media (min-height: 900px) {
    .tech-stack.animation,
    .project-description.animation {
      bottom: 12vh;
    }

    .project-description.desc-animation,
    .project-description.stay {
      bottom: 22vh;
    }
  }

  @media (min-height: 950px) {
    .tech-stack.animation,
    .project-description.animation {
      bottom: 8vh;
    }

    .project-description.desc-animation,
    .project-description.stay {
      bottom: 16vh;
    }
  }

  @media (min-height: 1050px) {
    .tech-stack.animation,
    .project-description.animation {
      bottom: 12vh;
    }

    .project-description.desc-animation,
    .project-description.stay {
      bottom: 24vh;
    }
  }

  @media (min-height: 1200px) {
    .tech-stack.animation,
    .project-description.animation {
      bottom: 18vh;
    }
  }

  @keyframes textEntry {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0;
      transform: translateY(2rem);
    }
    99% {
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  /* 
.close-modal{
opacity: 0;
}

.close-modal.animation{
opacity: 1;
width: 10rem;
height: 10rem;
border-radius: 50%;
position: fixed;
z-index: 8;
top: -4rem;
left: -4rem;
animation: closeModal 2000ms ease-in;
cursor: pointer;
}

@keyframes closeModal {
0%{
  opacity: 0;
}
50% {
  opacity: 0;
  top: -10rem;
  left: -10rem;
}
100%{
opacity: 1;
top: -4rem;
left: -4rem;
}
} */

  .intruction-layout {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .intruction-layout p {
    font-size: var(--body-font-size);
    color: white;
    width: 80%;
    text-align: center;
    line-height: 2em;
    margin: 2rem auto;
  }
  .intruction-layout button {
    display: block;
    color: white;
    width: 80%;
    text-align: center;
    line-height: 2em;
    margin: 2rem auto;
  }
</style>
