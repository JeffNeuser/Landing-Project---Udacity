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
  let sections = document.querySelectorAll('section');

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

// const listNav = function() {
//   let sections = document.querySelectorAll('section');
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active