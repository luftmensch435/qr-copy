function adjustTextareaSize() {
  $("textarea").css("height", "auto");
  $("textarea").css("height", $("textarea").prop("scrollHeight")+64+"px");
}

function generateQRCode() {
  var text = $("textarea").val().trim();
  if (text) {
    adjustTextareaSize();
    $("#qrcode").html("");
    new QRious({
      element: document.getElementById("qrcode"),
      value: location.protocol + '//' + location.host + location.pathname + "?text=" + encodeURIComponent(text),
      size: 400
    });
  } else {
    clearField();
  }
}

function copyToClipboard() {
  $("textarea").select(); // Select the textarea's content
  // textarea.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
}

function clearField() {
  $("textarea").val("");
  $("textarea").css("height", "auto");
  $("#qrcode-container").html('<canvas id="qrcode"></canvas>');
}

