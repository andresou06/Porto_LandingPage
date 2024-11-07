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
// // Skill transferable 
// // Displaying minifying picture that point out to symbolic Skills
// Project
const Project = document.getElementById('slider');

