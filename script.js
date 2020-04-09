// pulling in the DOM elements we need
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error message
function showError(input, message) {
    // parent of the username input
    const formControl = input.parentElement;
    //overwriting the form-control class
    formControl.className = 'form-control error';
    //show what the actual msg is by selecting the small tag
    const small = formControl.querySelector('small');
    // want it to show our err msg (2nd pararm) ("Username is required")
    small.innerText = message;
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    // comes from .form-control.success input {var(--succes-color)}
    formControl.className = 'form-control success';
}

// check email is valid
function isValid

//Event listeners - reps an obj that can handle an event dispatched by an EventTarget object
form.addEventListener('submit', function(e) {
    // prevents the form from submitting
    e.preventDefault();

    if(username.value === '') {
        // takes in the actual input and the message
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        // takes in the actual input and the message
        showError(email, "Email is required");
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        // takes in the actual input and the message
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        // takes in the actual input and the message
        showError(password2, "Confirmation password is required");
    } else {
        showSuccess(password2);
    }
});