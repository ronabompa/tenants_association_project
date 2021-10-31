$(document).ready(function () {
    $coldWaterArrow = $("#arrow1");
    $hotWaterArrow = $("#arrow2");
    $coldWater = $(".ColdWater");
    $hotWater = $(".HotWater");

var clickCounterHot = 0;
var clickCounterCold = 0;

$coldWaterArrow.on("click", openColdWaterTable);
$hotWaterArrow.on("click", openHotWaterTable);
 

function openHotWaterTable(event) {
    event.preventDefault();
    clickCounterHot++;
    
    if (clickCounterHot % 2 == 0) {
      $hotWater.css("visibility", "hidden");
      $hotWaterArrow.css("transform","rotate(360deg)");
      $hotWater.animate({ width: "0px" }, 200, function () {
      $hotWater.animate({ height: "0px" }, 200);
    });
    } else {
      $hotWater.css("visibility", "visible");
      $hotWaterArrow.css("transform","rotate(180deg)");
      $hotWater.animate({ width: "500px" }, 200, function () {
      $hotWater.animate({ height: "0px" }, 200);
    });   
    }
}
function openColdWaterTable(event) {
    event.preventDefault();
     clickCounterCold++;
    
    if (clickCounterCold % 2 == 0) {
      $coldWater.css("visibility", "hidden");
      $coldWaterArrow.css("transform","rotate(360deg)");  
      $coldWater.animate({ width: "0px" }, 100, function () {
      $coldWater.animate({ height: "0px" }, 100);
    });
    } else {
      $coldWater.css("visibility", "visible");
      $coldWaterArrow.css("transform","rotate(180deg)");  
      $coldWater.animate({ width: "500px" }, 100, function () {
      $coldWater.animate({ height: "0px" }, 100);
    });   
    }
}
});