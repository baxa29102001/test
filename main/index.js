const button = document.querySelector('button');
const navbar = document.querySelector('.d-flex');

button.addEventListener('click', showandhide);

function showandhide() {
  navbar.classList.toggle('d-flex-active');
  // navbar.classList.add('animate');
}

const h1 = document.querySelector('h1');
console.log(h1);
const text = 'I am web developer and web deigner';
var index = 0;
function textWriter() {
  h1.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}
setInterval(textWriter, 100);

window.addEventListener('scroll',)
