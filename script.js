
/* =====================================
   LAPREC SOLUTIONS
   Website Interactions
===================================== */

// BUSINESS CONFIGURATION

// Replace with your WhatsApp number.
// Use country code and digits only.
// Example format: 2547XXXXXXXX

const WHATSAPP_NUMBER = "2547XXXXXXXX";


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const open = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", open);
    menuToggle.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = open ? "✕" : "☰";

});


// CLOSE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


// WHATSAPP CONFIGURATION

function openWhatsApp(message) {

    if (!/^254\d{9}$/.test(WHATSAPP_NUMBER)) {

        alert(
            "Please configure the official LAPREC SOLUTIONS WhatsApp number in script.js."
        );

        return;

    }

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank", "noopener");

}


// SERVICE ENQUIRY BUTTONS

document.querySelectorAll("[data-service]").forEach(button => {

    button.addEventListener("click", () => {

        const service = button.dataset.service;

        const serviceSelect = document.getElementById("service");

        const matchingOption = [...serviceSelect.options].find(
            option => option.text.toLowerCase().includes(
                service.toLowerCase()
            )
        );

        if (matchingOption) {
            serviceSelect.value = matchingOption.value;
        }

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();

    if (!name || !phone || !service || !message) {

        formStatus.textContent =
            "Please complete all the required fields.";

        return;

    }

    const whatsappMessage = `
Hello LAPREC SOLUTIONS!

My name is ${name}.

Phone: ${phone}

Service required: ${service}

Message: ${message}

I would like to make an enquiry.
    `;

    if (!/^254\d{9}$/.test(WHATSAPP_NUMBER)) {

        formStatus.textContent =
            "Please configure your official WhatsApp number in script.js before receiving enquiries.";

        return;

    }

    formStatus.textContent =
        "Opening WhatsApp to send your enquiry...";

    openWhatsApp(whatsappMessage);

});


// DIRECT WHATSAPP BUTTON

document.querySelectorAll(".whatsapp-link").forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        openWhatsApp(
            "Hello LAPREC SOLUTIONS! I would like to enquire about your services."
        );

    });

});
