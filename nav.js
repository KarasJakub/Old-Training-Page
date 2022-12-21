//nav variables
const hamburger = document.querySelector('.navigation-button');
const nav = document.querySelector('.navigation');
const icons = document.querySelector('.icons-div');
const iburger = document.querySelector('button i');
const sburger = document.querySelector('#x')


//function for moblie navigation
const handleClick = () => {
    nav.classList.toggle('nav-active');
    icons.classList.toggle('none');
    iburger.classList.toggle('dn');
    if (getComputedStyle(sburger).display === 'none') {
      sburger.style.display = "block";
    } else {
      sburger.style.display = "none";
    }
   }
  //event click for navigation
  hamburger.addEventListener('click', handleClick);