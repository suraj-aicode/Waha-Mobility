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

