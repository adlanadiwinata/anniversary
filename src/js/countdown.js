document.addEventListener("DOMContentLoaded", function () {
  const daysCountElement = document.getElementById("days-count");

  // Set your anniversary date
  const anniversaryDate = new Date("2024-03-23"); // Change to your actual date

  function updateDaysCount() {
    const now = new Date();
    const diff = now - anniversaryDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    daysCountElement.textContent = days;

    // Add animation
    daysCountElement.classList.add("pulse");
    setTimeout(() => {
      daysCountElement.classList.remove("pulse");
    }, 1000);
  }

  updateDaysCount();
});
