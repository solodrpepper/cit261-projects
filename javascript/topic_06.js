/*****
 * Add some event listeners to reorder the items in the list
 */

// get the editable section
let editable = document.getElementById('editable');

editable.addEventListener('click', runEvent);

function runEvent(event) {
   console.log(event.target);
}
