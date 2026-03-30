import { items } from "./data.js";
const productsGrid = document.querySelector(".products-grid");
productsGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-btn")) {
    console.log("adding to cart");
  }
});

for (let i = 0; i < items.length; i++) {
  let badge = "";
  if (i === 0) {
    badge = `<span class="featured-badge" style="background-color: #2563eb">NEW</span>`;
  } else if (i === 1) {
    badge = `<span class="featured-badge" style="background-color: #ef4444">BESTSELLER</span>`;
  }
  productsGrid.innerHTML += `
    <div class="product-card">
      <div class="image-area">
        ${badge}
      </div>
      <div class="product-info">
        <p>${items[i].category}</p>
        <h6 class="product-name">${items[i].item}</h6>
        <div class="product-footer">
          <div>
            <p class="price">${items[i].price}</p>
            <p class="meta">In stock · Free shipping</p>
          </div>
          <button class="add-to-cart-btn">Add to cart</button>
        </div>
      </div>
    </div>
  `;
}
