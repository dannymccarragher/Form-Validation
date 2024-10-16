document.getElementById('account-form').onsubmit = function () {
    let isValid = true;

    let name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('err-name').style.display = "inline";
        isValid = false;
    } else {
        document.getElementById('err-name').style.display = "none";
    }

    let email = document.getElementById('email').value;

    if (email == "") {
        document.getElementById('err-email').style.display = "inline";
        document.getElementById('email-format-err').style.display = "none";
        isValid = false;

    } else if (email.includes('@') && email.includes('.')) {
        document.getElementById('err-email').style.display = "none";
        document.getElementById('email-format-err').style.display = "none";

    } else {
        document.getElementById('err-email').style.display = "none";
        document.getElementById('email-format-err').style.display = "inline";
        isValid = false;
    }

    let password = document.getElementById('password').value;
    if (password == "") {
        document.getElementById('err-password').style.display = "inline";
        document.getElementById('password-length').style.display = "none";
        isValid = false;
    } else {
        document.getElementById('password-length').style.display = "none";
        document.getElementById('err-password').style.display = "none";
    }

    let confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword == "") {
        document.getElementById('err-confirm-password').style.display = "inline";
        document.getElementById('err-confirm-password').style.display = 'none';
        isValid = false;
    } else {
        document.getElementById('err-confirm-password').style.display = "none";
    }

    if (password !== confirmPassword) {
        document.getElementById('password-match').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('password-match').style.display = 'none';
    }

    if (password !== "" && password.length < 8) {
        document.getElementById('password-length').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('password-length').style.display = 'none';

    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName('err');
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none';
    }
}
