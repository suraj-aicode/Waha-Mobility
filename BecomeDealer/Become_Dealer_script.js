  document.getElementById("dealerForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    // Show message
    const msg = document.getElementById("successMsg");
    msg.style.display = "block";

    // Clear form fields
    this.reset();

    // Optionally hide the message after a few seconds
    setTimeout(() => {
      msg.style.display = "none";
    }, 5000); // Hide after 5 seconds
  });


  function animateText(selector) {
    document.querySelectorAll(selector).forEach(el => {
      const text = el.getAttribute("data-text");
      el.innerHTML = "";
      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${i * 0.05}s`;
        el.appendChild(span);
      });
    });
  }

  animateText(".animated-text");
