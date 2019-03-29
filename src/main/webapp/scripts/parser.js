var pdfUtil = require('pdf-to-text');

function getFile() {
    var uploadedFile = document.getElementById('pdf-insert');
    alert(uploadedFile.value);
}