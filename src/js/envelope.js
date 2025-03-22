document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.querySelector(".envelope");
  const envelopeFlap = document.querySelector(".envelope-flap");
  const letter = document.querySelector(".letter");
  const continueBtn = document.getElementById("continue-btn");
  const backgroundMusic = document.getElementById("background-music");
  const musicSuggestion = document.querySelector(".music-suggestion");

  let isEnvelopeOpen = false;
  let isLetterExpanded = false;

  // Remove draggable attribute
  letter.removeAttribute("draggable");

  // Open envelope on click
  envelope.addEventListener("click", function () {
    if (!isEnvelopeOpen) {
      // Open the envelope flap
      envelopeFlap.classList.add("open");
      isEnvelopeOpen = true;

      // Show music suggestion
      musicSuggestion.classList.remove("hidden");

      // Play background music when envelope is opened
      backgroundMusic
        .play()
        .catch((e) => console.log("Audio playback failed:", e));

      // Show letter with slight delay
      setTimeout(() => {
        letter.classList.add("visible");
      }, 500);
    }
  });

  // Click on letter to expand it and pull it out of envelope
  letter.addEventListener("click", function () {
    if (isEnvelopeOpen && !isLetterExpanded) {
      letter.classList.remove("visible"); // Remove the peeking animation
      letter.classList.add("expanded");
      isLetterExpanded = true;

      // Show continue button after letter is expanded
      setTimeout(() => {
        continueBtn.classList.remove("hidden");
      }, 1000);
    }
  });

  // Continue button takes you to the home screen
  continueBtn.addEventListener("click", function () {
    // Navigate to home screen
    const screens = document.querySelectorAll(".screen");
    screens.forEach((screen) => {
      screen.classList.remove("active");
    });
    document.getElementById("home").classList.add("active");
  });
});
