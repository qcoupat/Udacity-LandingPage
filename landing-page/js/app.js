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
function myFunction() {
    for (let i = 1; i < 5; i++) {
    const li = document.createElement("a");
    li.appendChild(document.createTextNode("Menu" + i));
    li.setAttribute("class", "menu__link" );
    document.getElementById("navbar__list").appendChild(li);
    li.href = "#section"+i;
    }
}
    myFunction();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const theEstate = document.getElementById('section1')
theEstate.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

const whoWeAre = document.getElementById('section2')
theEstate.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
