// Redirect to respective pages on button click
document.getElementById("dashboard-btn").addEventListener("click", function () {
  window.location.href = "dashboard.html"; // Redirect to dashboard page
});

document.getElementById("cart-btn").addEventListener("click", function () {
  window.location.href = "cart.html"; // Redirect to cart page
});

document.getElementById("orders-btn").addEventListener("click", function () {
  window.location.href = "yourorders.html"; // Redirect to orders page
});

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    const contactInfo = document.getElementById("contact-info").value;

    if (contactInfo) {
      alert(
        "Thank you for reaching out! We will get in touch with you shortly."
      );
      document.getElementById("contact-form").reset(); // Reset form after submission
    }
  });
