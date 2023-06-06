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
      size: Math.min(window.innerWidth-33, 400)
    });
  } else {
    clearField();
  }
}

function copyToClipboard() {
  var copyText = document.getElementById("textarea");
  copyText.select(); 
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  copyText.blur();
}

function clearField() {
  $("textarea").val("");
  $("textarea").css("height", "auto");
  $("#qrcode-container").html('<canvas id="qrcode"></canvas>');
}

