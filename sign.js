let uname = document.getElementById("name");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
let phone = document.getElementById("phone");
let error = document.getElementById("error");
let regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let strongpwdregex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// let mediumpwdregex= /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/;
let mediumpwdregex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
var phoneregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let strength =document.getElementById("strength")


function validate(){
    // error.innerHTML="";
    // error2.innerHTML="";
    // error3.innerHTML="";
    // error4.innerHTML="";
   
    if(uname.value==""||uname.value.trim()==""){
        alert("Username cannot be empty");
        //error.innerHTML="Username cannot be empty";
        return false;
    }
   
    if(email.value==""||email.value.trim()==""){
        error1.innerHTML="Email cannot be empty";
        error1.style.color = "red";
        return false;
    }
    else if(regex.test(email.value)==true){
        error1.innerHTML = "Email format valid";
        error1.style.color = "green";
    }else if(regex.test(email.value)==false){
        error1.innerHTML = "Email format invalid";
        error1.style.color = "red";
        return false;
    }

    if(pwd.value==""||pwd.value.trim()==""){
        error2.innerHTML="Password cannot be empty";
        error2.style.color = "red";
        return false;
    }
    else if(strongpwdregex.test(pwd.value)==false){
        error2.innerHTML="Password should have minimum 8 characters with at least one uppercase, one lower case and one number";
        error2.style.color = "red";
        return false;
    }
    else if(strongpwdregex.test(pwd.value)==true){
        error2.innerHTML="Password OK";
        error2.style.color = "green";
    }

    if(pwd.value!==pwd2.value) {
        error3.innerHTML="Passwords do not match"
        error3.style.color = "red";
        return false;
    }else{
        error3.innerHTML="";
    }

    if(phoneregex.test(phone.value)==false){
        error4.innerHTML = "Invalid phone number format. Use XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
        error4.style.color = "red";
        return false;
    }
    else if(phoneregex.test(phone.value)==true){
        error4.innerHTML = "";
    }            
}

function StrengthChecker(PasswordParameter){
    if(strongpwdregex.test(PasswordParameter)) {
        strength.style.backgroundColor = "green";
        strength.textContent = 'Strong';
        return false;
    }
    else if(mediumpwdregex.test(PasswordParameter)) {
        strength.style.backgroundColor = 'orange';
        strength.textContent = 'Medium';
        return false;
    }
    else {
        strength.style.backgroundColor = 'red';
        strength.textContent = 'Poor';
        return false;
    }
}    

let timeout;
pwd.addEventListener("input", () => {
    //The badge is hidden by default, so we show it
    strength.style.display= 'block'
    clearTimeout(timeout);
    //We then call the StrengChecker function as a callback then pass the typed password to it
    timeout = setTimeout(() => StrengthChecker(pwd.value), 500);
    //Incase a user clears the text, the badge is hidden again
    if(pwd.value.length !== 0){
        strength.style.display != 'block'
    } else{
        strength.style.display = 'none'
    }
});
