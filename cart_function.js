// cart_functions.js

// Function to get the cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to save the cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add a product to the cart
function addToCart(product) {
    let cart = getCart();
    cart.push(product);
    saveCart(cart);
    console.log("Product added to cart!");
}
// Function to add a product to the wishlist
function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function addToWishlist(product) {
    let wishlist = getWishlist();
    wishlist.push(product);
    saveWishlist(wishlist);
    console.log("Product added to wishlist!");
}
// Add event listeners to "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product .btn:not(.wishlist)');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const product = {
                name: productElement.querySelector('h3').textContent,
                description: productElement.querySelector('p:not(.price)').textContent,
                price: parseFloat(productElement.querySelector('.price').textContent.replace('$', '')),
                img: productElement.querySelector('img').src,
            };
            addToCart(product);
        });
    });
});

// Add event listeners to "Add to Wishlist" buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToWishlistButtons = document.querySelectorAll('.product .btn.wishlist');

    addToWishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const product = {
                name: productElement.querySelector('h3').textContent,
                description: productElement.querySelector('p:not(.price)').textContent,
                price: parseFloat(productElement.querySelector('.price').textContent.replace('$', '')),
                img: productElement.querySelector('img').src,
            };
            addToWishlist(product);
        });
    });
});