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
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const contactInfo = document.getElementById("contact-info").value;

    try {
      const response = await fetch("http://localhost:5000/complaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: contactInfo }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      alert(result.message); // Show the response message in a popup
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Failed to submit complaint. Please try again later.");
    }
  });
});
