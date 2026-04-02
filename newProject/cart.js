function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  if (cartItems) {
    window.cart = cartItems;
  } else {
    window.cart = {};
  }

  displayCart();
  updateSummary();
}

function displayCart() {
  const cartItemsSection = document.querySelector(".cart-items");
  cartItemsSection.innerHTML = "";

  for (let id in window.cart) {
    const item = window.cart[id];

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
      <h3>${item.item}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <button class="remove-btn" data-id="${id}">Remove</button>
    `;

    cartItemsSection.appendChild(itemDiv);
  }

  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const id = e.target.getAttribute("data-id");
      window.cart[id].quantity = parse(e.target.value);
      localStorage.setItem("cartItems", JSON.stringify(window.cart));
      updateSummary();
    });
  });

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      delete window.cart[id];
      localStorage.setItem("cartItems", JSON.stringify(window.cart));
      displayCart();
      updateSummary();
    });
  });
}

function updateSummary() {
  let subtotal = 0;

  for (let id in window.cart) {
    const item = window.cart[id];
    const price = parse(item.price.replace("$", ""));
    subtotal += price * item.quantity;
  }

  const shipping = 10.0;
  const total = subtotal + shipping;

  document.querySelector(".subtotal").textContent = "$" + subtotal.toFixed(2);
  document.querySelector(".total").textContent = "$" + total.toFixed(2);
}

loadCart();
