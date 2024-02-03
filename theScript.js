const proj = document.getElementById('animated-proj');
const bout = document.getElementById('animated-bout');
const tacks = document.getElementById('animated-tacks');


function startAnimation() {
    proj.style.width = "330px"
    bout.style.width = "3px"
    tacks.style.width = "3px"
}
function startbout() {
    bout.style.width = "330px"
    proj.style.width = "3px"
    tacks.style.width = "3px"
}

function starttacks() {
    tacks.style.width = "330px"
    proj.style.width = "3px"
    bout.style.width = "3px"
}

function resetAnimation() {
    proj.style.width = "3px"
    bout.style.width = "3px"
    tacks.style.width = "3px"
}
