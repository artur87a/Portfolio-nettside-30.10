// // // Get references to the menu icon and the sidebar
// // const menuIcon = document.getElementById("menu-icon");
// // const sidebar = document.getElementById("sidebar");

// // // Add a click event listener to the menu icon
// // menuIcon.addEventListener("click", function () {
// //     // Toggle the 'open' class on the sidebar
// //     sidebar.classList.toggle("open");
// // });

// document.addEventListener("DOMContentLoaded", function () {
// // Get references to the menu icon and the sidebar
// const menuIcon = document.getElementById("menu-icon");
// const sidebar = document.getElementById("sidebar");
// const closeButton = document.getElementById("close-button");

// // Add a click event listener to the menu icon
// menuIcon.addEventListener("click", function () {
//     // Toggle the 'open' class on the sidebar
//     sidebar.classList.toggle("open");
// });

// // Add a click event listener to the close button inside the sidebar
// closeButton.addEventListener("click", function () {
//     // Remove the 'open' class from the sidebar to close it
//     sidebar.classList.remove("open");
// });

// // Get references to the links inside the sidebar
// const sidebarLinks = sidebar.querySelectorAll("a");

// // Add a click event listener to all links inside the sidebar
// sidebarLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//         // Remove the 'open' class from the sidebar to close it when a link is clicked
//         sidebar.classList.remove("open");
//     });
// })

// });

/*test ny*/
// document.addEventListener("DOMContentLoaded", function () {
//   const menuIcon = document.getElementById("menu-icon");
//   const sidebar = document.getElementById("sidebar");

//   // Function to toggle the sidebar
//   function toggleSidebar() {
//     sidebar.classList.toggle("open");
//   }

//   // Add a click event listener to the menu icon
//   menuIcon.addEventListener("click", toggleSidebar);

//   // Get references to the links inside the sidebar
//   const sidebarLinks = sidebar.querySelectorAll("a");

//   // Add a click event listener to all links inside the sidebar
//   sidebarLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//       // Set the opacity of the sidebar to 0 when a link is clicked
//       sidebar.style.opacity = 0;

//       // Toggle the "open" class to hide the sidebar
//       toggleSidebar();
//     });
//   });
// });

/*test2*/
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.getElementById("sidebar");

  // Add a click event listener to the menu icon
  menuIcon.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) {
      // If the sidebar is open, close it
      sidebar.classList.remove("open");
    } else {
      // If the sidebar is closed, open it
      sidebar.classList.add("open");
    }
  });

  // Get references to the links inside the sidebar
  const sidebarLinks = sidebar.querySelectorAll("a");

  // Add a click event listener to all links inside the sidebar
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove the 'open' class from the sidebar to close it when a link is clicked
      sidebar.classList.remove("open");
    });
  });
});