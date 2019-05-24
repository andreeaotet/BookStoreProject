var firebaseConfig = {
    apiKey: "AIzaSyBxp_rznXinX-WCJRW9nqiR7McSm79gjLY",
    authDomain: "bookstoreproject-34af3.firebaseapp.com",
    databaseURL: "https://bookstoreproject-34af3.firebaseio.com",
    projectId: "bookstoreproject-34af3",
    storageBucket: "bookstoreproject-34af3.appspot.com",
    messagingSenderId: "451733771087",
    appId: "1:451733771087:web:c90ecedc0ac0cb9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');

// DIVS
var beletristicaDiv = document.getElementById('beletristicaDiv');
var biografiiDiv = document.getElementById('biografiiDiv');
var dezvPersDiv = document.getElementById('dezvPersDiv');

// INFORMATION
var BELETRISTICA = [
    { name: 'Beletr #1', price: 10 },
    { name: 'Beletr #2', price: 15 },
    { name: 'Beletr #3', price: 18 },
    { name: 'Beletr #4', price: 23 }
];
var BIOGRAFII = [
    { name: 'Bio #1', price: 12 },
    { name: 'Bio #2', price: 15 },
    { name: 'Bio #3', price: 17 },
    { name: 'Bio #4', price: 20 }
];
var DEZVPERS = [
    { name: 'Dezv #1', price: 15 },
    { name: 'Dezv #2', price: 18 },
    { name: 'Dezv #3', price: 22 },
    { name: 'Dezv #4', price: 25 }
];

// HTML
function HTMLbeletrProduct(con) {
    let URL = `img/beletristica/beletr${con}.jpg`;
    let btn = `btnBeletr${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>

                    <p class="card-text">${BELETRISTICA[con-1].name}</p>
                    <p class="card-text">${BELETRISTICA[con-1].price}.00</p>

                    <div class="d-Flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${BELETRISTICA[con-1].name}', '${BELETRISTICA[con-1].price}','${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="cart.html">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${BELETRISTICA[con-1].name}', '${BELETRISTICA[con-1].price}','${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping</small>

                    </div>
                </div>
            </div>
        </div>
      `
}

function HTMLbioProduct(con) {
    let URL = `img/biografii/bio${con}.jpg`;
    let btn = `btnBio${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>

                    <p class="card-text">${BIOGRAFII[con-1].name}</p>
                    <p class="card-text">${BIOGRAFII[con-1].price}.00</p>

                    <div class="d-Flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${BIOGRAFII[con-1].name}', '${BIOGRAFII[con-1].price}','${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="cart.html">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${BIOGRAFII[con-1].name}', '${BIOGRAFII[con-1].price}','${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping</small>

                    </div>
                </div>
            </div>
        </div>
      `
}

function HTMLdezvProduct(con) {
    let URL = `img/dezvoltare-personala/dezv${con}.jpg`;
    let btn = `btnDEZV${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>

                    <p class="card-text">${DEZVPERS[con-1].name}</p>
                    <p class="card-text">${DEZVPERS[con-1].price}.00</p>

                    <div class="d-Flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${DEZVPERS[con-1].name}', '${DEZVPERS[con-1].price}','${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="cart.html">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${DEZVPERS[con-1].name}', '${DEZVPERS[con-1].price}','${URL}', '${con}', '${btn}')" class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping</small>

                    </div>
                </div>
            </div>
        </div>
      `
}

// ANIMATION
function animation() {
    const toast = swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast.fire({
        type: 'success',
        title: 'Added to shopping cart'
    });
    
}

// CART FUNCTIONS
function cart(name,price,url,con,btncart) {
    var item = {
        name:name, 
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}

function cart2(name,price,url,con,btncart) {
    var item = {
        name:name, 
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}

// RENDER 
function render() {
    for (let index = 1; index <= 4; index++) {
        beletristicaDiv.innerHTML+=`${HTMLbeletrProduct(index)}`;
        biografiiDiv.innerHTML+=`${HTMLbioProduct(index)}`;
        dezvPersDiv.innerHTML+=`${HTMLdezvProduct(index)}`;
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
}
