// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

document.getElementById('testBtn')?.addEventListener('click', function () {
  console.log('this in a event', this);
});

document
  .getElementById('testBtn2')
  ?.addEventListener('keydown', function (event) {
    // `this` will point to `element`, in this case the window object
    console.log('this', this.event.key);
  });

let button = document.querySelector('button');
button.addEventListener('mousedown', (event) => {
  if (event.button == 0) {
    console.log('Left button');
  } else if (event.button == 1) {
    console.log('Middle button');
  } else if (event.button == 2) {
    console.log('Right button');
  }
});
