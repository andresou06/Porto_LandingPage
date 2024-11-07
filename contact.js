const image = document.querySelector('img');

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const btnsend = document.getElementById('send');
const label = Element.accessKeyLabel;


// Trying out all HTMLelement API

// Element
// CreateElement
// insertAdjacentElement('afterend') ?
btnsend.addEventListener('click', () => {
     const feedback = document.createElement('output');
     feedback.textContent = "Message sent!"
     btnsend.insertAdjacentElement("afterend", feedback);
})

