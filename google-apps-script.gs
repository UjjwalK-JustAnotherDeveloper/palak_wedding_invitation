const SHEET_ID = '10U13hXHeBTDU1PyXXMxGwoxSupbqBerX72jIYuXrNwg';

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'RSVP sheet endpoint is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Availability']);
    }

    sheet.appendRow([
      payload.timestamp || new Date().toISOString(),
      payload.name || '',
      payload.availability || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
