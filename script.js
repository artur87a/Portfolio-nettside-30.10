// Get references to the menu icon and the sidebar
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
    // Toggle the 'open' class on the sidebar
    sidebar.classList.toggle("open");
});