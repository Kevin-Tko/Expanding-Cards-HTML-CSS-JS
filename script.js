// importing all elements with the class panel and storing them in a NodeList
const panels = document.querySelectorAll('.panel');

// loop through panels nodelist and remove the active class
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});
