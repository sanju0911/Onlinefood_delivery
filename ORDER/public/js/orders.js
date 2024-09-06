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

// Function to fetch orders from the server
async function fetchOrders() {
  try {
    const response = await fetch("http://localhost:5000/yourorders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    displayOrders(data.orders); // Access 'orders' in the response
  } catch (error) {
    console.error("Error fetching orders:", error);
    document.getElementById("order-details").textContent =
      "Failed to load order history.";
  }
}

// Function to display order list
function displayOrders(orders) {
  const ordersList = document.getElementById("orders-list");

  if (orders.length === 0) {
    ordersList.innerHTML = "<li>No orders found.</li>";
    return;
  }

  orders.forEach((order, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <label for="order-${index + 1}">Order #${index + 1} - ${
      order.itemName
    } ($${order.price})</label>
      <button class="view-btn" data-index="${index}">View</button>
    `;
    ordersList.appendChild(listItem);
  });

  // Add event listeners to each 'View' button
  document.querySelectorAll(".view-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const orderIndex = this.getAttribute("data-index");
      displayOrderDetails(orders[orderIndex]);
    });
  });
}

// Function to display detailed order information
function displayOrderDetails(order) {
  const orderDetails = document.getElementById("order-details");
  orderDetails.innerHTML = `
    <h3>Order Details</h3>
    <p><strong>Item:</strong> ${order.itemName}</p>
    <p><strong>Price:</strong> $${order.price}</p>
    <p><strong>Restaurant:</strong> ${order.restaurant}</p>
    <p><strong>Ordered on:</strong> ${new Date(
      order.createdAt
    ).toLocaleDateString()}</p>
    <p><strong>Delivery by:</strong> ${new Date(
      order.deliveryAt
    ).toLocaleDateString()}</p>
  `;
}

// Fetch orders when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchOrders();
});
