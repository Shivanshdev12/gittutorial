var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var descItem = document.getElementById("desc").value;
  var li = document.createElement("li");

  //<li>Item 1</li>
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  li.appendChild(document.createTextNode(" : "));

  var descp = document.createElement("p");
  descp.appendChild(document.createTextNode(descItem));
  descp.className = "text-center text-muted";
  descp.style.display = "inline";
  li.appendChild(descp);

  //deleteBtn
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  //add an edit button
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm float-right";
  editBtn.appendChild(document.createTextNode("-"));
  li.appendChild(editBtn);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  var input = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    var descName = item.firstElementChild.textContent;
    //search for itemName or desc
    if (
      itemName.toLowerCase().indexOf(input) != -1 ||
      descName.toLowerCase().indexOf(input) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
