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
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// Check required fields
function checkRequired(inputArr) {
    //loops thru all inputs, input is the element; it has an id prop
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            //take in u, e, p, p2, uses the id value
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}
// Get fieldname
function getFieldName(input) {
    //capitalize the 1st letter and add the rest of the word
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners - reps an obj that can handle an event dispatched by an EventTarget object
form.addEventListener('submit', function (e) {
    // prevents the form from submitting
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    //min 3, max 15 for username
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});