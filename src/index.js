import './index.html';
import './index.scss';



// карусель в блоке Interests

let viewport = document.querySelector('.interests').offsetWidth;
let block = document.querySelector('.interests');
let btnNext = document.querySelector('.arrow-right');
let btnPrev = document.querySelector('.arrow-left');
let slides = document.querySelectorAll('.interests__table');
let slider = [];

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i];
  slides[i].remove();
}
let step = 0;
let offset = 0;

function drow() {
  let ul = document.createElement('ul');

  ul = slider[slider.length-1];
  ul.classList.add('interests__table');
  ul.style.left = -viewport + 'px';
  document.querySelector('.interests').appendChild(ul); 
  
  ul = slider[step];
  ul.classList.add('interests__table');
  ul.style.left = offset * viewport + 'px';
  document.querySelector('.interests').appendChild(ul);

  ul = slider[step+1];
  ul.classList.add('interests__table');
  ul.style.left = offset * viewport + viewport + 'px';
  document.querySelector('.interests').appendChild(ul); 

  offset = 1;
}

function drowL() {
  if (step == (slider.length - 1)) {
    step = 1;
  } else {
    if (step == (slider.length - 2)) {
      step = 0;
    } else {
      step = (step + 2);
    }
  }
  let ul = document.createElement('ul');
  ul = slider[step];
  ul.classList.add('interests__table');
  ul.style.left = offset * viewport + 'px';
  document.querySelector('.interests').appendChild(ul); 
    
  if (step == 0) {
    step = (slider.length - 1);
  } else {
    step = (step - 1);
  }

  offset = 1;
}
function left() {
  btnNext.removeEventListener('click', left);

  let slider2 = document.querySelectorAll('.interests__table');
  let offset2 = -1;
  for (let i = 0; i < slider2.length; i++) {
    slider2[i].style.left = offset2 * viewport - viewport + 'px';
    offset2++;
  }
  setTimeout(function() {
    slider2[0].remove();
    drowL();
    btnNext.addEventListener('click', left)
  }, 500);
}

function drowR() {
  if (step == 0) {
    step = (slider.length - 2);
  } else {
    if (step == 1) {
      step = (slider.length  -1);
    } else {
      step = (step - 2);
    }
  }
  let offset = -1;
  let ul = document.createElement('ul');
  ul = slider[step];
  ul.classList.add('interests__table');
  ul.style.left = offset * viewport + 'px';

  document.querySelector('.interests').insertBefore(ul, block.firstElementChild);

  if (step == (slider.length-1)) {
      step = 0;
   } else {
     step = (step + 1);
   }
  offset = 1;
};
function right() {
  btnPrev.removeEventListener('click', right);
  
  let slider2 = document.querySelectorAll('.interests__table');
  let offset2 = (slider2.length - 1);
 
  for (let i = (slider2.length-1); i >= 0; i--) {
    slider2[i].style.left = offset2 * viewport + 'px';
    offset2 --;
  }
  setTimeout(function() {
    slider2[(slider2.length-1)].remove();
    drowR();
    btnPrev.addEventListener('click', right);
  }, 500);
}

drow();
step = 0;

btnNext.addEventListener('click', left);
btnPrev.addEventListener('click', right);