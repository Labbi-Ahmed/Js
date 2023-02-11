
const ul = document.querySelector('.ul-items');
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[1].style.backgroundColor = 'lightBlue'
ul.childNodes[5].style.backgroundColor = 'lightBlue'
ul.childNodes[3].style.backgroundColor = 'lightBlue'
ul.style.cursor = 'pointer'

