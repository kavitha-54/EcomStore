let cart = []; // Single cart array to store items

function addToCart(productName, price) {
    cart.push({ name: productName, price: price }); // Add item to cart
    updateCartCount();
    alert(`${productName} added to cart!`);
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    let cartItems = "Your Cart:\n";
    let total = 0;

    cart.forEach((item, index) => {
        cartItems += `${index + 1}. ${item.name} - ₹${item.price}\n`;
        total += item.price;
    });

    cartItems += `\nTotal: ₹${total}`;
    alert(cartItems);
}
