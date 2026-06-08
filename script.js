const products = [
  { id: 1, name: "Summer Hat", price: 15 },
  { id: 2, name: "Graphic Shirt", price: 25 },
  { id: 3, name: "Sunglasses", price: 20 }
];

let cart = [];

const productsContainer = document.getElementById("products");
const cartItemsContainer = document.getElementById("cartItems");
const totalDisplay = document.getElementById("total");

// DISPLAY PRODUCTS
function displayProducts() {
  productsContainer.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productsContainer.appendChild(div);
  });
}

// ADD TO CART
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// REMOVE ITEM
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// UPDATE CART UI
function updateCart() {
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">X</button>
    `;

    cartItemsContainer.appendChild(div);
  });

  totalDisplay.textContent = total;
}

// CHECKOUT
document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  alert("Order placed successfully!");

  console.log("ORDER:");
  console.log(cart);

  cart = [];
  updateCart();
});

displayProducts();
document
  .getElementById("checkoutForm")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    window.location.href =
      "https://buy.stripe.com/3cIfZh8FSbMK63fd7ce7m00";
  });
