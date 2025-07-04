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
