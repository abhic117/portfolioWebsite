const skills = document.getElementById("skills-text");
const skillsContainer = document.getElementById("skills-container");

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
        console.log(skill);

        const skill_card = document.createElement('div');
        skill_card.setAttribute('class', 'details-container');
        skill_card.setAttribute('id', 'skill-card');

        skill_card.innerHTML = `<h3>${skill}</h3>`;
        skillsContainer.append(skill_card);
    }))
    
}