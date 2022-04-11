append();

function replace() {
  location.replace("index.html");
}

function append() {
  console.log("yes");
  let data = JSON.parse(localStorage.getItem("data"));
  let container = document.getElementById("products_data");
  container.innerHTML = null;

  data.map((el, index) => {
    let div = document.createElement("div");
    div.innerHTML = `<div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      height: 400px;
      border: 1px solid red;
    "
  >
    <img
      src=${el.image}
      alt=""
      width="80%"
      height="40%"
    />
    <p>${el.brand}</p>
    <p>${el.name}</p>
    <p>${el.price}</p>
    <button id="remove" onclick="remove(${index})">Remove</button>
  </div>`;

    container.appendChild(div);
  });
}

function remove(id) {
  let data = JSON.parse(localStorage.getItem("data"));
  let newData = [];

  for (let i = 0; i < data.length; i++) {
    if (i !== id) {
      newData.push(data[i]);
    }
  }

  localStorage.setItem("data", JSON.stringify(newData));
  append();
}
