/* =========================
SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach((element)=>{

const windowHeight = window.innerHeight;
const revealTop = element.getBoundingClientRect().top;
const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);

/* =========================
SERVICE BASED FORM CONTROL
========================= */

const serviceSelect = document.getElementById("service");
const durationField = document.getElementById("duration-field");

serviceSelect.addEventListener("change", function(){

if(serviceSelect.value === "video"){
durationField.style.display = "block";
}

else{
durationField.style.display = "none";
}

});