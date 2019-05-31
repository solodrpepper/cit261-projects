// grab the paragraph we'll be playing with
let funParagraph = document.getElementById('funParagraph');
// grab the button to send all the changes
let button = document.getElementById('button');

// add a listener for the button
button.addEventListener('click', updateParagraph);

// write the update paragraph function to change it's
//    css properties
function updateParagraph() {
   // get all of the input values
   let textColor = document.getElementById('textColor').value;
   let fontSize = document.getElementById('fontSize').value;
   let backgroundColor = document.getElementById('backgroundColor').value;
   let fontStyle = document.getElementById('fontStyle').value;
   let fontWeight = document.getElementById('fontWeight').value;

   funParagraph.style.color = textColor ? textColor : '';
   funParagraph.style.fontSize = fontSize ? fontSize : '';
   funParagraph.style.backgroundColor = backgroundColor ? backgroundColor : '';
   funParagraph.style.fontStyle = fontStyle ? fontStyle : '';
   funParagraph.style.fontWeight = fontWeight ? fontWeight : '';
}
