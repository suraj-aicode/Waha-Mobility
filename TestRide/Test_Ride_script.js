// Close banner
function closeBanner() {
  const banner = document.getElementById("popupBanner");
  banner.style.animation = "fadeOut 0.5s ease forwards";
  setTimeout(() => {
    banner.style.display = "none";
  }, 500);
}

// Show dropdown with fade-in animation
function showDropdown(type) {
  document.querySelectorAll(".mega-dropdown").forEach((drop) => {
    drop.style.display = "none";
  });

  const target = document.getElementById("dropdown-" + type);
  target.style.display = "block";
  target.style.animation = "fadeIn 0.4s ease";
}

// Hide dropdown
function hideDropdown() {
  document.querySelectorAll(".mega-dropdown").forEach((drop) => {
    drop.style.display = "none";
  });
}

// ------------------------------------------------------------------------------------

const bikeImage = document.getElementById("bikeImage");
const colorDots = document.querySelectorAll(".color-dot");
const colorNameText = document.getElementById("colorName");

const colorMap = {
  "galactic-grey": "Galactic Grey",
  "super-black": "Super Black",
  "pearl-white": "Pearl White",
  "ruby-red": "Ruby Red",
  "blazing-blue": "Blazing Blue",
};

// Update on click
colorDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const selectedColor = dot.getAttribute("data-color");

    // Update image
    bikeImage.src = `${selectedColor}.webp`;

    // Update color name
    colorNameText.textContent = colorMap[selectedColor];

    // Optional: Highlight selected dot
    colorDots.forEach((d) => d.classList.remove("active-dot"));
    dot.classList.add("active-dot");
  });
});

window.addEventListener("load", () => {
  document.querySelector(".color-selector").style.opacity = "0";
  document.querySelector(".form-wrapper").style.opacity = "0";

  setTimeout(() => {
    document.querySelector(".color-selector").style.transition =
      "opacity 1s ease";
    document.querySelector(".form-wrapper").style.transition =
      "opacity 1s ease";
    document.querySelector(".color-selector").style.opacity = "1";
    document.querySelector(".form-wrapper").style.opacity = "1";
  }, 200);
});
