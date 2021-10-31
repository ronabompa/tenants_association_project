$(document).ready(function () {
  $paymentDiv = $(".OnlinePayment");
  $closeButton = $("#CloseIcon");
  $payButton1 = $("#PayButton1");
  $payButton2 = $("#PayButton2");

  $payButton1.on("click", openPayment);
  $closeButton.on("click", closePayment);
  $payButton2.on("click", checkFields);

  function openPayment(event) {
    event.preventDefault();

    $paymentDiv.css("visibility", "visible");

    $paymentDiv.animate({ width: "900px" }, 200, function () {
      $paymentDiv.animate({ height: "400px" }, 200);
    });
  }

  function closePayment() {
    $paymentDiv.animate({ height: "0px" }, 200, function () {
      $paymentDiv.animate({ width: "0px" }, 200);
    });
    $paymentDiv.css("visibility", "hidden");
  }

  function checkFields(event) {
    event.preventDefault();

    $cardNumber = $("#CardNumber");
    $cardHolder = $("#CardHolder");
    $CCV = $("#CCVCode");

    const cardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const nameRegex = /^[a-z ,.'-]+$/i;
    const CCVRegex = /^[0-9]{3}$/;

    var ok = true;

    if (!cardRegex.test($cardNumber.val())) {
      ok = false;
      $cardNumber.addClass("Wrong");
    } else {
      $cardNumber.removeClass("Wrong");
    }

    if (!nameRegex.test($cardHolder.val())) {
      ok = false;
      $cardHolder.addClass("Wrong");
    } else {
      $cardHolder.removeClass("Wrong");
    }

    if (!CCVRegex.test($CCV.val())) {
      ok = false;
      $CCV.addClass("Wrong");
      console.log(ok);
    } else {
      $CCV.removeClass("Wrong");
    }

    if (ok) {
      setTimeout(function () {
        alert("Plata dumneavoastra a fost efectuata!");
        closePayment();
        $("#CardForm").trigger("reset");
      }, 100);
    }
  }
});
