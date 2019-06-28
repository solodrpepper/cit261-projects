// get canvas
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.fillRect(10, 10, 280, 80);
context.font = '20px Arial';
context.fillStyle = '#02fdfd';
context.textAlign = 'center';
context.fillText('I did it!', canvas.width / 2, canvas.height / 2);
