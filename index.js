var allData =   JSON.parse(localStorage.getItem("usersData"));


var inputEmail = document.getElementById("inputEmail");
var inputPass = document.getElementById("inputPass");
var loginBtn = document.getElementById("loginBtn");
var incorrectPass = document.getElementById("incorrectPass");
var inputsRequired = document.getElementById("inputsRequired");
var incorrectEmail = document.getElementById("incorrectEmail")
var cartona ;

var Anchorbtn = document.getElementById("anchorbtn");


loginBtn.addEventListener("click" , function (){


    if (inputEmail.value==""  || inputPass.value=="" ){

        inputsRequired.classList.remove("d-none");

        return
    }




    for ( var i=0 ; i< allData.length ; i++){

        if (inputEmail.value != allData[i].userEmail){

            incorrectEmail.classList.remove("d-none");
            inputsRequired.classList.add("d-none");
            incorrectPass.classList.add("d-none");


            
        }


        else if ( inputEmail.value==allData[i].userEmail &&    inputPass.value !=allData[i].userPass   ){
    
            incorrectPass.classList.remove("d-none");
            incorrectEmail.classList.add("d-none");
            inputsRequired.classList.add("d-none");

            
        
        
        }


else if (inputEmail.value==allData[i].userEmail  && inputPass.value==allData[i].userPass  ){

    Anchorbtn.setAttribute("href" , "profile.html");
cartona = allData[i].userName;

localStorage.setItem("names" , JSON.stringify(cartona) );

return



}


}
}
)