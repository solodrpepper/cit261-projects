// grab all of our elements
let div1Button = document.getElementById('div1Button');
let div2ButtonOut = document.getElementById('div2ButtonOut');
let resetBtn = document.getElementById('resetBtn');
let div3BtnGrow = document.getElementById('div3BtnGrow');
let div3BtnShrink = document.getElementById('div3BtnShrink');

// div elements
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');

// don't know if I want these yet
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

// set up some event listeners
div1Button.addEventListener('click', changeBG);
div2ButtonOut.addEventListener('click', fadeOut);
resetBtn.addEventListener('click', resetDivs);
div3BtnGrow.addEventListener('click', grow);
div3BtnShrink.addEventListener('click', shrink);

// change the background color of a div
function changeBG(e) {
   let clr = document.getElementById('div1Input').value;
   e.target.parentNode.style.backgroundColor = clr;
}

// fade out a div
function fadeOut(e) {
   e.target.parentNode.style.opacity = 0;
}

// create a grow function
function grow(e) {
   e.target.parentNode.style.height = '400px';
}

// create a shrink function
function shrink(e) {
   e.target.parentNode.style.height = '50px';
}

// reset all divs
function resetDivs() {
   // reset div 1
   div1.style.backgroundColor = 'white';
   // reset div 2
   div2.style.transition = 'opacity 0.5s linear 0s';
   div2.style.opacity = 1;
   // reset div 3
   div3.style.transition = 'height 0.5s linear 0s';
   div3.style.height = '50px';
}
