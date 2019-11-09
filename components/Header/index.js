// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
// define new elements
const header = document.createElement('div');
const dateSpan = document.createElement('span');
const h1Title = document.createElement('h1');
const tempSpan = document.createElement('span');

// set class names
header.classList.add('header')
dateSpan.classList.add('date')
tempSpan.classList.add('temp')

// set text content
dateSpan.textContent = 'SMARCH 28, 2019'
h1Title.textContent = 'Lambda Times'
tempSpan.textContent = '98°'

// Setup structure of elements
header.appendChild(dateSpan)
header.appendChild(h1Title)
header.appendChild(tempSpan)

return header;
};

const headerObject = document.querySelector('.header-container');
headerObject.appendChild(Header());


