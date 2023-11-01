alert("Привет, я JS");
function guessGame()
{

var guessNumber = 5;
//alert(guessNumber);
var ourNumber = prompt("Введи, какое-нибудь число:");

if (guessNumber == ourNumber){
    return alert("Угадал")
}
else if (guessNumber < ourNumber)
    {
    alert("Надо меньше");
    return guessGame();
    }
else {
    alert("Надо больше");
    return guessGame();
}
}

//guessGame();

/*Таймер на нахождение пользователя на главной странице*/
function timer(){
    alert("ты здесь слишком долго");
    window.close();
}
//setTimeout(timer, 3000);
function validForm(){
    var name = document.getElementById("name").value;
    var reg_name = /^[a-zа-яё]+$/i;
    var password = document.getElementById("password").value;
    var reg_password = /^[a-z0-9]{5, 100}/i;
    
    if(reg_name.test(name) == false){
        alert("Ошибка в поле Фио");
       
       }
    if(reg_password.test(password) == false){
        alert("Ошибка в поле пароль");
    }
}

document.querySelector(".button").addEventListener("click", validForm);