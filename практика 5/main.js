function addToCart(productName) {
    const cart = document.querySelector('.cart');
    const newElement = document.createElement('li');
    newElement.textContent = productName;
    cart.appendChild(newElement);
}