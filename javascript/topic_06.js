// copied from Brad Traversy @ https://codepen.io/bradtraversy/pen/Bwapow
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
let currentSelection;

// Form submit event
form.addEventListener('click', addItem);
// select item event
itemList.addEventListener('click', selectItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
   // Get input value
   let newItem = document.getElementById('item').value;
   let placement = document.getElementById('placementSelect');
   let placementValue = document.getElementById('placementSelect').value;

   // Create new li element
   let li = document.createElement('li');
   // Add class
   li.className = 'list-group-item';
   // Add text node with input value
   li.appendChild(document.createTextNode(newItem));

   // Create del button element
   let deleteBtn = document.createElement('button');

   // Add classes to del button
   deleteBtn.className = 'delete-button rounded_border';

   // Append text node
   deleteBtn.appendChild(document.createTextNode('X'));

   // Append button to li
   li.appendChild(deleteBtn);

   // where do we place it?
   switch (placementValue) {
      case 'default':
         // Append li to list
         itemList.appendChild(li);
         break;
      case 'edit':
         console.log(itemList[currentSelection], currentSelection);
         itemList.replaceChild(li, currentSelection);
         break;
      default:
         break;
   }
}

// Remove item
function removeItem(e) {
   if (e.target.classList.contains('delete-button')) {
      if (confirm('Are You Sure?')) {
         let li = e.target.parentElement;
         itemList.removeChild(li);
      }
   }
}

// Filter Items
function filterItems(e) {
   // convert text to lowercase
   let text = e.target.value.toLowerCase();
   // Get lis
   let items = itemList.getElementsByTagName('li');
   // Convert to an array
   Array.from(items).forEach(function(item) {
      let itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) != -1) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
   });
}

// select the current item
function selectItem(e) {
   let currentSelection = document.getElementById('itemReference');
   // update the UI for current Item
   currentSelection.innerHTML = e.target.innerText.replace('X', '');
   currentSelection = e.target.parentElement.children[e.target.id];
   console.log(currentSelection);
}
