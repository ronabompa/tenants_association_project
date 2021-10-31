function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  var x = document.createElement("IMG");
  function showPreview() {
  
    x.setAttribute("src", "../../images/statisticaLunaCrt.png");
    x.setAttribute("width", "700");
    x.setAttribute("height", "500");
    x.classList.add("grid-poza")
    document.getElementById("poza").appendChild(x);
}

function showPreview2() {

    //var x = document.createElement("IMG");
    x.setAttribute("src", "../../images/statisticaLunaAnt.png");
    x.setAttribute("width", "700");
    x.setAttribute("height", "500");
    x.classList.add("grid-poza")
    document.getElementById("poza").appendChild(x);
}

function showPreview3() {

    //var x = document.createElement("IMG");
    x.setAttribute("src", "../../images/statistica3Luni.png");
    x.setAttribute("width", "700");
    x.setAttribute("height", "500");
    x.classList.add("grid-poza")
    document.getElementById("poza").appendChild(x);
}

function showPreview4() {

    //var x = document.createElement("IMG");
    x.setAttribute("src", "../../images/statisticaAnPNG.png");
    x.setAttribute("width", "700");
    x.setAttribute("height", "500");
    x.classList.add("grid-poza")
    document.getElementById("poza").appendChild(x);
}