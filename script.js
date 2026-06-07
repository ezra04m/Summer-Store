const products = [
  {
    name: "Vintage Hoodie",
    price: "$40",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "Sneakers",
    price: "$75",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
  }
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
  productsContainer.innerHTML += `
    <div class="card">
      <img src="${product.image}" alt="${product.name}" />
      <div class="card-content">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
      </div>
    </div>
  `;
});

document.getElementById("checkoutForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Order submitted! You can now contact the customer and ship the item.");
});
Cart = ["shirt", "shoes", "hat"]
