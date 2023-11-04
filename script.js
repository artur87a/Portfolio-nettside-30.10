// // Get references to the menu icon and the sidebar
// const menuIcon = document.getElementById("menu-icon");
// const sidebar = document.getElementById("sidebar");

// // Add a click event listener to the menu icon
// menuIcon.addEventListener("click", function () {
//     // Toggle the 'open' class on the sidebar
//     sidebar.classList.toggle("open");
// });

document.addEventListener("DOMContentLoaded", function () {
// Get references to the menu icon and the sidebar
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const closeButton = document.getElementById("close-button");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
    // Toggle the 'open' class on the sidebar
    sidebar.classList.toggle("open");
});

// Add a click event listener to the close button inside the sidebar
closeButton.addEventListener("click", function () {
    // Remove the 'open' class from the sidebar to close it
    sidebar.classList.remove("open");
});

// Get references to the links inside the sidebar
const sidebarLinks = sidebar.querySelectorAll("a");

// Add a click event listener to all links inside the sidebar
sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
        // Remove the 'open' class from the sidebar to close it when a link is clicked
        sidebar.classList.remove("open");
    });
})

});