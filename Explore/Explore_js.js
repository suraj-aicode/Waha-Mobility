  let currentSlide = 0;
  const slider = document.getElementById('slider');
  const totalSlides = slider.children.length-1;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  // Auto-slide every 4 seconds
  setInterval(nextSlide, 3000);

// Volvo-car-logo
  function reset() {
    const reset = document.getElementById('Company-logo');
}  

// Cross-mark
  function closeBanner() {
    const banner = document.getElementById('popupBanner');
    banner.style.display = 'none';
}

// DropDown 
  function showDropdown(type) {
    document.querySelectorAll('.mega-dropdown').forEach(drop => drop.style.display = 'none');
    document.getElementById('dropdown-' + type).style.display = 'block';
}

  function hideDropdown() {
    document.querySelectorAll('.mega-dropdown').forEach(drop => drop.style.display = 'none');
}