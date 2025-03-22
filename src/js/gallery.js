// Gallery images with captions
const galleryImages = [
  {
    src: "assets/images/photo1.jpg",
    caption: "The first time you accompanied me to work!",
  },
  {
    src: "assets/images/photo2.jpg",
    caption: "Our first concert together :)",
  },
  {
    src: "assets/images/photo3.jpg",
    caption: "Our weekly trip to PIM hehe",
  },
  {
    src: "assets/images/photo4.jpg",
    caption: "Me nervous meeting your sister",
  },
  {
    src: "assets/images/photo5.jpg",
    caption: "HUGGIEEESS",
  },
];

function displayGallery() {
  const galleryContainer = document.querySelector(".gallery-grid");

  if (!galleryContainer) {
    console.error("Gallery container not found!");
    return;
  }

  // Clear any existing content
  galleryContainer.innerHTML = "";

  galleryImages.forEach((image, index) => {
    // Create Bootstrap card structure for each image
    const col = document.createElement("div");
    col.classList.add("col");

    const card = document.createElement("div");
    card.classList.add(
      "card",
      "h-100",
      "border-0",
      "shadow-sm",
      "gallery-item"
    );

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = `Memory ${index + 1}`;
    img.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = image.caption || "";

    // Assemble the elements
    cardBody.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    galleryContainer.appendChild(col);

    // Add click handler for lightbox
    card.addEventListener("click", () => {
      openLightbox(image.src);
    });
  });
}

// Create lightbox functionality
function setupLightbox() {
  // Create lightbox elements if they don't exist
  if (!document.querySelector(".lightbox")) {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const lightboxImg = document.createElement("img");
    lightboxImg.alt = "Enlarged gallery image";

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("lightbox-close");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", closeLightbox);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
      if (e.target === this) {
        closeLightbox();
      }
    });

    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
  }
}

function openLightbox(imageSrc) {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox.querySelector("img");

  lightboxImg.src = imageSrc;
  lightbox.classList.add("active");

  // Prevent scrolling while lightbox is open
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  lightbox.classList.remove("active");

  // Re-enable scrolling
  document.body.style.overflow = "";
}

// Add back button functionality
function setupBackButtons() {
  const backButtons = document.querySelectorAll(".back-btn");
  backButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hide all screens
      document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
      });

      // Show home screen
      document.getElementById("home").classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayGallery();
  setupLightbox();
  setupBackButtons();

  // Add menu item click handlers
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");

      // Hide all screens
      document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.remove("active");
      });

      // Show target screen
      document.getElementById(targetId).classList.add("active");
    });
  });
});
