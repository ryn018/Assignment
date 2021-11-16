let email = document.getElementById("email");
let error =document.getElementById("emailv");
let password = document.getElementById("password")
let errorpass= document.getElementById("pass");
let phoneno= document.getElementById("phone");




function validate(){
let regexemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let regexpasswrd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
let e,p;
if(regexemail.test(email.value)){
e=true;
}else{
error.innerHTML= "Invalid";
error.style.color="red";
}
if(regexpasswrd.test(password.value)){
p = true;
}else{
errorpass.innerHTML= "Invalid";
errorpass.style.color="red";

}
if(e===true&&p===true){
return true;
}else{
return false;
}
}

      

