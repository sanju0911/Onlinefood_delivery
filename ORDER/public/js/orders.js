// Redirect to respective pages on button click
document.getElementById("dashboard-btn").addEventListener("click", function () {
  window.location.href = "dashboard.html"; // Redirect to dashboard page
});

document.getElementById("cart-btn").addEventListener("click", function () {
  window.location.href = "cart.html"; // Redirect to cart page
});

document.getElementById("aboutus-btn").addEventListener("click", function () {
  window.location.href = "aboutus.html"; // Redirect to about us page
});

// Function to handle viewing order details
const viewButtons = document.querySelectorAll(".view-btn");
viewButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const orderDetails = document.getElementById("order-details");
    orderDetails.innerHTML = `<p>Details for Order #00${
      index + 1
    }: Pizza, Burger, Fries, etc.</p>`;
  });
});
