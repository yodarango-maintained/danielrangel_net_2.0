<script>
  // -- svelte
  import { createEventDispatcher } from "svelte";

  // comps
  //-- burst
  import Burst from "./burst.svelte";

  //-- bubbles
  import BubbleDrme from "../../assets/svgs/bubble_drme.svelte";
  import BubbleFack from "../../assets/svgs/bubble_fack.svelte";
  import BubbleScholarMK from "../../assets/svgs/bubble_scholarmk.svelte";
  import BubbleScholar from "../../assets/svgs/bubble_scholar.svelte";
  import BubbleStwc from "../../assets/svgs/bubble_stwc.svelte";
  import BubbleVaanillaB from "../../assets/svgs/bubble_vanillab.svelte";

  //-- event dispatcher
  const dispatch = createEventDispatcher();

  let bubbleClasses = {
    drme: "entrance",
    fack: "entrance2",
    scholarMk: "entrance3",
    scholar: "entrance",
    stwc: "entrance2",
    vanillab: "entrance3",
  };
  let burstClass = "";
  let showBurst = {
    show: false,
    paintColor: "",
    burst: 0,
    styles: "",
  };

  // remove the entrance class from the bubbles
  setTimeout(() => {
    bubbleClasses = {
      drme: "",
      fack: "",
      scholarMk: "",
      scholar: "",
      stwc: "",
      vanillab: "",
    };
  }, 1980);

  // handle the bubble burst
  const audioFile = new Audio("pop.mp3");
  const handleBurst = (burst, bubble, paint, styles) => {
    audioFile.play();
    showBurst.show = true;
    showBurst.paintColor = paint;
    showBurst.styles = styles;
    showBurst.burst = burst;

    dispatch("loadModal", { bubble });
  };
</script>

{#if showBurst.show}
  <Burst paintColor={showBurst.paintColor} styles={showBurst.styles} />
{/if}

{#if showBurst.burst != 1}
  <div
    class={`bubble-wrapper ${bubbleClasses.drme} drme`}
    on:click={() =>
      handleBurst(
        1,
        0,
        "#99EEA1",
        "width: 8rem; top: 5vh; left: calc(100vw - (11rem + 10vw));"
      )}
  >
    <BubbleDrme />
  </div>
{/if}

{#if showBurst.burst != 2}
  <div
    class={`bubble-wrapper ${bubbleClasses.fack} fack`}
    on:click={() =>
      handleBurst(2, 1, "#FFFFFF", "width: 10rem; top: 10vh; left: 6vw;")}
  >
    <BubbleFack />
  </div>
{/if}

{#if showBurst.burst != 3}
  <div
    class={`bubble-wrapper ${bubbleClasses.scholarMk} scholarmk`}
    on:click={() =>
      handleBurst(3, 2, "#FDB581", "width: 7rem; bottom: 5vh; left: 55vw;")}
  >
    <BubbleScholarMK />
  </div>
{/if}

{#if showBurst.burst != 4}
  <div
    class={`bubble-wrapper ${bubbleClasses.scholar} scholar`}
    on:click={() =>
      handleBurst(
        4,
        3,
        "#D5B8E3",
        "width: 13rem; top: 35vh; left: calc(100vw - (15rem + 10vw));"
      )}
  >
    <BubbleScholar />
  </div>
{/if}

{#if showBurst.burst != 5}
  <div
    class={`bubble-wrapper ${bubbleClasses.stwc} stwc`}
    on:click={() =>
      handleBurst(5, 4, "#0CD9B4", "width: 8rem; bottom: 12vh; left: 10vw;")}
  >
    <BubbleStwc />
  </div>
{/if}

{#if showBurst.burst != 6}
  <div
    class={`bubble-wrapper ${bubbleClasses.vanillab} vanillab`}
    on:click={() =>
      handleBurst(6, 5, "#FFC700", "width: 11rem; top: 55vh; left: 5vw;")}
  >
    <BubbleVaanillaB />
  </div>
{/if}

<style>
  .bubble-wrapper {
    position: absolute;
  }

  .bubble-wrapper:hover {
    cursor: pointer;
    animation: none;
  }

  /* ▼▼▼ add this classes upon 'entrance' class clearance by the interval ▼▼▼ */
  .drme {
    width: 9rem;
    height: 9rem;
    top: 5vh;
    left: calc(100vw - (11rem + 10vw));
    animation: bounceOne 5000ms linear 1000ms infinite;
  }

  .fack {
    width: 10rem;
    height: 10rem;
    top: 10vh;
    left: 6vw;
    animation: bounceTwo 5000ms linear 1300ms infinite;
  }
  .scholarmk {
    width: 7rem;
    height: 7rem;
    bottom: 5vh;
    left: 55vw;
    animation: bounceOne 5000ms linear 700ms infinite;
  }

  .scholar {
    width: 13rem;
    height: 13rem;
    top: 35vh;
    left: calc(100vw - (15rem + 10vw));
    animation: bounceOne 5000ms linear 200ms infinite;
  }

  .stwc {
    width: 8rem;
    height: 8rem;
    bottom: 12vh;
    left: 10vw;
    animation: bounceTwo 5000ms linear 1500ms infinite;
  }

  .vanillab {
    width: 11rem;
    height: 11rem;
    top: 55vh;
    left: 5vw;
    animation: bounceTwo 5000ms linear 500ms infinite;
  }
  /*▲▲▲ add this classes upon 'entrance' class clearance by the interval ▲▲▲*/

  /* entrance animation for all the bubbles. It will be cleared out by an interval and upon clearance each bubble will be assigned its corresponding class below */
  .entrance {
    transform: translateY(5rem);
    animation: entranceOne 2000ms cubic-bezier(0.96, -0.07, 0.83, 0.32);
  }

  .entrance2 {
    transform: translateY(5rem);
    animation: entranceTwo 2000ms cubic-bezier(0.69, 0.52, 0, 0.65);
  }

  .entrance3 {
    transform: translateY(5rem);
    animation: entranceThree 2000ms cubic-bezier(0.17, 0.67, 0.91, -0.64);
  }

  @keyframes bounceOne {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: scale(0.8) translate(1rem, 1rem);
    }
    50% {
      transform: translate(2rem, 0rem);
    }

    75% {
      transform: scale(1) translate(1rem, -1rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes bounceTwo {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: scale(1.1) translate(-1rem, -1rem);
    }
    50% {
      transform: translate(-2rem, 0rem);
    }

    75% {
      transform: scale(1) translate(-1rem, 1rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes entranceOne {
    0% {
      transform: translateY(20rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes entranceTwo {
    0% {
      transform: translateY(15rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes entranceThree {
    0% {
      transform: translateY(18rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .bubble-wrapper > svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
