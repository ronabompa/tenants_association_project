function btnStatus(){
    if(document.getElementById('optionbtn').clicked == true)
        {
            return  document.getElementById("firstSugestion");
        }
    else return null;
}

function btnStatus1(){
    if(document.getElementById('optionbtn1').clicked == true)
        {
            return document.getElementById("secondSugestion");
        }
    else return null;        
}

function showMsg(){
    document.getElementById("secondSugestion").innerHTML="Ai sugerat: Nu stiu";
}

// function writeMsg(){
//     var x = getMsg();
//     document.getElementById("firstSugestion").innerHTML =x;
// }

// function writeMsg1(){
    
// }