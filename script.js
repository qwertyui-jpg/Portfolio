
// Animate skill bars on scroll to fade in and fill
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        if (isInViewport(bar) && !bar.classList.contains('filled')) {
            bar.style.width = bar.style.getPropertyValue('--skill-level');
            bar.classList.add('filled');
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', () => {
    animateSkills();
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetID = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Simple contact form submission mock
const form = document.querySelector('#contact form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you shortly.');
    form.reset();
});
