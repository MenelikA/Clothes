const API_URL = "http://localhost:3005/api/";

var userCart = [];

const getProducts = async ()=> {
    const response = await fetch(API_URL + 'products');
    const products = await response.json();
    return products;
}

const addProduct = async ()=> {
    let clothingName = document.getElementById('clothing-name').value;
    let clothingPrice = document.getElementById('clothing-price').value;
    let clothingCategory = document.getElementById('clothing-select').value;

    // if any of the three fields are empty, return
    if (clothingName === '' || clothingPrice === '' || clothingCategory === '') {
        alert('Please fill out all fields!');
        return;
    }

    let clothing = {
        name: clothingName,
        price: parseInt(clothingPrice),
        category: clothingCategory
    }

    const response = await fetch(API_URL + 'products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clothing)
    });
    const product = await response.json();
    alert('Product added successfully!');
    return product;
}

const addProductToOrder = ()=> {
    let productSelect = document.getElementById('product-select').value;

    if (productSelect.value === '') {
        alert('Please select a product!');
        return;
    }

    let product = JSON.parse(productSelect);
    userCart.push(product);
    console.log(userCart);
    alert(`${product.name} added to order!`);
}

const addOrder = async ()=> {
    let customerName = document.getElementById('customer-name').value;
    let customerAddress = document.getElementById('customer-address').value;
    let customerCreditCard = document.getElementById('customer-credit-card').value;

    // if any of the three fields are empty, return
    if (customerName === '' || customerAddress === '' || customerCreditCard === '') {
        alert('Please fill out all fields!');
        return;
    }

    let order = {
        customer_name: customerName,
        customer_address: customerAddress,
        customer_credit_card_number: customerCreditCard,
        products: userCart
    }
    
    console.log(order);

    const response = await fetch(API_URL + 'orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    const orderResponse = await response.json();
    console.log(orderResponse);
    alert('Order added successfully!');
    return orderResponse;
}

// call a function when everything has been rendered
window.onload = ()=> {
    let createOrderProductSelect = document.getElementById('product-select');
    getProducts().then((products) => {
        // empty the existing options in the select
        createOrderProductSelect.innerHTML = '';
        // loop through the products and add them to the select
        products.forEach((product) => {
            let option = document.createElement('option');
            option.value = JSON.stringify(product);
            option.innerHTML = product.name;
            createOrderProductSelect.appendChild(option);
        });
    })
}