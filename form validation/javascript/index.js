const form = document.forms.validationForm;

window.addEventListener('load', () => {
    datas();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    datas();
    if(form.verifiedPassword.value != "")
    {
        console.table([...formData]);
    }
})

const datas = () => {
    form.name.addEventListener('keyup', () => {
        if (form.name.value === "") {
            errorMsg(form.name, "Please enter your name!");
        } else {
            success(form.name);
        }
    });

    form.zipcode.addEventListener('keyup', () => {
        if (form.zipcode.value == "") {
            errorMsg(form.zipcode, "Please enter the zipcode!");
        } else if (form.zipcode.value.length < 6) {
            errorMsg(form.zipcode, "zipcode length is low");
        } else if (form.zipcode.value.length > 6) {
            errorMsg(form.zipcode, "zipcode length is high");
        } else {
            success(form.zipcode)
        }
    });

    form.country.addEventListener('keyup', () => {
        if (form.country.value === "1") {
            errorMsg(form.country, "Please select one country");
        }
        else {
            success(form.country);
        }
    });

    form.phone.addEventListener('keyup', () => {
        if (form.phone.value === "") {
            errorMsg(form.phone, "Please enter your Phone Number!");
        } else if (form.phone.value.length < 10) {
            errorMsg(form.phone, "Phone number length is low");
        } else if (form.phone.value.length > 10) {
            errorMsg(form.phone, "Phone Number length is high");
        } else {
            success(form.phone);
        }
    });

    form.email.addEventListener('keyup', () => {
        let regex = /^([a-z0-9_.])+\@([a-z])+\.([a-z])+$/g
        if (form.email.value === "") {
            errorMsg(form.email, "Please enter your mail!");
        } else if (!regex.test(form.email.value)) {
            errorMsg(form.email, "Use only correct email format!");
        } else {
            success(form.email);
        }
    })

    const border = form.password;
    const errPara = form.password.parentElement.nextElementSibling;
    errPara.style.color = "red";
    form.password.addEventListener('keyup', () => {
        if (form.password.value === "") {
            border.style.borderColor = "red"
            errPara.textContent = "Please enter the password!"; 
        } else if (/[A-Z]/.test(form.password.value) === false) {
            border.style.borderColor = "red"
            errPara.textContent = "Password must contain one caps letter";
        } else if (/[a-z]/.test(form.password.value) === false) {
            border.style.borderColor = "red"
            errPara.textContent = "Password must contain one small letter";
        } else if (/[0-9]/.test(form.password.value) === false) {
            border.style.borderColor = "red"
            errPara.textContent = "Password must contain one number";
        } else if (/[/@/./#/$/%/^/&/*/(/)/?]/.test(form.password.value) === false) {
            border.style.borderColor = "red"
            errPara.textContent = "Password must contain one special character";
        } else if (form.password.value.length > 8) {
            border.style.borderColor = "red"
            errPara.textContent = "Password length is Long!";
        } else if (form.password.value.length < 6) {
            border.style.borderColor = "red"
            errPara.textContent = "Password length is small!";
        } else {
            border.style.borderColor = "#0cfe5c"
            errPara.textContent = "";
        }
        
    })

    const verifyBorder = form.verifiedPassword;
    const errValidPara = form.verifiedPassword.parentElement.nextElementSibling;
    errValidPara.style.color = "red";
    form.verifiedPassword.addEventListener('keyup', () => {
        if(form.password.value === "")
        {
            verifyBorder.style.borderColor = "red";
            errValidPara.textContent = "First enter the password!"
        }
        else if(form.password.value != form.verifiedPassword.value)
        {
            verifyBorder.style.borderColor = "red";
            errValidPara.textContent = "Password is incorrect!"
        }else{
            verifyBorder.style.borderColor = "#0cfe5c";
            errValidPara.textContent = "";
        }
    })

    
}

// password eyes
const openEye = document.getElementsByClassName('open-eye')[0];
const closeEye = document.getElementsByClassName('close-eye')[0];
const openEye1 = document.getElementsByClassName('open-eye')[1];
const closeEye1 = document.getElementsByClassName('close-eye')[1];

openEye.addEventListener('click', (e) => {
    if(form.password.type == "password")
    {
        form.password.type = "text";
        closeEye.style.display = "block";
        openEye.style.display = "none";
    }
})

openEye1.addEventListener('click', (e) => {
    if(form.verifiedPassword.type == "password")
    {
        form.verifiedPassword.type = "text";
        closeEye1.style.display = "block";
        openEye1.style.display = "none";
    }
})

closeEye.addEventListener('click', (e) => {
    if(form.password.type == "text")
    {
        form.password.type = "password";
        closeEye.style.display = "none";
        openEye.style.display = "block";
    }
})

closeEye1.addEventListener('click', (e) => {
    if(form.verifiedPassword.type == "text")
    {
        form.verifiedPassword.type = "password";
        closeEye1.style.display = "none";
        openEye1.style.display = "block";
    }
})


// Error msg
let errorMsg = (input, msg) => {
    input.style.borderColor = "red";
    let inputName = input.parentElement.nextElementSibling;
    inputName.textContent = msg;

    input.nextElementSibling.nextElementSibling.style.display = "block";
    input.nextElementSibling.style.display = "none";
}

// Success msg
let success = (input) => {
    input.style.borderColor = "#0cfe5c";
    let inputName = input.parentElement.nextElementSibling;
    inputName.textContent = "";

    input.nextElementSibling.nextElementSibling.style.display = "none";
    input.nextElementSibling.style.display = "block";
}
