$(document).ready(function()
{
    $("#divMesajTrimisID").hide();
    $("#trimiteID").on("click", function () {
            showMessage();
    });
    $("#divMesajTrimisID").on("click",function () {
        $("#divMesajTrimisID").hide();
    });

    $("#title_input, #message_input").on('keyup', function ()
    {
        if ($('#title_input').val() && $('#message_input').val()) {
            $('#trimiteID').removeAttr('disabled');
        } else {
            $('#trimiteID').attr('disabled');
        }
    });
});

function showMessage()
{
    $("#divMesajTrimisID").show();
}
