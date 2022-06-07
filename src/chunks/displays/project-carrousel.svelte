<script>
  // -- svelte
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  // -- props
  export let images = [];
  export let borderColor;
  export let links = { git: "", url: "" };

  // --state
  let currentScreen = 0;
  let imageXCoor = 0;
  let imgDisplay = "block";
  let imgOpacity = 1;
  let imagePos = "relative";

  // helpers
  import { deviceType } from "../../helpers/get-device-type";

  // -- find out whether to toggle backward or forward
  const toggleScreens = (touchPoint) => {
    imagePos = "absolue";
    const screenWidth = window.innerWidth;
    const position = (touchPoint / screenWidth) * 100;

    // if the touch is on the rigth toggle forth
    if (position > 55) {
      const finsihAnimation = setInterval(() => {
        // scroll away and reduce opacity
        imageXCoor = imageXCoor - 10;
        imgOpacity = imgOpacity - 0.02;

        // if the image has been shifted to the left far enough to where it cannot be seen clear the interval and reset the states
        if (imageXCoor < 0 - window.innerWidth) {
          clearInterval(finsihAnimation);

          currentScreen + 1 === images.length
            ? (currentScreen = 0)
            : (currentScreen = currentScreen + 1);

          imageXCoor = screenWidth;
          imgDisplay = "block";
          imgOpacity = 1;
          imagePos = "relative";

          // adjust the interval frequency as well as the translate amount since it takes to long for the new entrance to take place
          const intervalFreq = screenWidth < 600 ? 10 : 3;
          const amountToReduce = screenWidth < 800 ? 10 : 20;

          const setNewEntrance = setInterval(() => {
            imageXCoor = imageXCoor - amountToReduce;
            imgOpacity = imgOpacity + 0.02;

            if (imageXCoor < 10) {
              clearInterval(setNewEntrance);
              imageXCoor = 0;
              imgOpacity = 1;
              // call the dispatcher to update the description text
              dispatch("updateDescription", { desc: currentScreen });
            }
          }, intervalFreq);
        }
      }, 10);
    } else if (position < 45) {
      const finsihAnimation = setInterval(() => {
        // scroll away and reduce opacity
        imageXCoor = imageXCoor + 10;
        imgOpacity = imgOpacity - 0.02;

        // if the image has been shifted to the right far enough to where it cannot be seen clear the interval and reset the states
        if (imageXCoor > window.innerWidth) {
          clearInterval(finsihAnimation);

          /*if (currentScreen + 1 === images.length) {
            currentScreen = 0;
          } else
          */
          if (currentScreen === 0) {
            currentScreen = images.length - 1;
          } else if (currentScreen > 0) {
            currentScreen = currentScreen - 1;
          }

          imageXCoor = screenWidth - screenWidth * 2;
          imgDisplay = "block";
          imgOpacity = 1;
          imagePos = "relative";
          console.log("1: ", imageXCoor);

          // adjust the interval frequency as well as the translate amount since it takes to long for the new entrance to take place
          const intervalFreq = screenWidth < 600 ? 10 : 3;
          const amountToReduce = screenWidth < 800 ? 10 : 20;

          const setNewEntrance = setInterval(() => {
            imageXCoor = imageXCoor + amountToReduce;
            imgOpacity = imgOpacity + 0.02;
            console.log(imageXCoor);
            if (imageXCoor > -11) {
              console.log(imageXCoor);
              clearInterval(setNewEntrance);
              imageXCoor = 0;
              imgOpacity = 1;
              // call the dispatcher to update the description text
              dispatch("updateDescription", { desc: currentScreen });
            }
          }, intervalFreq);
        }
      }, 10);
    }
  };

  // handle the toggle event
  const handleToggle = (e) => {
    toggleScreens(e.clientX);
  };

  const gitLink = document.querySelector("#git-link");
  const liveLink = document.querySelector("#glive-link");

  if (deviceType() === "desktop") {
    document.addEventListener("keydown", (e) => {
      console.log(e.key, gitLink, liveLink);
      if (e.key === "ArrowRight") {
        toggleScreens(10000);
      } else if (e.key === "ArrowLeft") {
        toggleScreens(0);
      } else if (e.key === "x") {
        dispatch("closemodal", {});
      } else if (e.key === "g") {
        location.href = links.git;
      } else if (e.key === "l") {
        location.href = links.url;
      }
    });
  }

  // find out the size of the screen \to load the correct image
  const imageString = (imageString) => {
    if (deviceType() === "mobile" || window.innerWidth < 600) {
      return imageString;
    } else if (deviceType() === "tablet" || window.innerWidth < 800) {
      return imageString.replace(".png", "I.png");
    } else {
      return imageString.replace(".png", "D.png");
    }
  };
</script>

<section class="carrousel-wrapper">
  <img
    src={imageString(images[currentScreen])}
    alt={"project screenshot"}
    class="image {deviceType() === 'tablet'
      ? 'image-ipad'
      : deviceType() === 'desktop'
      ? 'image-desktop'
      : ''}"
    id="device-image"
    style={`position: ${imagePos}; transform: translateX(${imageXCoor}px); opacity: ${imgOpacity}; display: ${imgDisplay}; border-color: ${borderColor}`}
  />

  {#if deviceType() === "mobile"}
    <div
      class="img-overlay mobile"
      on:click={handleToggle}
      style={`transform: translateX(${imageXCoor}px);`}
    />
  {:else if deviceType() === "tablet"}
    <div
      class="img-overlay tablet"
      on:click={handleToggle}
      style={`transform: translateX(${imageXCoor}px);`}
    />
  {:else}
    <div />
  {/if}
</section>

<style>
  #git-link,
  #live-link {
    display: none;
  }
  .carrousel-wrapper {
    position: relative;
    top: calc((100vh - 60rem) / 3);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
  }

  .image {
    position: relative;
    z-index: 6;
    height: 65vh;
    display: block;
    flex-shrink: 0;
    margin: 0vh auto 0;
    animation: screenshotEntry 3000ms ease;
    pointer-events: none;
    border: 0.5rem solid white;
    border-radius: 40px;
    object-fit: cover;
    object-position: center;
  }

  .image-ipad {
    width: 80%;
    max-width: 650px;
    max-height: 100%;
  }

  .image-desktop {
    width: 80%;
    max-width: 650px;
    max-height: 100%;
    border-radius: 60px;
  }

  .img-overlay {
    position: absolute;
    width: 95vw;
    height: 110%;
    z-index: 3;
    top: -10%;
    left: 0;
    right: 0;
    bottom: auto;
    margin: auto;
    cursor: pointer;
  }

  @media (min-height: 600px) {
    .image {
      position: relative;
      z-index: 6;
      height: 70vh;
      max-height: 40rem;
      display: block;
      flex-shrink: 0;
      animation: screenshotEntry 3000ms ease;
      pointer-events: none;
    }
  }

  @media (min-height: 800px) {
    .image {
      position: relative;
      z-index: 6;
      height: 80vh;
      max-height: 50rem;
      display: block;
      flex-shrink: 0;
      margin-top: -5vh;
      animation: screenshotEntry 3000ms ease;
      pointer-events: none;
    }
  }

  @keyframes screenshotEntry {
    0% {
      opacity: 0;
    }
    50% {
      transform: translateY(4rem);
      opacity: 0;
    }
    99% {
      transform: translateY(0);
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }
  @keyframes newScreenImage {
    0% {
      opacity: 0;
      transform: translateX(50vw);
    }
    99% {
      transform: translateX(0);
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }
</style>
