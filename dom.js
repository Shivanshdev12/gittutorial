//Traversing in THE DOM
// var itemList = document.querySelector("#items");
// // //parentNodeconsole.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = "#f4f4f4";

// //parentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = "#f4f4f4";

// //childNodes
// console.log(itemList.childNodes);

// //children
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = "yellow";

// //firstchild
// console.log(itemList.firstChild);
// itemList.firstElementChild.textContent = "Hello";

// //lastChild
// itemList.lastElementChild.textContent = "Hello";

// //siblings
// console.log(itemList.nextSibling);

// //previous siblings
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// //create div
// var newDiv = document.createElement("div");

// newDiv.className = "hello";

// newDiv.id = "hello1";

// newDiv.setAttribute("title", "Hello Div");

// var newDivText = document.createTextNode("Hello World");

// newDiv.appendChild(newDivText);

// console.log(newDiv);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

const container = document.querySelector(".container"); //parent
const title = document.getElementById("header-title"); //sibling
const newNode = document.createElement("h1"); //newNode
const textNode = document.createTextNode("Hello");
newNode.appendChild(textNode);

container.insertBefore(newNode, title);

const items = document.querySelector("#items");
const newItem = document.createElement("li");
const textItem = document.createTextNode("Hello");
newItem.appendChild(textItem);

newItem.className = "list-group-item";

items.insertBefore(newItem, items.children[0]);
