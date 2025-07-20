fetch('http://localhost:5000/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}')">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  });

function addToCart(name) {
  fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.name === name);
      if (!product) return;
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} added to cart!`);
    });
}