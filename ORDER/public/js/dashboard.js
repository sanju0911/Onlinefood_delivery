// Redirect to respective pages on button click
document.getElementById("cart-btn").addEventListener("click", function () {
  window.location.href = "cart.html"; // Redirect to cart page
});

document.getElementById("aboutus-btn").addEventListener("click", function () {
  window.location.href = "aboutus.html"; // Redirect to about us page
});

document.getElementById("orders-btn").addEventListener("click", function () {
  window.location.href = "yourorders.html"; // Redirect to orders page
});

// Function to get selected items
function getSelectedItems() {
  const selectedItems = [];

  // Get all checkbox elements
  const checkboxes = document.querySelectorAll(
    '#menu-list input[type="checkbox"]'
  );

  // Loop through checkboxes and add selected items to the array
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const label = document.querySelector(
        `label[for="${checkbox.id}"]`
      ).textContent;
      const itemName = label.split(" (")[0]; // Extract the item name
      const itemPrice = parseFloat(label.match(/\$(\d+)/)[1]); // Extract the price
      selectedItems.push({
        name: itemName,
        price: itemPrice,
        restaurant: "swagath", // Sample restaurant name
      });
    }
  });

  return selectedItems;
}

// Function to handle API calls using fetch
async function sendApiRequest(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error:", error);
    alert(`An error occurred: ${error.message}`);
  }
}

// Event handler for "Place Order"
document.getElementById("order-btn").addEventListener("click", async () => {
  const selectedItems = getSelectedItems();

  if (selectedItems.length === 0) {
    alert("Please select at least one item before placing the order.");
    return;
  }

  const data = {
    items: selectedItems,
    orderType: "placeOrder",
  };

  // API call to place the order
  const response = await sendApiRequest("http://localhost:5000/order", data);

  if (response) {
    alert(`Order Response: ${response.message}`);
  }
});

// Event handler for "Add to Cart"
document
  .getElementById("add-to-cart-btn")
  .addEventListener("click", async () => {
    const selectedItems = getSelectedItems();

    if (selectedItems.length === 0) {
      alert("Please select at least one item before adding to the cart.");
      return;
    }

    const data = {
      items: selectedItems,
      orderType: "addToCart",
    };

    // API call to add items to the cart
    const response = await sendApiRequest("http://localhost:5000/cart", data);

    if (response) {
      alert(`Cart Response: ${response.message}`);
    }
  });
