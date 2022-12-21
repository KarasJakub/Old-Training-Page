//all variables
//nav variables
const hamburger = document.querySelector('.navigation-button');
const nav = document.querySelector('.navigation');
const text = document.querySelector('.text');
const icons = document.querySelector('.icons-div');
const iburger = document.querySelector('button i');
const sburger = document.querySelector('#x')
const white = document.querySelectorAll('.white');
//VARIBALES FOR PICTURES
//picture button variable
const colorbutton = document.querySelector('.color-button');
//picture variables
const girl = document.querySelector('.praying-girl');
const dreams = document.querySelector('.follow-your-dreams');
//picture text variables
const textgirl = document.querySelector('.text-girl');
const textdreams = document.querySelector('.text-dreams');
const sky = document.querySelector('.sky');
//text button variable
const textbutton = document.querySelector('.text-show-button');
//popup variables and div with popup
const popupbutton = document.querySelector('.popup-button');
const popupdiv = document.querySelector('.popup');
//containers div's variables
const girlcon = document.querySelector('.con-for-girl');
const dreamscon = document.querySelector('.con-for-dreams');
const skycon = document.querySelector('.con-for-sky');
//scaling img variables 

//function for moblie navigation
const handleClick = () => {
    nav.classList.toggle('nav-active');
    text.classList.toggle('none');
    icons.classList.toggle('none');
    iburger.classList.toggle('dn');
    textbutton.classList.toggle('none2');
    if (getComputedStyle(sburger).display === 'none') {
      sburger.style.display = "block";
    } else {
      sburger.style.display = "none";
    }
    girlcon.classList.toggle('none2');
    dreamscon.classList.toggle('none2');
    skycon.classList.toggle('dn');
   }
  //event click for navigation
  hamburger.addEventListener('click', handleClick);

  //function for text button 
  const textBtnClick = () => {
    text.classList.toggle('none2');
  }
  //event click for text in header
  textbutton.addEventListener('click', textBtnClick);
  
  //FUNCTION FOR ROTATE PICTURE
  const pictureMoveClick = () => {
    //text picture animation
    textgirl.classList.toggle('text-girl-transition');
    textdreams.classList.toggle('text-dreams-transition');
    setTimeout( function() {
      colorbutton.classList.toggle('button-green-bgc')}
      , 2500);
    //roting and changing picture for girl
    girl.classList.toggle('girl-rotate');
    if (girl.getAttribute("src") === "photos/first-photo-girl-black-and-white.png") {
      girl.setAttribute("src", "photos/girl-color.png");
    } else {
      girl.setAttribute("src", "photos/first-photo-girl-black-and-white.png");
    }
    //roting and changing picture for dreams
    dreams.classList.toggle('dreams-rotate');
    if (dreams.getAttribute("src") === "photos/second-photo-fyd-black-and-white.png") {
      dreams.setAttribute("src", "photos/dreams-in-color.png");
    } else {
      dreams.setAttribute("src", "photos/second-photo-fyd-black-and-white.png");
    }
    //changing "sky" picture from black and white to colorful
    setTimeout( function () {
      if (sky.getAttribute("src") === "photos/sky-black-and-white.png") {
      sky.setAttribute("src", "photos/colorful-sky.png") 
    } else {
      sky.setAttribute("src", "photos/sky-black-and-white.png");
    }
    }, 1200)
    }

  //event click for pictures rotation
  colorbutton.addEventListener('click', pictureMoveClick) 
    
