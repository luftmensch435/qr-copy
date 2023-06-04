function onload() {
  let textInput = document.getElementById("textInput");
  textInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      textInput.blur();
    }
  });

}

function generateQRCode() {
  var textInput = document.getElementById("textInput").value;
  if (textInput.trim()) {
    textInput = textInput.trim();
    let qrcode = document.getElementById("qrcode");
    qrcode.innerHTML = "";
    new QRious({
      // TODO: adaptive size
      element: qrcode,
      value: textInput,
      size: 128
    });
  } else {
    clearQRCode();
  }
}

function clearField() {
  document.getElementById("textInput").value = "";
  clearQRCode();
}

function clearQRCode() {
  document.getElementById("qrcode-container").innerHTML = '<canvas id="qrcode"></canvas>';
}