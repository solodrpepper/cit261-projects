// grab the p elements
let tMove = document.getElementById('tMove');
let tChange = document.getElementById('tChange');
let tChangeRelease = document.getElementById('tChangeRelease');

// add some event listeners for mobile
tMove.addEventListener('touchstart', moveElementStart, false);
tMove.addEventListener('touchmove', moveElement, false);
tMove.addEventListener('touchend', moveElementEnd, false);
tChange.addEventListener('touchstart', changeColor);
tChangeRelease.addEventListener('touchend', changeTextColor);

// add some event listeners for desktop
tMove.addEventListener('mousedown', moveElementStart, false);
tMove.addEventListener('drag', moveElement, false);
tMove.addEventListener('mouseup', moveElementEnd, false);
tChange.addEventListener('mousedown', changeColor);
tChangeRelease.addEventListener('mouseup', changeTextColor);

// needed variables (from https://www.kirupa.com/html5/drag.htm)
active = false;
let currentY;
let initialY;
let offsetY = 0;

// implement functions
function moveElementStart(event) {
   // get touch event y coordinate
   if (event.type === 'touchstart') {
      initialY = event.touches[0].clientY - offsetY;
   } else {
      initialY = event.clientY - offsetY;
   }

   if (event.target === tMove) {
      active = true;
   }
}

function moveElementEnd(event) {
   initialY = currentY;

   active = false;
}

function moveElement(event) {
   if (active) {
      event.preventDefault();

      if (event.type === 'touchmove') {
         currentY = event.touches[0].clientY - initialY;
      } else {
         currentY = event.clientY - initialY;
      }

      yOffset = currentY;

      setTranslate(currentY, tMove);
   }
}

function setTranslate(yPos, el) {
   el.style.transform = `translate3d(0px, ${yPos}px, 0)`;
}

// end of (https://www.kirupa.com/html5/drag.htm)

// this function reacts to the beginning of the press
function changeColor(event) {
   // this is from Franck Freiburger
   // on stack ofverflow
   // @ https://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript/1152508
   let color =
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

   tChange.style.background = color;
}

// this function reacts to the release of the press
function changeTextColor(event) {
   let color =
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

   tChangeRelease.style.color = color;
}
