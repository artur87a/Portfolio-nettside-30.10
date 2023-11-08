// const btn = document.getElementById("btn")
// btn.addEventListener("click", function(e){
//     e.preventDefault()
//     console.log("hi");
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;
//     var body = "name: " +name + "<br/> email: " + email + "<br/> subject: " + subject + "<br/> message: " + message;


//                     Email.send({
//         SecureToken : "a19d3a27-0c88-4492-8eb5-56921e8ea43c",
//         From : 'artur.kodehode@gmail.com',
//         To : document.getElementById("email").value,
//         Subject : "Contact message",
//         Body : body
//     }).then(
//       message => alert(message)
//     );

// })

/*nyyy*/

const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  // Retrieve form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Create the email body
  const body = `Name: ${name}<br>Email: ${email}<br>Subject: ${subject}<br>Message: ${message}`;

  // Check if the form fields are filled out
  if (!name || !email || !subject || !message) {
    alert("Please fill out all form fields");
    return;
  }

  // Send the email
  sendEmail(body);
});

function sendEmail(body) {
  Email.send({
    SecureToken: "a19d3a27-0c88-4492-8eb5-56921e8ea43c",
    From: "artur.kodehode@gmail.com",
    To: document.getElementById("email").value,
    Subject: "Contact message",
    Body: body,
  }).then(function (message) {
    if (message === "OK") {
      alert("Email sent successfully");
    } else {
      alert("Email could not be sent. Please try again later.");
    }
  });
}


