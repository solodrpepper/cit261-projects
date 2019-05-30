/*************************************
 * This file will demonstrate my fluency with loops
 */

// Clear function
function clearCell(sectionname) {
   let cellContents = ``;
   let contentSection = document.getElementById(sectionname);
   contentSection.innerHTML = cellContents;

   let section = contentSection.parentElement;

   for (let node of section.children) {
      // console.log(
      //    `This is the output for the clear selection: ${node.tagName.toLowerCase()}`
      // );
      if (node.tagName.toLowerCase() == `input`) {
         node.value = ``;
      }
   }
}

// Good ole fashion "For Loop"
function forLoopTest() {
   let finalText = '';

   for (let i = 0; i < 64; i++) {
      finalText += `<div class='item'>${i}</div>`;
      document.getElementById('for-loop-test').innerHTML = finalText;
   }
}

// While Loop
function whileLoopTest() {
   // grab user inputs for cleaner code
   sInput = document.getElementById('start_num');
   eInput = document.getElementById('end_condition');

   // console.table([sInput, eInput]);
   // get user start value input and set to zero if not set
   let start = sInput == '' ? 0 : parseInt(sInput.value);
   // check for and set user defined end condition
   //    (if not set, default to 81)
   let end = eInput == '' ? 81 : parseInt(eInput.value);
   // create variable to hold final output of the loop
   let finalText = '';
   // check to make suer that the user doesn't create an infinite loop
   //    by inserting a greater end point than it's start value, and make sure
   //    it's valid input. (no negative inputs)
   if (start < 0 || end < 0) {
      document.getElementById(
         'while-loop-test'
      ).innerHTML = `Must be greater than zero to run!`;
      document.getElementById(sInput.id).value = '';
      document.getElementById(eInput.id).value = '';
      return;
   }
   // now make sure end isn't greater than start
   if (start >= end) {
      // console.log(`Am I getting in here? ${start >= end}`);
      document.getElementById(
         'while-loop-test'
      ).innerHTML = `Start must be smaller than end!`;
      document.getElementById(sInput.id).value = '';
      document.getElementById(eInput.id).value = '';
      return;
   }

   while (start < end) {
      console.log(`Am I getting in here? ${start < end}`);
      finalText += `<div class='item'>${start}</div>`;
      document.getElementById('while-loop-test').innerHTML = finalText;
      start++;
   }
}

// D0/While Loop
function doLoopTest() {
   // grab user inputs for cleaner code
   doEInput = document.getElementById('do_end_condition');
   // check for and set user defined end condition
   //    (if not set, default to 0)
   let end = doEInput == '' ? 0 : parseInt(doEInput.value);
   // create variable to hold final output of the loop
   let finalText = '';
   //    it's valid input. (no negative inputs)
   if (end < 0) {
      document.getElementById(
         'while-loop-test'
      ).innerHTML = `Must be greater than zero to run!`;
      document.getElementById(doEInput.id).value = '';
      return;
   }
   let i = 0;
   do {
      finalText += `<div class='item'>${i}</div>`;
      document.getElementById('do-loop-test').innerHTML = finalText;
      i++;
   } while (i < end);
}

// the for in loop test function
function forInLoopTest() {
   // create the associative array in the example
   car = { make: 'Honda', model: 'Civic', bodyType: 'sedan', modelDate: 2010 };

   let finalText = `<table>Car Object<th>Property</th><th>Value</th>`;

   // now we'll loop through it and display the information in a table!
   for (const prop in car) {
      finalText += `<tr><td>${prop}</td><td>${car[prop]}</td></tr>`;
   }
   finalText += `</table>`;

   // now send the final text to the element it'll be displayed in
   document.getElementById('for-in-test').innerHTML = finalText;
}

// for of loop test example
function forOfLoopTest() {
   // get the input fields
   const modifier = parseInt(document.getElementById('modify').value);
   const operator = document.getElementById('operator').value;

   // console log the variables
   console.log(`Modifier: ${modifier}, Operator: ${operator}`);

   // create an array to iterate through
   let arr = [];
   // simple for loop to fill the array
   for (let i = 0; i < 64; i++) {
      arr[i] = i;
   }

   // create iterator
   let item;

   // create string to hold new content
   finalText = '';

   // use a switch statement to handle the operators
   switch (operator) {
      case '+':
         for (item of arr) {
            item += modifier;
            finalText += `<div class='item'>${item}</div>`;
         }
         break;
      case '-':
         for (item of arr) {
            item -= modifier;
            finalText += `<div class='item'>${item}</div>`;
         }
         break;
      case '*':
         for (item of arr) {
            item *= modifier;
            finalText += `<div class='item'>${item}</div>`;
         }
         break;
      case '/':
         for (item of arr) {
            item /= modifier;
            finalText += `<div class='item'>${item}</div>`;
         }
         break;
      case '%':
         for (item of arr) {
            item %= modifier;
            finalText += `<div class='item'>${item}</div>`;
         }
         break;
      default:
         break;
   }
   // debugging
   console.log(arr);
   document.getElementById('for-of-test').innerHTML = finalText;
}

function forOfLoader() {
   // create an array to iterate through
   let arr = '';
   // simple for loop to fill the array
   for (let i = 0; i < 64; i++) {
      arr += `<div class='item'>${i}</div>`;
   }
   document.getElementById('for-of-test').innerHTML = arr;
}

window.onload = function() {
   forOfLoader();
};
