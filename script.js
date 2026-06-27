document.addEventListener("DOMContentLoaded", () => {
 const roles = [
   
    "Frontend Developer",
     "Software Engineer",
    "AI Enthusiast"
];

    const roleElement = document.getElementById("role");

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            roleElement.textContent = currentRole.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
            } else {
                setTimeout(typeEffect, 100);
            }
        } else {
            roleElement.textContent = currentRole.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeEffect, 300);
            } else {
                setTimeout(typeEffect, 50);
            }
        }
    }

    typeEffect();
});