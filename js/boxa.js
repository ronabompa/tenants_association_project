const _MS_PER_DAY = 1000 * 60 * 60 * 24;

$(document).ready(function()
{
    $("#divSpatiuRezervatID").hide();
    $("#rezervaID").on("click", function () {
        showMessage();
    });
    $("#divSpatiuRezervatID").on("click",function () {
        $("#divSpatiuRezervatID").hide();
    });

    $("#dulap").on("change", recalcularePret)
    $("#locBici").on("change", recalcularePret)
    $("#selectDulap").on("change", recalcularePret)
    $("#selectLocBici").on("change", recalcularePret)
    $("#dateStartDulap").on("change", recalcularePret)
    $("#dateEndDulap").on("change", recalcularePret)
    $("#dateStartLocBici").on("change", recalcularePret)
    $("#dateEndLocBici").on("change", recalcularePret)

    $("#nume_input, #apartament_input, #telefon_input, #email_input, #cost_input").on('keyup', function ()
    {
        if ($('#nume_input').val() && $('#apartament_input').val() && $('#telefon_input').val() && $('#email_input').val() && $('#cost_input').val()) {
            $('#rezervaID').removeAttr('disabled');
        } else {
            $('#rezervaID').attr('disabled');
        }
    });

});

var totalCost;
var tipSpatiu, costTipSpatiuPerDay;
var nrSpatii;
var startDate, endDate;
var dayStart, monthStart, yearStart, dayEnd, monthEnd, yearEnd;

function showMessage() {

    $("#span_nrSpatii").html(nrSpatii);
    if(tipSpatiu === "locBici") {
        $("#span_tipSpatiu").html(" spatiu bicicleta ");
    }
    else {
        $("#span_tipSpatiu").html(tipSpatiu);
    }

    $("#span_perioada").html(new Date(startDate).toLocaleDateString() + ' - ' + new Date(endDate).toLocaleDateString());
    $("#span_cost").html(totalCost);
    $("#divSpatiuRezervatID").show();

}

function recalcularePret() {
    // de pus if pentru ca datele sa nu mai fie NULE!!
    if(($("#dateStartDulap").val() && $("#dateEndDulap").val() && $("#selectDulap").val()>0)|| ($("#dateStartLocBici").val() && $("#dateEndLocBici").val() &&$("#selectLocBici").val()>0) )
    {
        tipSpatiu = $("input[name=tip_spatiu]:checked").val();

        if(tipSpatiu === "dulap")
        {
            costTipSpatiuPerDay = 2;
            nrSpatii = parseInt($("#selectDulap").val());
            startDate =  Date.parse($("#dateStartDulap").val());
            endDate =  Date.parse($("#dateEndDulap").val());
        }
        else
        {
            costTipSpatiuPerDay = 1;
            nrSpatii = parseInt($("#selectLocBici").val());
            startDate =  Date.parse($("#dateStartLocBici").val());
            endDate =  Date.parse($("#dateEndLocBici").val());
        }
    if(endDate>startDate)
    {
        totalCost = dateDiff(startDate, endDate) * costTipSpatiuPerDay * nrSpatii;
    }
        $("#cost_input").val(totalCost + "lei.");
    }
}

// a and b are javascript Date objects
function dateDiff(a, b) {
    a = new Date(a);
    b = new Date(b);
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    dayStart = a.getDate();
    monthStart = a.getMonth();
    yearStart = a.getFullYear();
    dayEnd = b.getDate();
    monthEnd = b.getMonth();
    yearEnd = b.getFullYear();

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}


