var i = 7;

$(document).ready(function () {
  $date = $("#Date");
  $title = $("#Title");
  $description = $("#Description");
  $button = $("#SubmitButton");

  $button.on("click", submitFunction);

  function submitFunction(event) {
    event.preventDefault();

    var ok = true;

    if ($date.val() === "") {
      $date.addClass("Wrong");
      ok = false;
    } else {
      $date.removeClass("Wrong");
    }

    if ($title.val() === "") {
      $title.addClass("Wrong");
      ok = false;
    } else {
      $title.removeClass("Wrong");
    }

    if ($description.val() === "") {
      $description.addClass("Wrong");
      ok = false;
    } else {
      $description.removeClass("Wrong");
    }

    if (ok) {
      console.log($('input[name="Tip"]:checked').val());
      console.log($('input[name="Importanta"]:checked').val());

      $list = $("#AnnouncementsList");

      if ($('input[name="Importanta"]:checked').val() === "high") {
        $list.append(
          "<li>" +
            i +
            '<p id="anunt">' +
            $description.val() +
            '</p> <img src="../../images/exclamare.png" id="iconExclamare" /> </li>'
        );
        i = i + 1;
      } else if ($('input[name="Importanta"]:checked').val() === "low") {
        $list.append(
          "<li>" +
            i +
            '<p id="anunt">' +
            $description.val() +
            '</p> <img src="../../images/exclamare1.png" id="iconExclamare" /> </li>'
        );
        i = i + 1;
      }

      $("#Form").trigger("reset");

      alert("Anuntul a fost adaugat cu succes!");
    }
  }
});
