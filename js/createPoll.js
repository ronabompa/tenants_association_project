function displayMsg(){
    var x = document.getElementById("textIntr").value;
    var y = document.getElementById("textOp").value;
    var rez = "Poll -ul:\n".concat(x,"\n"+ y.split(" ")[0],"\n"+ y.split(" ")[1],"a fost creat cu succes");
    //var t = "Poll-ul a fost creat cu succes!!!"
    document.getElementById("textConf").innerHTML= "Poll-ul:";
    document.getElementById("intrConf").innerHTML =x;
    document.getElementById("firstConf").innerHTML = y.split(" ")[0];
    document.getElementById("secondConf").innerHTML = y.split(" ")[1];
    document.getElementById("finalConf").innerHTML = "a fost cear cu success!!!";
}