$(document).ready(function()
{
    $("#div_replyForm").hide();
    $("#button_rasp1").on("click", function () {
        showReply('x1');
    });
    $("#button_rasp2").on("click", function () {
        showReply('x2');
    });
    $("#button_rasp3").on("click", function () {
        showReply('x3');
    });
    $("#button_rasp4").on("click", function () {
        showReply('x4');
    });
    $("#button_rasp5").on("click", function () {
        showReply('x5');
    });

    $("#button_B").on("click", function () {
        $("#message_input").css('font-weight', 'bold');
    });

    $("#button_I").on("click", function () {
        $("#message_input").css('font-style', 'italic');
    });
////////////////
    $("#button_list_dots").on("click", function () {
        $("#message_input").css('text-decoration', 'underline');
    });


    $("#button_list_numbers").on("click", function () {
        $("#message_input").css('text-decoration', 'underline');
    });

    $("#button_color").on("click", function () {
        $("#message_input").css("color",$("#button_color").val());
    });


    $("#button_align_left").on("click", function () {
        $("#message_input").css('text-align','left');
    });


    $("#button_align_center").on("click", function () {
        $("#message_input").css('text-align','center');
    });


    $("#button_align_right").on("click", function () {
        $("#message_input").css('text-align','right');
    });


});

function showReply(x)
{
    $("#div_replyForm").show();

    $("#message_input").on('keyup', function ()
    {
        if ($('#message_input').val()) {
            $('#trimiteID').removeAttr('disabled');
        } else {
            $('#trimiteID').attr('disabled');
        }
    });

    $("#trimiteID").on("click", function () {
            $("#div_replyForm").hide();
        change_images(x);
    });
}

function change_images(x)
{

    $('.' + x + '.not_answered').css('display', 'none');
    $('.' + x + '.answered').css('display', 'inline-block');
}


