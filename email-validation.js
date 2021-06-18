const email = document.querySelector('#email');
const info = document.querySelector('.validation-info');
const button = document.querySelector('.button');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


button.addEventListener('click', function () {
    if (email.value !== '' && email.value.match(validRegex)) {
        info.innerHTML = 'Thank you!';
        info.style.color = 'hsl(0, 93%, 68%)';
        // info.classList.toggle('validation-info--active');
        e.preventDefault();
        sendEmail()
    } else if (email.value == '') {
        info.innerHTML = 'Please provide your email address';
        info.style.color = 'hsl(0, 93%, 68%)';
    } else {
        info.innerHTML = 'Please provide a valid email';
        info.style.color = 'hsl(0, 93%, 68%)';
    }
})

// function ValidateEmail(input) {

//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
//     if (input.value.match(validRegex)) {
  
//       alert("Valid email address!");
  
//       document.form1.text1.focus();
  
//       return true;
  
//     } else {
  
//       alert("Invalid email address!");
  
//       document.form1.text1.focus();
  
//       return false;
  
//     }
  
//   }