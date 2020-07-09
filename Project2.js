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
  let listSections = document.querySelector('list_item');
  let listSectionHeaders = document.querySelector('section_header');

  let nav = document.createDocumentFragment();
  for (let i = 0; i < listSections.length; i++) {
    let navButton = document.createElement('li');
    let att = document.createAttribute("class");
    att.value = "list_item";
    navButton.setAttributeNode(att);
    nav.appendChild(navButton);
  }
  const navList = document.getElementById('navbar_list');
  navList.appendChild(nav);
}


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