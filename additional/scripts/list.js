let cart = document.querySelector('.cart');
let products = JSON.parse(localStorage.getItem('products'));


for (let i = 0; i < products.length; i++) {
    let product_card = document.createElement('div');
    product_card.classList.add('product_cart');

    let product_name = document.createElement('h3');
    product_name.innerHTML = `Name: ${products[i]['name']}`;

    let product_quantity = document.createElement('h3');
    product_quantity.innerHTML = `Quantity: ${products[i]['quantity']}`;

    let product_price = document.createElement('h3');
    product_price.innerHTML = `Price: ${products[i]['price']}`;

    let product_image = document.createElement('img');
    product_image.src = products[i]['image'];

    let product_btn = document.createElement('button');
    product_btn.innerText = 'Delete';
    product_btn.classList.add('delete_btn')

    product_btn.onclick = () => {

        let products_for_delete = JSON.parse(localStorage.getItem('products'));
        products_for_delete.splice(i, 1)
        localStorage.setItem('products', JSON.stringify(products_for_delete))
    }
    product_card.append(product_name, product_quantity, product_price, product_image, product_btn)
    cart.append(product_card)
}
let clear_cart = document.createElement('div');
clear_cart.className = 'clear_cart';
let clear_cart_btn = document.createElement("button");
clear_cart_btn.innerText = 'Очистити корзину';
clear_cart_btn.onclick = () => {
    localStorage.removeItem('products');

}

clear_cart.appendChild(clear_cart_btn)
cart.appendChild(clear_cart)