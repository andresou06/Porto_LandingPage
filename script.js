// // Buttons Sandbox
// // ContactMe / Download Resume / Availability Calendar 
// //  Portfolio or Project / Language Skill 
// // Social Media/ Linkedin / Toggle change language


// // Header Section

// Language Toggle Button

const toggleLanguage = document.getElementById('toggle');

toggleLanguage.addEventListener('click', () => {
        open("./porto.html");
});

// // ###########################################################
// Contact Me Button
const contactMe = document.getElementById('contact');

contactMe.addEventListener('click', () => {
        open("./contactPage.html")
});

// We will us  POPOVER API to render each button
// #############################################
// Goal button 

// // #######################################################################
// Availability Calendar
const button_goal = document.getElementById('goal');
const button_calendar = document.getElementById('calendar');
const button_project = document.getElementById('projects');

const dialog1 = document.getElementById('my-popover');
const dialog2 = document.getElementById('my-popover2');
const dialog3 = document.getElementById('my-popover3');

const closeButton1 = document.getElementById('one');
const closeButton2 = document.getElementById('two')

const closeButton3 = document.getElementById('three')


// ###########################################################

button_goal.addEventListener('click', () => {
    dialog1.showModal();
});

closeButton1.addEventListener('click', () => {
    dialog1.close();
});

// #############################################################
button_calendar.addEventListener('click', () => {
    dialog2.showModal();
});

closeButton2.addEventListener('click', () => {
        dialog2.close();
});
// ######
// // ##########################################################
button_project.addEventListener('click', () => {
        dialog3.showModal();
});

closeButton3.addEventListener('click', () => {
        dialog3.close();
});

// ###################################################

// HTMLElement.title

// The tooltip is displayed and disappears via keyboard focus and removal of focus and by the mouse events - mousing over and mousing out.

// The tooltip never receives focus. Focus stays on the owning element.

// The tooltip can be hidden with the Escape key

// The tooltip stays open when hovered

// The tooltip is only hidden via JavaScript and CSS selectors. If JavaScript is not available the tooltip is shown.
