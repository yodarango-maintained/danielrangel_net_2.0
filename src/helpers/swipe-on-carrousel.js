// -------------------------------------CURRENTLY NOT USED -------------------------------------
// -- activate the drag
/* const startDrag = (e) => {
    const screenHalf = window.innerWidth / 2;
    imagePos = "absolue";
    document.onmousemove = (e) => {
      imageXCoor = e.clientX - screenHalf;
    };
  };

  // -- deactivate the drag
  const stopDrag = (e) => {
    const screenWidth = window.innerWidth;
    const position = (e.clientX / screenWidth) * 100;

    // remove the event from the document
    document.onmousemove = null;

    // if the scroll to the left is greateer than 5vw finish the animation
    if (position < 45) {
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
    } else if (position > 55) {
      const finsihAnimation = setInterval(() => {
        // scroll away and reduce opacity
        imageXCoor = imageXCoor + 10;
        imgOpacity = imgOpacity - 0.02;

        // if the image has been shifted to the right far enough to where it cannot be seen clear the interval and reset the states
        if (imageXCoor > window.innerWidth) {
          clearInterval(finsihAnimation);

          if (currentScreen + 1 === images.length) {
            currentScreen = 0;
          } else if (currentScreen === 0) {
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
  */
