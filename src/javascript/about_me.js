function toggleSection(sectionId, toggleId) {
    var toggleButton = document.getElementById(toggleId)
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
        toggleButton.textContent = "↑"
    } else {
        section.style.display = "none";
        toggleButton.textContent = "↓"
    }
}