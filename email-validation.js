const email = document.querySelector('#email');
const info = document.querySelector('.info__form--error');
const alert = document.querySelector('.info__form--alert');
const button = document.querySelector('.info__form--button');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


button.addEventListener('click', function () {
    if (email.value !== '' && email.value.match(validRegex)) {
        info.innerHTML = 'Thank you!';
        info.style.display = 'unset';
        e.preventDefault();
        sendEmail()
    } else if (email.value == '') {
        info.innerHTML = 'Please provide your email address';
        info.style.display = 'unset';
        alert.style.display = 'unset';
    } else {
        info.innerHTML = 'Please provide a valid email';
        info.style.display = 'unset';
        alert.style.display = 'unset';
    }
})
