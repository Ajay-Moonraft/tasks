var count = 0;
function validation() {
    
    if (count == 1) {
        window.location.href = "table.html";
    } else {
        fname();
        address();
        zipcode();
        country();
        gender();
        preference();
        phNumber();
        email();
        password();
    }
}

window.addEventListener('load', () => {
    dataTable();
})

// Name
const fname = () => {
    let name = document.getElementById('name');
    let nameErr = document.getElementById('name-err');
    let check = document.querySelector('.name-check');
    let cross = document.querySelector('.name-cross');

    if (name.value == "") {
        nameErr.innerText = "Please enter your name";
        name.style.borderColor = "red";
        check.style.display = "none";
        cross.style.display = "block";
    } else {
        nameErr.innerText = "";
        name.style.borderColor = "#0cfe5c";
        check.style.display = "block";
        cross.style.display = "none";
        localStorage.setItem("name", name.value);
    }
}

// Address
const address = () => {
    let address = document.getElementById('address');
    address.maxLength = "200";
    let addressErr = document.getElementById('address-err');
    if (address.value == "") {
        addressErr.innerText = 'Please enter your address';
        address.style.borderColor = "red";
    } else if (address.value.length > 200) {
        addressErr.innerText = 'address length is more then 200';
        address.style.borderColor = "red";
    } else {
        addressErr.innerText = "";
        address.style.borderColor = "#0cfe5c";
        localStorage.setItem("address", address.value);
    }
}

// zipcode
const zipcode = () => {
    let zipcode = document.getElementById('zipcode');
    let zipErr = document.getElementById('zipcode-err');
    let check = document.querySelector('.zip-check');
    let cross = document.querySelector('.zip-cross');

    if (zipcode.value == "") {
        zipErr.innerText = "Enter the Zipcode";
        zipcode.style.borderColor = "red";
        check.style.display = "none";
        cross.style.display = "block";
    } else if (zipcode.value.length > 6) {
        zipErr.innerText = "Zipcode length is more then 6..";
        zipcode.style.borderColor = "red";
    } else if (zipcode.value.length < 6) {
        zipErr.innerText = "Zipcode length is less then 6..";
        zipcode.style.borderColor = "red";
    } else {
        zipErr.innerText = "";
        zipcode.style.borderColor = "#0cfe5c";
        check.style.display = "block";
        cross.style.display = "none";
        localStorage.setItem("zipcode", zipcode.value);
    }
}

// country
const country = () => {
    let country = document.getElementById('country');
    let countryErr = document.getElementById('country-err');
    if (country.value === "1") {
        countryErr.innerText = "Select one country";
        country.style.border = "2px solid red";
    } else {
        countryErr.innerText = "";
        country.style.border = "2px solid #0cfe5c";
        localStorage.setItem("country", country.value);
    }
}

// Gender
const gender = () => {
    let gender = document.getElementsByClassName('gender');
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let genderErr = document.getElementById('gender-err');

    if (male.checked == false && female.checked == false) {
        genderErr.innerText = "Click any one gender";
    } else {
        genderErr.innerText = "";
        // localStorage.setItem("gender", radio.checked);
    }
}

// Preference
const preference = () => {
    let red = document.getElementById('red');
    let green = document.getElementById('green');
    let blue = document.getElementById('blue');
    let colorErr = document.getElementById('color-err');
    if (red.checked == false && green.checked == false && blue.checked == false) {
        colorErr.innerText = "Click any color";
    } else {
        colorErr.innerText = "";
        // localStorage.setItem("preference", checkbox.value);
        // console.log(checkbox.value);
    }
}

// Phone Number
const phNumber = () => {
    let phone = document.getElementById('phone');
    let phErr = document.getElementById('ph-err');
    let check = document.querySelector('.ph-check');
    let cross = document.querySelector('.ph-cross');

    if (phone.value == "") {
        phErr.innerText = "Please Enter your phone number";
        phone.style.borderColor = "red";
        check.style.display = "none";
        cross.style.display = "block";
    } else if (phone.value.length > 10) {
        phErr.innerText = "phone number length is more then 10";
        phone.style.borderColor = "red";
    } else if (phone.value.length < 10) {
        phErr.innerText = "phone number length is less then 10";
        phone.style.borderColor = "red";
    } else {
        phErr.innerText = "";
        phone.style.borderColor = "#0cfe5c";
        check.style.display = "block";
        cross.style.display = "none";
        localStorage.setItem("phone", phone.value);
    }
}

// Email
const email = () => {
    let email = document.getElementById('email');
    let emailErr = document.getElementById('email-err');
    let check = document.querySelector('.email-check');
    let cross = document.querySelector('.email-cross');

    if (email.value === "") {
        emailErr.innerText = "Please Enter your email";
        email.style.borderColor = "red";
        check.style.display = "none";
        cross.style.display = "block";
    } else if (true) {
        if (email.value.match(/[^A-Z]/) && email.value.match(/[a-z]/) && email.value.match(/[0-9]/) && email.value.match(/[@/.]/)) {
            emailErr.innerText = "";
            email.style.borderColor = "#0cfe5c";
            check.style.display = "block";
            cross.style.display = "none";
            localStorage.setItem("email", email.value);
        }
        else {
            emailErr.innerText = "Email is invalid";
            email.style.borderColor = "red";
            check.style.display = "none";
            cross.style.display = "block";
        }
    }
}

// Password
const password = () => {
    let pass = document.getElementById('pw');
    let passErr = document.getElementById('pw-err');
    let check = document.querySelector('.pass-check');
    let cross = document.querySelector('.pass-cross');

    if (pass.value == "") {
        pass.style.borderColor = "red";
        passErr.innerText = "";
        check.style.display = "none";
        cross.style.display = "block";
    } else if (pass.value.length <= 6 || pass.value.length > 8) {
        passErr.innerText = "password length is less then 6 or more then 8";
        pass.style.borderColor = "red";
    } else if (true) {
        if (pass.value.match(/[A-Z]/) && pass.value.match(/[a-z]/) && pass.value.match(/[0-9]/) && pass.value.match(/[!/@/#/$/%/&/(/)/./,]/)) {
            passErr.innerText = "";
            pass.style.borderColor = "#0cfe5c";
            check.style.display = "block";
            cross.style.display = "none";
            localStorage.setItem("pass", pass.value);
        }
        else {
            passErr.innerText = "Password is not strong";
            pass.style.borderColor = "red";
            check.style.display = "none";
            cross.style.display = "block";
            
        }
    }

    confirmPw(pass.value);
}

// Confirm password
const confirmPw = (password) => {
    let confirmPass = document.getElementById('cpw');
    let confirmErr = document.getElementById('cpw-err');
    let check = document.querySelector('.confirm-check');
    let cross = document.querySelector('.confirm-cross');

    if (confirmPass.value == "") {
        confirmErr.innerText = "";
    } else if (password === "") {
        confirmErr.innerText = "First enter the password";
        confirmPass.style.borderColor = "red";
        confirmPass.value = "";
        check.style.display = "none";
        cross.style.display = "block";
    } else if (password != confirmPass.value) {
        confirmErr.innerText = "Password is not matching";
        confirmPass.style.borderColor = "red";
        check.style.display = "none";
        cross.style.display = "block";
    } else {
        confirmErr.innerText = "";
        confirmPass.style.borderColor = "#0cfe5c";
        check.style.display = "block";
        cross.style.display = "none";
        count = 1;
    }
}

// Table
let dataTable = () => {
    var tableName = document.getElementById('t-name');
    let tableAddress = document.getElementById('t-address');
    let tableZip = document.getElementById('t-zip-code');
    let tableCountery = document.getElementById('t-country');
    let tableGender = document.getElementById('t-gender');
    let tablePreference = document.getElementById('t-preference');
    let tablePhone = document.getElementById('t-phone');
    let tableEmail = document.getElementById('t-email');
    let tablePass = document.getElementById('t-pass');

    tableName.innerText = localStorage.getItem("name");
    tableAddress.innerText = localStorage.getItem("address");
    tableZip.innerText = localStorage.getItem("zipcode");
    tableCountery.innerText = localStorage.getItem("country");
    tableGender.innerText = localStorage.getItem("gender");
    tablePreference.innerText = localStorage.getItem("preference");
    tablePhone.innerText = localStorage.getItem("phone");
    tableEmail.innerText = localStorage.getItem("email");
    tablePass.innerText = localStorage.getItem("pass");

    console.log(`Name: ${localStorage.getItem("name")}`);
    console.log(`address: ${localStorage.getItem("address")}`);
    console.log(`zipcode: ${localStorage.getItem("zipcode")}`);
    console.log(`country: ${localStorage.getItem("country")}`);
    console.log(`gender: ${localStorage.getItem("gender")}`);
    console.log(`preference: ${localStorage.getItem("preference")}`);
    console.log(`phone: ${localStorage.getItem("phone")}`);
    console.log(`email: ${localStorage.getItem("email")}`);
    console.log(`pass: ${localStorage.getItem("pass")}`);
}

