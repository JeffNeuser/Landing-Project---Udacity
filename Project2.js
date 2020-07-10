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

/**
 * Define Global Variables
 * 
*/

let linkAnchor1 = document.querySelector('button_link1');
let linkAnchor2 = document.querySelector('button_link2');
let linkAnchor3 = document.querySelector('button_link3');
let linkAnchor4 = document.querySelector('button_link4');
let sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const listNav = function() {
  let nav = document.createDocumentFragment();
  for (let i = 0; i < sections.length; i++) {
    let navButton = document.createElement('li');

    navButton.className = 'list_item';

    navButton.innerHTML = sections[i].getAttribute('data-nav');

    nav.appendChild(navButton);
  }

  const navList = document.getElementById('navbar__list');
  navList.appendChild(nav);
}
listNav();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

listNav.addEventListener('click', function(e) {
  e.preventDefault();
  
  if (e.target.nodeName === "A") {
    smoothScrolling(e.target);
  }
})

function sectionScroll(anchor) {
  let sectionArray = document.querySelectorAll('sections');
  let anchorLink = document.querySelectorAll('.menu__link');

  for (let section of sectionArray) {
  

    }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click



// Set sections as active

let listButtons = document.querySelectorAll('menu__link');

const sectionsActive = function() {
  for (let i = 0; i < sections.length; i++) {
    if (!checkViewport(sections[i])) {
    sections.classList.remove('active');
    } else {
    sections.classList.add('active');
    }
}
}
sectionsActive();