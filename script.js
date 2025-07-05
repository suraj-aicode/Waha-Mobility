function calculateSavings() {
  const commute = parseFloat(document.getElementById("commute").value);
  const petrolPrice = parseFloat(document.getElementById("petrolPrice").value);
  const mileage = parseFloat(document.getElementById("mileage").value);

  if (!commute || !petrolPrice || !mileage) {
    alert("Please fill in all the fields correctly.");
    return;
  }

  const dailyFuelCost = (commute / mileage) * petrolPrice;
  const monthlySaving = dailyFuelCost * 30;
  const yearlySaving = dailyFuelCost * 365;

  document.getElementById("monthlySaving").textContent =
    monthlySaving.toFixed(2);
  document.getElementById("yearlySaving").textContent = yearlySaving.toFixed(2);
  document.getElementById("co2Saving").textContent = co2Saving.toFixed(0);
  document.getElementById("treesSaved").textContent = treesSaved;
}

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

// Volvo car logo
function reset() {
  const reset = document.getElementById("Company-logo");
}

let currentSlide = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length - 1;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);
