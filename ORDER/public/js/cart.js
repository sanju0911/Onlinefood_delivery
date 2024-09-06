// Redirect to respective pages on button click
document.getElementById("dashboard-btn").addEventListener("click", function () {
  window.location.href = "dashboard.html"; // Redirect to dashboard page
});

document.getElementById("aboutus-btn").addEventListener("click", function () {
  window.location.href = "aboutus.html"; // Redirect to about us page
});

document.getElementById("orders-btn").addEventListener("click", function () {
  window.location.href = "yourorders.html"; // Redirect to orders page
});

// Handle place order button
// Function to fetch cart items from the server
async function fetchCartItems() {
  try {
    const response = await fetch("http://localhost:5000/cartlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    displayCartItems(data.cartItems); // Access 'cartItems' in the response
  } catch (error) {
    console.error("Error fetching cart items:", error);
    document.getElementById("order-confirmation").textContent =
      "Failed to load cart items.";
  }
}

// Function to display cart items on the webpage
function displayCartItems(items) {
  const cartItemsList = document.getElementById("cart-items-list");

  if (items.length === 0) {
    cartItemsList.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${item.itemName}</strong> - $${item.price.toFixed(2)}<br>
      <em>Restaurant:</em> ${item.restaurant}<br>
      <em>Added on:</em> ${new Date(item.createdAt).toLocaleDateString()}<br>
      <em>Delivery at:</em> ${new Date(item.deliveryAt).toLocaleDateString()}
    `;
    cartItemsList.appendChild(listItem);
  });
}

// Fetch cart items when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchCartItems();
});
