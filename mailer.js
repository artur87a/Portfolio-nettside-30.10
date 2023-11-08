var btn = document.getElementById("btn")
btn.addEventListener("click", function(e){
    e.preventDefault()
    console.log("hi");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var body = "name: " +name + "<br/> email: " + email + "<br/> subject: " +subject + "<br/> message: " + message;


                    email.send({
        SecureToken : "a19d3a27-0c88-4492-8eb5-56921e8ea43c",
        From : 'artur.kodehode@gmail.com',
        To : document.getElementById("email").value,
        Subject : "Contact message",
        Body : body
    }).then(
      message => alert(message)
    );

})

