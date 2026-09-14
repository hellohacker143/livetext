function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("Name Form");
}

function saveName(name) {
  var doc = DocumentApp.openById("AKfycbw-UsRuCt-EuSvArJsDXyJXj0Fbn02iZF5PRt9lNu4z92fNNtAWlQMfSOe2jpHQ0uLJ");

  var body = doc.getBody();

  body.appendParagraph("Name: " + name);
  body.appendParagraph("Date: " + new Date());
  body.appendParagraph("--------------------");

  doc.saveAndClose();

  return "Name saved successfully!";
}
