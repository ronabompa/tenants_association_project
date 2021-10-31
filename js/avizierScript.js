$(document).ready(function () {
    $avizierTab1 = $("#avizierTab1");
    $avizierTab2 = $("#avizierTab2");
    $avizierTab3 = $("#avizierTab3");
    $Month = $("#Month");
    $Download = $("#DownloadButton1")

$Month.on("change", openTable);    
$Download.on("click", download);

$avizierTab2.hide();
$avizierTab3.hide();

function openTable(event) {
    event.preventDefault();

    var month = $Month.val();
    if (month === "Ianuarie 2021" || month === "Decembrie 2020") {

        if (month === "Ianuarie 2021") {
            $avizierTab1.show();
            $avizierTab1.css("visibility","visible");
            $avizierTab2.hide();
            $avizierTab2.css("visibility","hidden");
            $avizierTab3.hide();
            $avizierTab3.css("visibility","hidden");
        }

        if (month === "Decembrie 2020") {
            $avizierTab1.hide();
            $avizierTab1.css("visibility","hidden");
            $avizierTab3.hide();
            $avizierTab3.css("visibility","hidden");
            $avizierTab2.show();
            $avizierTab2.css("visibility","visible");
        }
    } else {
        $avizierTab3.show();
        $avizierTab3.css("visibility","visible");
        $avizierTab2.hide();
        $avizierTab2.css("visibility","hidden");
        $avizierTab1.hide();
        $avizierTab1.css("visibility","hidden");
    }
}

function download() {
    
    var month = $Month.val(); 
    var avizierTab;
    if (month === null) {
        avizierTab="";
    } else {
        if (month === "Ianuarie 2021") {
            avizierTab="#avizierTab1";  
        } else {
            if (month === "Decembrie 2020") {
                avizierTab="#avizierTab2";  
            } else {
                avizierTab="#avizierTab3";  
            }
        }
    }
    if (avizierTab === "") {
        alert("Vă rugăm sa alegeți o lună pentru avizier");
    } else {
        
        var dataSource = shield.DataSource.create({
            data: avizierTab,
            schema: {
                type: "table",
                fields: {
                    Id: { type: Number },
                    Locatar: { type: String },
                    Apartament: { type: Number },
                    Salubritate: { type: Number },
                    Ascensor: { type: String },
                }
            }
        });

        dataSource.read().then(function (data) {
            var pdf = new shield.exp.PDFDocument({
                author: "PrepBootstrap",
                created: new Date()
            });

            pdf.addPage("a4", "portrait");

            pdf.table(
                50,
                50,
                data,
                [   { field: "Id", title: "#", width: 50 },
                    { field: "Locatar", title: "Nume Locatar", width: 100 },
                    { field: "Apartament", title: "Nr. Apartament", width: 100 },
                    { field: "Salubritate", title: "Salubritate", width: 100 },
                    { field: "Ascensor", title: "Ascensor", width: 100 }
                ],
                {
                    margins: {
                        top: 50,
                        left: 50
                    }
                }
            );

            pdf.saveAs({
                fileName: "Avizier"
            });
        });

    }
}


});