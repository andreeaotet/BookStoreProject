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
var products = JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total = 0;

// HTML
function tableHTML(i) {
 return `
    <tr>
    <th scope="row">${i+1}</th>
    <td><img style="width:90px;" src="${products[i].url}" ></td>
    <td>${products[i].name}</td>
    <td>1</td>
    <td>${products[i].price}</td>
    </tr>
 `;
}

// BUY
function buy() {
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    counter+=1;
    var itemdb = {
        id:counter,
        order:counter-895,
        total:total
    };
    
    const toast = swal.mixin({
        position:'center',
        showConfirmButton:true,
        timer:5000
    });
    toast.fire({
        type:'success',
        title:'Purchase made successfully',
        text:`Your purchase order is: '${itemdb.order}'`,
    });
    clean();
}

firebase.database().ref('${itemdb.order}' + counter).set(itemdb);

// CLEAN
function clean() {
    localStorage.clear();
    for (let index = 0; index < products.length; index++) {
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    total = 0;
    table.innerHTML=`
        <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
    `;
    cart_n.innerHTML='';
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none";
}

// RENDER
function render() {
    for (let index = 0; index < products.length; index++) {
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    table.innerHTML+=`
    <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">Total: ${total}.00 lei</th>
    </tr>
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">
        <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">Clean Shopping Cart</button>
    </th>
    <th scope="col">
        <button id="btnBuy" onclick="buy()" class="btn btn-success">Buy</button>
    </th>
</tr>
    `;
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
}