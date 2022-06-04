// console.log(document.domain);
// console.log(document.URL);
// console.log(document.activeElement);

// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);
// header.style.borderBottom = "solid 3px #000";

// var addItems = document.querySelector(".title");
// addItems.innerHTML = "<B>Add Items</B>";
// addItems.style.color = "green";
// console.log(addItems);

var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}

//third element in list - green bg
items[2].style.backgroundColor = "green";

for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
