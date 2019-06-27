// Code from https://codepen.io/bradtraversy/pen/Bwapow
// adapted to fulfill all requirements

let form = document.getElementById('addForm');
let toTop = document.getElementById('toTop');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// insert to the top of the list
toTop.addEventListener('click', insertAtTheTop);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
   e.preventDefault();

   // Get input value
   let newItem = document.getElementById('item').value;

   // Create new li element
   let li = document.createElement('li');
   // Add text node with input value
   li.appendChild(document.createTextNode(newItem));

   // Create del button element
   let deleteBtn = document.createElement('button');

   // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));

   // Append button to li
   li.appendChild(deleteBtn);

   // Append li to list
   itemList.appendChild(li);
}

// use the insert before
function insertAtTheTop(e) {
   // Get input value
   let newItem = document.getElementById('item').value;

   // Create new li element
   let li = document.createElement('li');
   // Add text node with input value
   li.appendChild(document.createTextNode(newItem));

   // Create del button element
   let deleteBtn = document.createElement('button');

   // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));

   // Append button to li
   li.appendChild(deleteBtn);

   itemList.insertBefore(li, itemList.childNodes[0]);
}

// Remove item
function removeItem(e) {
   if (e.target.classList.contains('delete')) {
      if (confirm('Are You Sure?')) {
         let li = e.target.parentElement;
         itemList.removeChild(li);
      }
   }
}
