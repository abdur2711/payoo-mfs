// login button functionality
document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = 12345678910
    const pinNumber = 1234

    const inputNumber = document.getElementById('mobile-number').value;
    const inputPin = document.getElementById('pin-number').value;
    

    if (parseInt(inputNumber) === mobileNumber && parseInt(inputPin) === pinNumber) {
        window.location.href='./home.html';
    }
    else {
        alert('Invalid credentials');
    } 
});