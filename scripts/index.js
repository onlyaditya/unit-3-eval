//store the products array in localstorage as "data"

let d = localStorage.getItem("data");

if (!d) {
  let data = [];
  localStorage.setItem("data", JSON.stringify(data));
}

function replace() {
  location.replace("inventory.html");
}

function product(brand, name, price, url) {
  this.brand = brand;
  this.name = name;
  this.price = price;
  this.image = url;
}

function addData(e) {
  e.preventDefault();
  let b = document.getElementById("product_brand").value;
  let n = document.getElementById("product_name").value;
  let p = document.getElementById("product_price").value;
  let i = document.getElementById("product_image").value;

  let product1 = new product(b, n, p, i);

  let d = JSON.parse(localStorage.getItem("data"));
  d.push(product1);

  localStorage.setItem("data", JSON.stringify(d));

  console.log(product1);
}
