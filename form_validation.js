function registration(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#cpassword').value;
    console.log(name,email,mobile,password,cpassword);

    if(name === ""){
        document.querySelector('#errorname').innerHTML ="please enter your name";
         let selectname = document.querySelector('#name');
         selectname.style.borderColor = "red"
         selectname.style.outlineColor ="red"
         return false;
    }
    else if(email== ""){
        document.querySelector('#errorname2').innerHTML ="please enter your email";
         let selectemail = document.querySelector('#email');
         selectemail.style.borderColor = "red"
         selectemail.style.outlineColor ="red"
         return false;
    }
    else if(mobile== ""){
        document.querySelector('#errorname3').innerHTML ="please enter your mobile no.";
         let selectmobile = document.querySelector('#mobile');
         selectmobile.style.borderColor = "red"
         selectmobile.style.outlineColor ="red"
         return false;
    }
    else if(password== ""){
        document.querySelector('#errorname4').innerHTML ="please enter your password";
         let selectpassword = document.querySelector('#password');
         selectpassword.style.borderColor = "red"
         selectpassword.style.outlineColor ="red"
         selectpassword.style.color ="red"
         return false;
    }
    else if(cpassword== ""){
        document.querySelector('#errorname5').innerHTML ="please enter your confirm password";
         let selectcpassword = document.querySelector('#cpassword');
         selectcpassword.style.borderColor = "red"
         selectcpassword.style.outlineColor ="red"
         return false;
    }
    else if
    (!(cpassword.match(/[1234567890]/)
&&
cpassword.match(/[!@#$%^&*_()-]/)
&&
cpassword.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)
&&
cpassword.match(/[abcdefghijklmnopqrstuvwxyz]/)))
{
    document.querySelector('#errorname5').innerHTML = "password contains 1 lower, upper, special and number";

}
}