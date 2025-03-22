document.addEventListener("DOMContentLoaded", function () {
  console.log("Letter.js loaded with FULL REPLACEMENT approach");

  // Add a click handler to the letter menu item
  const letterMenuItem = document.querySelector('[data-target="letter"]');
  if (letterMenuItem) {
    letterMenuItem.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Letter menu item clicked");

      // 1. Hide all screens
      document.querySelectorAll(".screen").forEach((screen) => {
        screen.style.display = "none";
        screen.classList.remove("active");
      });

      // 2. Get reference to letter section
      const letterSection = document.getElementById("letter");

      // 3. COMPLETELY REPLACE the letter section content
      letterSection.innerHTML = `
          <div class="container py-4">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-6">
                <div class="card border-0 shadow" style="background-color: white; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                  <div class="card-body p-4" style="color: #333; max-height: 70vh; overflow-y: auto;">
                    <!-- Letter content with very explicit styling -->
                    <div style="color: #333; font-family: 'EB Garamond', serif; line-height: 1.7; padding: 0.5rem;">
                      <h2 style="color: #333; margin-bottom: 1.5rem; font-weight: 600;">My Beloved Kayla,</h2>
                      <p style="color: #333; margin-bottom: 1rem;">Happy Anniversary!</p>
                      <p style="color: #333; margin-bottom: 1rem;">
                        Time flies so fast—I can't believe today marks our one-year anniversary. As I sit here writing this, my heart is overflowing with love and gratitude for you. Every day with you is a blessing, and I'm constantly amazed by your kindness, your strength, and your beautiful heart.
                      </p>
                      <p style="color: #333; margin-bottom: 1rem;">
                        Being apart makes this even harder. I miss your hugs and kisses, the warmth of your presence beside me, the way we'd sit together in your living room, laughing and cuddling. I miss you.
                      </p>
                      <p style="color: #333; margin-bottom: 1rem;">
                        I still remember the first time we met—how nervous I was, how you smiled, and how time seemed to stand still. From that moment, I knew there was something special about you, something that drew me in and made me want to know everything about you.
                      </p>
                      <p style="color: #333; margin-bottom: 1rem;">
                        This past year, you've pushed me beyond what I ever thought I was capable of. You've made me smarter, stronger, and better in ways I never imagined. I truly couldn't have done this without you.
                      </p>
                      <p style="color: #333; margin-bottom: 1rem;">
                        Thank you for choosing me, for walking this path with me, and for building a love that is more beautiful than I could have ever imagined. You are my happiness, my motivation, and the reason I wake up every day striving for a better future.
                      </p>
                      <p style="color: #333; margin-bottom: 1rem;">
                        Here's to another year of love, laughter, and adventure together. I will love you forever and ever, my princess.
                      </p>
                      <p style="font-style: italic; margin-top: 2rem; color: #333;">Forever yours,<br />Adlan</p>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <button id="letter-back-btn" class="btn btn-outline-danger rounded-pill px-4 py-2">
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;

      // 4. Make the letter section visible
      letterSection.style.display = "block";
      letterSection.classList.add("active");
      letterSection.style.backgroundColor = "#f9f4e8";
      letterSection.style.overflowY = "auto";

      // 5. Set up the back button functionality
      const backBtn = document.getElementById("letter-back-btn");
      if (backBtn) {
        backBtn.addEventListener("click", function () {
          // Hide letter section
          letterSection.style.display = "none";
          letterSection.classList.remove("active");

          // Show home section
          const homeScreen = document.getElementById("home");
          homeScreen.style.display = "block";
          homeScreen.classList.add("active");

          console.log("Navigated back to home from letter");
        });
      }

      console.log(
        "Letter section COMPLETELY REPLACED and should be visible now"
      );
    });
  }
});
