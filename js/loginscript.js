$(document).ready(function () {
  $email = $("#emailInput");
  $password = $("#passwordInput");
  $("#loginButton").on("click", loginFunction);

  function loginFunction(event) {
    event.preventDefault();

    console.log($email.val(), $password.val());

    if ($email.val() === "admin" && $password.val() === "admin") {
      window.location.href = "admin/index.html";
    } else if ($email.val() === "locatar" && $password.val() === "locatar") {
      window.location.href = "user/index.html";
    } else {
      if ($email.val().length == 0 && $password.val().length == 0) {
        alert("Va rugam completati campurile");
      } else alert("Email sau parola gresite");
    }
  }
});
