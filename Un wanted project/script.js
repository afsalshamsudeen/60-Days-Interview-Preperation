

const cartItems = {
    itemName : "Keyboard",
    brand : "Wooting 60H",
    price: "7999",
    rating: "4.8",
    availability: "out-of-stock"
}

function displayItems (cartItems){

    const itemsContainer = document.querySelector("#cart-container")
    const cartIt = `
        <div class="cart-card" id="cart-container">
            <h3>${cartItems.itemName}</h3>
            <p>Brand: ${cartItems.brand}</p>
            <p>Price: ${cartItems.price}</p>
            <p>Rating: ${cartItems.rating}</p>
            <p>Availability: ${cartItems.availability}</p>
        </div>
    `
    itemsContainer.innerHTML = cartIt;
}

displayItems(cartItems);