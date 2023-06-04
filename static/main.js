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
  let wordLimit = 1500;
  var textInput = document.getElementById("textInput").value;
  textInput = textInput.trim();
  if (textInput) {
    if (textInput.length > wordLimit) {
      document.getElementById("alert").style.visibility = "visible";
    } else {
      document.getElementById("alert").style.visibility = "hidden";
    }
    let qrcode = document.getElementById("qrcode");
    qrcode.innerHTML = "";
    new QRious({
      element: qrcode,
      value: textInput,
      size: 400
    });
  } else {
    clearField();
  }
}

function clearField() {
  document.getElementById("textInput").value = "";
  document.getElementById("alert").style.visibility = "hidden";
  document.getElementById("qrcode-container").innerHTML = '<canvas id="qrcode"></canvas>';
}