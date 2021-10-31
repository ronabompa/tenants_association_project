function writeMsg(){
    var x = btnStatus();
    var y = btnStatus1();
    if  (x != null){
        x.innerHTML=document.getElementById("textI").value;
    }
    else if(y != null){
        y.innerHTML=document.getElementById("textI").value;
    }
}

function getMsg(){
    return document.getElementById("textI").value
}

// function a(){
//     var x = btnStatus();
//     if(x==true){
//         document.getElementById("testP").innerHTML="true";
//     }
//     if(x==false){
//         document.getElementById("testP").innerHTML="false";
//     }
//     if(x==null){
//         document.getElementById("testP").innerHTML="null";
//     }

//     document.getElementById("testP").innerHTML=x;
    
// }
