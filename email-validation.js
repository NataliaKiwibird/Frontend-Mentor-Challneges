const email = document.querySelector('#email');
const form = document.querySelector('.info__form');
const info = document.querySelector('.info__form--error');
const alert = document.querySelector('.info__form--alert');
const button = document.querySelector('.info__form--button');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validEmail () {
    if (email.value !== '' && email.value.match(validRegex)) {
        info.innerHTML = 'Thank you!';
        info.style.display = 'unset';
        alert.style.display = 'none';
        form.style.border = '1px solid hsl(0, 36%, 70%)';
    } else if (email.value == '') {
        info.innerHTML = 'Please provide your email address';
        info.style.display = 'unset';
        form.style.border = '2px solid hsl(0, 93%, 68%)';
        alert.style.display = 'unset';
    } else {
        info.innerHTML = 'Please provide a valid email';
        info.style.display = 'unset';
        form.style.border = '2px solid hsl(0, 93%, 68%)';
        alert.style.display = 'unset';
    }
}

button.addEventListener ('click', (event) => {
    event.preventDefault();
    validEmail();
})
