const form = document.querySelector('form');
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail(){

    const bodyMessage = `Name : ${name.value} <br> 
    Email: ${email.value} <br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "er.mohitkumar2003@gmail.com",
        Password : "A04D199900EC12C50FF50407D562AC27E26E",
        To : 'er.mohitkumar2003@gmail.com',
        From : email.value,
        Subject : "Connect Message From Portfolio",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
              });
        }
        else{
            Swal.fire({
                title: "Error!",
                text: "Something went wrong, Please Try again!",
                icon: "error"
              });
        }
      }
    );
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(name.value === ""){
        Swal.fire({
            title: "Error!",
            text: "Please enter your name first",
            icon: "error"
          });
    }
    else if(message.value===""){
        Swal.fire({
            title: "Error!",
            text: "Please write some message",
            icon: "error"
          });
    }
    else if(validateEmail(email.value)!=true){
        Swal.fire({
            title: "Error!",
            text: "Please enter correct gmail",
            icon: "error"
          });
    }
    else{
        sendEmail();
        name.value ="";
        email.value="";
        message.value="";
    }
})