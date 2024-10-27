function validateForm() {
    const fname = document.getElementById("f-name").value; 
    const lname = document.getElementById("l-name").value; 
    const address = document.getElementById("address").value; 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value; 
    const number = document.getElementById("number").value;
    const fnameError = document.getElementById("fname-error"); 
    const lnameError = document.getElementById("lname-error");
    const addressError = document.getElementById( "address-error");
    const emailError = document.getElementById( "email-error");
    const passwordError = document.getElementById( "password-error");
    const numberError = document.getElementById( "number-error");


    fnameError.textContent = ""; 
    lnameError.textContent = ""; 
    addressError.textContent = ""; 
    emailError.textContent = ""; 
    passwordError.textContent = ""; 
    numberError.textContent = "";
    
    let isValid = true; 
    if (fname === "") {
    fnameError.textContent ="Please enter your first name properly."; 
    isValid = false;
    }
    
    
    if (lname === "") { 
        lnameError.textContent ="Please enter your last name properly."; 
        isValid = false;
    }
    
    
    
    if (address === "") { 
        addressError.textContent ="Please enter your address."; 
        isValid = false;
    }


    if (email === "" || !email.includes("@") || !email.includes(".")) { 
        emailError.textContent = "Please enter a valid email address."; 
        isValid = false;
    }


    if (password === "" || password.length < 8) { 
        passwordError.textContent ="Please enter a password with at least 8 characters."; 
        isValid = false;
    }


    if (number === "" || number.length < 10) { 
        numberError.textContent ="Please enter a 10 digit number."; 
        isValid = false;
    }


    return isValid;
}
    