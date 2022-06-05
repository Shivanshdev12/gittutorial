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

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// //third element in list - green bg
// items[2].style.backgroundColor = "green";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

// var li = document.getElementsByTagName("li");
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// li[4].classList.add("list-group-item");

//QuerySelector

// var header = document.querySelector("#main-header");
// header.getElementsByClassName.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello World!";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "blue";

//second item having green background
// secondItem.style.backgroundColor = "green";

//third item invisible
// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display = "none";

//QuerySelectorAll
var items = document.querySelectorAll(".list-group-item");
// console.log(items);
items[1].style.color = "green";

var odd = document.querySelectorAll(".list-group-item:nth-child(odd)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
