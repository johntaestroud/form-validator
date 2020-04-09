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
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArr) {
    //loops thru all inputs, input is the element; it has an id prop
    inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
        //take in u, e, p, p2, uses the id value
        showError(input, `${getFieldName(input)} is required`);
    } else {
        showSuccess(input);
    }
   });
}

// Get fieldname
function getFieldName(input) {
    //capitalize the 1st letter and add the rest of the word
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners - reps an obj that can handle an event dispatched by an EventTarget object
form.addEventListener('submit', function(e) {
    // prevents the form from submitting
    e.preventDefault();

   checkRequired([username, email, password, password2]);
});