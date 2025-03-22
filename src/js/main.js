document.addEventListener("DOMContentLoaded", function () {
  // Configuration with separate letter contents
  const config = {
    anniversaryDate: "2024-03-23",
    passcode: "2303",
    envelopeLetter: `<h2>Hii Princess!!,</h2>
        
        <p>Happy Anniversary!</p>
        
        <p>This is a quick note to let you know how much you mean to me. Please continue to the main part of your gift to see more!</p>
        
        <p class="signature">With love,<br>Dlano</p>`,

    // Keep this for reference but we won't use it to overwrite HTML content
    mainLetter: `<h2>My Beloved Kayla,</h2>
                <p>Happy Anniversary!</p>
                <p>
                  Time flies so fast—I can't believe today marks our one-year anniversary. As I sit here writing this, my heart is overflowing with love and gratitude for you. Every day with you is a blessing, and I'm constantly amazed by your kindness, your strength, and your beautiful heart.
                </p>
                <p>
                  Being apart makes this even harder. I miss your hugs and kisses, the warmth of your presence beside me, the way we'd sit together in your living room, laughing and cuddling. I miss you.
                </p>
                <p>
                  I still remember the first time we met—how nervous I was, how you smiled, and how time seemed to stand still. From that moment, I knew there was something special about you, something that drew me in and made me want to know everything about you.
                </p>
                <p>
                  This past year, you've pushed me beyond what I ever thought I was capable of. You've made me smarter, stronger, and better in ways I never imagined. I truly couldn't have done this without you.
                </p>
                <p>
                  Thank you for choosing me, for walking this path with me, and for building a love that is more beautiful than I could have ever imagined. You are my happiness, my motivation, and the reason I wake up every day striving for a better future.
                </p>
                <p>
                  Here's to another year of love, laughter, and adventure together. I will love you forever and ever, my princess.
                </p>
                <p class="signature">Forever yours,<br />Adlan</p>`,
  };

  // Global variables
  const screens = document.querySelectorAll(".screen");
  const backButtons = document.querySelectorAll(".back-btn");

  // Check your navigateTo function
  window.navigateTo = function (screenId) {
    console.log("Navigating to:", screenId);

    // Debug which screens exist
    const allScreens = document.querySelectorAll(".screen");
    console.log("All screens:", allScreens.length);

    // Remove active class from all screens
    allScreens.forEach((screen) => {
      screen.classList.remove("active");
    });

    // Add active class to target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add("active");
      console.log("Added active class to:", screenId);
    } else {
      console.error("Target screen not found:", screenId);
    }
  };

  // Set up back buttons
  backButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navigateTo("home");
    });
  });

  // Menu navigation
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      navigateTo(target);
    });
  });

  // Continue button from envelope to home
  const continueBtn = document.getElementById("continue-btn");
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      navigateTo("home");
    });
  }

  // Populate the envelope letter content
  const envelopeLetterContent = document.querySelector(
    "#envelope .letter-content"
  );
  if (envelopeLetterContent) {
    envelopeLetterContent.innerHTML = config.envelopeLetter.replace(/\n/g, "");
    console.log("Envelope letter content populated");
  } else {
    console.error("Envelope letter content element not found");
  }

  // COMMENTED OUT - Don't overwrite the HTML content of the letter section
  // const mainLetterContent = document.querySelector("#letter .letter-content");
  // if (mainLetterContent) {
  //   mainLetterContent.innerHTML = config.mainLetter.replace(/\n/g, "");
  //   console.log("Main letter content populated");
  // } else {
  //   console.error("Main letter content element not found");
  // }

  // Debug - log all letter-content elements
  console.log(
    "All letter-content elements:",
    document.querySelectorAll(".letter-content")
  );
});
