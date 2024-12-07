

var allUsersData = [];

var inputNameUp = document.getElementById("input-nameup");
var inputEmailUp = document.getElementById("input-emailup");
var inputPassUp = document.getElementById("input-passup");
var signUpBtn = document.getElementById("signup-btn");
var success = document.getElementById("success");
var inputsRequired = document.getElementById("inputs-Required");
var repeatedMail = document.getElementById("repeated-mail");
var invalidData = document.getElementById("invalidData");

if (localStorage.getItem("usersData") != null  ){

    allUsersData = JSON.parse(localStorage.getItem("usersData"))
    
}


function validName (){

var name = inputNameUp.value;

var regex = /^\w{2,15}$/ 

if (regex.test(name) == true ){

    inputNameUp.classList.add('is-valid');
    inputNameUp.classList.remove('is-invalid');

    return true

}
else{
    inputNameUp.classList.remove('is-valid');
    inputNameUp.classList.add('is-invalid');

    return false

}


}
function validEmail (){

var Email = inputEmailUp.value;

var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 

if (regex.test(Email) == true ){

    inputEmailUp.classList.add('is-valid');
    inputEmailUp.classList.remove('is-invalid');

    return true
}
else{
    inputEmailUp.classList.remove('is-valid');
    inputEmailUp.classList.add('is-invalid');

    return false
}


}
function validPass (){

var Pass = inputPassUp.value;

var regex = /^.{7,25}$/ 

if (regex.test(Pass) == true ){

    inputPassUp.classList.add('is-valid');
    inputPassUp.classList.remove('is-invalid');
    return true

}
else{
    inputPassUp.classList.remove('is-valid');
    inputPassUp.classList.add('is-invalid');
    return false

}


}


signUpBtn.addEventListener("click" , function(){



    if (inputNameUp.value == "" || inputEmailUp.value == "" || inputPassUp.value == ""){
        inputsRequired.classList.remove("d-none");
        success.classList.add("d-none");
        repeatedMail.classList.add("d-none") ;
        invalidData.classList.add("d-none");


        return

    }

    if (validName () == false || validEmail () == false || validPass () == false){
        inputsRequired.classList.add("d-none");
        success.classList.add("d-none");
        repeatedMail.classList.add("d-none") ;
        invalidData.classList.remove("d-none");

        return

    }





    

    if(repeatMail () == false){

        inputsRequired.classList.add("d-none");
        success.classList.add("d-none");
        repeatedMail.classList.remove("d-none") ; 
        invalidData.classList.add("d-none");
  
    }
    else{

        var userData = {
            userName : inputNameUp.value,
            userEmail : inputEmailUp.value,
            userPass : inputPassUp.value,
            
            }
    
            allUsersData.push(userData);
            localStorage.setItem("usersData" , JSON.stringify(allUsersData));
            
            
            success.classList.remove("d-none");
            inputsRequired.classList.add("d-none");
            repeatedMail.classList.add("d-none") ;   
            invalidData.classList.add("d-none");


               
            clear ();


            inputNameUp.classList.remove('is-valid');
            inputNameUp.classList.remove('is-invalid');  
            inputEmailUp.classList.remove('is-valid');
            inputEmailUp.classList.remove('is-invalid');
            inputPassUp.classList.remove('is-valid');
            inputPassUp.classList.remove('is-invalid');
        
        
        }

})



function clear (){

    inputNameUp.value = "";
    inputEmailUp.value = "";
    inputPassUp.value = "";
}

function repeatMail (){

    console.log(allUsersData);
    

for (ele of allUsersData){

if (    inputEmailUp.value == ele.userEmail){

    
    return false
}

}

}




