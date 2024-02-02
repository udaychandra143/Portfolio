// JavaScript functionality to animate the skills level on load
document.addEventListener("DOMContentLoaded", function () {
    const skillLevels = document.querySelectorAll(".skill-level");
    skillLevels.forEach((level) => {
        const width = level.style.width;
        level.style.width = "0";
        setTimeout(() => {
            level.style.width = width;
        }, 200); // Delay to initiate the animation
    });
});
