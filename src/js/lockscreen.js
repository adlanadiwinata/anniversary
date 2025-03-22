document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".dot");
  const numpadButtons = document.querySelectorAll(".numpad-btn");
  const passcodeHint = document.querySelector(".passcode-hint");
  const timeDisplay = document.querySelector(".time-display");
  const dateDisplay = document.querySelector(".date-display");

  // Update time and date
  function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    timeDisplay.textContent = `${hours}:${minutes}`;

    const options = { weekday: "long", month: "long", day: "numeric" };
    dateDisplay.textContent = now.toLocaleDateString("en-US", options);
  }

  updateDateTime();
  setInterval(updateDateTime, 60000); // Update every minute

  // Passcode handling
  let currentPasscode = "";
  const correctPasscode = "2303"; // Set this to your significant date

  numpadButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (value === "clear") {
        currentPasscode = "";
        updateDots();
      } else if (value === "delete") {
        currentPasscode = currentPasscode.slice(0, -1);
        updateDots();
      } else if (currentPasscode.length < 4) {
        currentPasscode += value;
        updateDots();

        if (currentPasscode.length === 4) {
          checkPasscode();
        }
      }
    });
  });

  function updateDots() {
    dots.forEach((dot, index) => {
      if (index < currentPasscode.length) {
        dot.classList.add("filled");
      } else {
        dot.classList.remove("filled");
      }
    });
  }

  function checkPasscode() {
    if (currentPasscode === correctPasscode) {
      // Correct passcode
      passcodeHint.textContent = "Unlocking...";
      setTimeout(() => {
        navigateTo("envelope");
      }, 1000);
    } else {
      // Wrong passcode
      passcodeHint.textContent = "Wrong passcode. Try again.";
      dots.forEach((dot) => dot.classList.add("shake"));
      setTimeout(() => {
        currentPasscode = "";
        updateDots();
        dots.forEach((dot) => dot.classList.remove("shake"));
        passcodeHint.textContent = "Enter Passcode";
      }, 1000);
    }
  }

  function navigateTo(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
  }
});
