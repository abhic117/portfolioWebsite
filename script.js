const skills = document.getElementById("skills-text")

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

displaySkills('./assets/skills.txt');
function displaySkills(file) {
    fetch(file)
    .then(res => res.text())
    .then(text => text.split("\n").forEach(skill => {
        console.log(skill)
    }))
    
}