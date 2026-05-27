document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

});
function revealOnScroll() {
  let reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
let text = "Your Smile, Our Responsibility";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

typingEffect();
function sendWhatsApp() {

    let name = document.querySelector('input[type="text"]').value;
    let phone = document.querySelector('input[type="tel"]').value;
    let date = document.querySelector('input[type="date"]').value;
    let service = document.querySelector('select').value;

    let message = `Appointment Request:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Date: ${date}%0A
Service: ${service}`;

    let whatsappNumber = "918805073386";

    let url = `https://wa.me/${whatsappNumber}?text=${message}`;

    alert("Opening WhatsApp..."); // ✅ here

    window.open(url, '_blank');
}