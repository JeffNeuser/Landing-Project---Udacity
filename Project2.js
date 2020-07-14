/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define global variables


const mainElement = document.querySelector('main');
const navbarMenu = document.querySelector('#navbar__list');



// Dynamically build navbar


const sectionElements = document.querySelectorAll('section');

sectionElements.forEach(section => {
  navbarMenu.insertAdjacentHTML('beforeend', `<li><a href="${section.id}">${section.dataset.nav}</a></li>`)
});

const navbarList = document.querySelectorAll('li');

navbarList.forEach(item => {
  item.setAttribute('class', 'menu__link');
});

// Add/remove active classes
const addActive = (inView, section, item) => {
  if (inView) {
    section.classList.add('your-active-class');
    item.classList.add('link__active');
  }
}
const inActive = (section, item) => {
  section.classList.remove('your-active-class');
  item.classList.remove('link__active');
}

const activeSection = () => {
  navbarList.forEach(item => {
    const section = document.getElementById(item.firstChild.getAttribute('href'));
    const sectionOffset = (Math.floor(section.getBoundingClientRect().top));
    
    inActive(section, item);
    addActive((sectionOffset < 200 && sectionOffset >= -200), section, item);
  })
}
window.addEventListener('scroll', activeSection);

// Scroll to anchor ID with ScrollTo
document.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.getElementById(a.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
  });
});