function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("Name Form");
}

function saveName(name) {
  var doc = DocumentApp.openById("AKfycbwLVPlBSJO-crzAGZh_UvEWWNdj3lh5hf0dVuxBghqcrvzy-reE5QVeFkGy3cMrArqO");

  var body = doc.getBody();

  body.appendParagraph("Name: " + name);
  body.appendParagraph("Date: " + new Date());
  body.appendParagraph("--------------------");

  doc.saveAndClose();

  return "Name saved successfully!";
}
