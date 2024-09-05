// Redirect to respective pages on button click
document.getElementById("dashboard-btn").addEventListener("click", function () {
  window.location.href = "dashboard.html"; // Redirect to dashboard page
});

document.getElementById("aboutus-btn").addEventListener("click", function () {
  window.location.href = "aboutus.html"; // Redirect to about us page
});

document.getElementById("orders-btn").addEventListener("click", function () {
  window.location.href = "orders.html"; // Redirect to orders page
});

// Handle place order button
document
  .getElementById("place-order-btn")
  .addEventListener("click", function () {
    // Simulate order confirmation
    const orderConfirmation = document.getElementById("order-confirmation");
    orderConfirmation.innerHTML = "<p>Order placed successfully!</p>";
  });
