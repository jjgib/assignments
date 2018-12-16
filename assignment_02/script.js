function form_navigate(){
    var loginForm = document.getElementById("login_form");
    var registerForm = document.getElementById("register_form");
    registerForm.style.display = (registerForm.style.display == "none"?"block":"none");
    loginForm.style.display = (loginForm.style.display == "none"?"block":"none");
}

function validateEmail(emailId){
    //var emailId = document.getElementById("emailId").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailId);
}
function validatePassword(pwd){
    //var pwd = document.getElementById("password").value;
    var pwdExpression = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{0,12}$/; 
    return pwdExpression.test(pwd);
}

function validateRegisterForm(){
    var uname = document.getElementById("username");
    var emailId = document.getElementById("emailId");
    var password = document.getElementById("password");
    var gender = document.getElementById("gender");
    var nation = document.getElementsByName("nationality");
    var term_cond = document.getElementById("terms_cond");
    var nationValid = false;

    if(uname.value == ""){
        alert("Please enter your name");
        return false;
    }
    if(emailId.value == ""){
        alert("Please enter email id");
        return false;
    }
    if(validateEmail(emailId.value) == false){
        alert("Please enter correct email id");
        emailId.focus();
        return false;
    }
    if(password.value == ""){
        alert("Please enter password");
        return false;
    }
    if(validatePassword(password.value) == false){
        alert("Password must contain capital letter, small letter, numeric and a special character.");
        password.focus();
        return false;
    }
    if(password.value.length < 8){
        alert("Password must contain min 8 characters");
        password.focus();
        return false;
    }
    if(gender.value == ""){
        alert("Please select you gender");
        gender.focus();
        return false;
    }
    /*var i =0;
    while(!nationValid && i < nation.length){
        if(nation[i].checked) { nationValid = true; }
        i++;
    }*/
    if(nation[0].checked == false && nation[1].checked == false){
        nationValid = false;
        alert("Please select your nationality"); 
        return false;
    }
    if(term_cond.checked == false){
        alert("Please agree our terms and conditions");
        return false;
    }

    document.getElementById("register_form").submit();
}

function validateLoginForm(){
    var emailId = document.getElementById("log_email");
    var password = document.getElementById("log_pass");
    if(emailId.value == ""){
        alert("Please enter email id");
        return false;
    }
    if(validateEmail(emailId.value) == false){
        alert("Please enter correct email id");
        emailId.focus();
        return false;
    }
    if(password.value == ""){
        alert("Please enter password");
        return false;
    }
    if(validatePassword(password.value) == false){
        alert("Password must contain capital letter, small letter, numeric and a special character.");
        password.focus();
        return false;
    }
    if(password.value.length < 8){
        alert("Password must contain min 8 characters");
        password.focus();
        return false;
    }
    document.getElementById("login_form").submit();
}