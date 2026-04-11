const SHEET_ID = '10U13hXHeBTDU1PyXXMxGwoxSupbqBerX72jIYuXrNwg';
const SHEET_HEADERS = ['Date', 'Name', 'Availability'];
const AVAILABILITY_BY_KEY = {
  yes: 'Yes, I will',
  no: "Unfortunately, I can't"
};
const AVAILABILITY_BY_LABEL = {
  'yes, i will': AVAILABILITY_BY_KEY.yes,
  'હા, હું આવીશ': AVAILABILITY_BY_KEY.yes,
  'unfortunately, i cant :(': AVAILABILITY_BY_KEY.no,
  "unfortunately, i can't": AVAILABILITY_BY_KEY.no,
  "unfortunately, i can't attend": AVAILABILITY_BY_KEY.no,
  'દુર્ભાગ્યે, હું આવી શકતો નથી': AVAILABILITY_BY_KEY.no
};

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
    const row = buildRsvpRow_(payload, spreadsheet);
    const matchingRows = findMatchingRowsByName_(sheet, row[1]);

    ensureSheetHeaders_(sheet);

    if (matchingRows.length > 0) {
      const targetRow = matchingRows[0];
      sheet.getRange(targetRow, 1, 1, row.length).setValues([row]);

      for (let index = matchingRows.length - 1; index >= 1; index -= 1) {
        sheet.deleteRow(matchingRows[index]);
      }
    } else {
      sheet.appendRow(row);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function ensureSheetHeaders_(sheet) {
  sheet.getRange(1, 1, 1, SHEET_HEADERS.length).setValues([SHEET_HEADERS]);
}

function buildRsvpRow_(payload, spreadsheet) {
  const name = sanitizeCellText_(payload.name);
  const availability = normalizeAvailability_(payload);
  const submittedDate = formatSubmittedDate_(payload.timestamp, spreadsheet);

  if (!name) {
    throw new Error('Name is required.');
  }

  if (!availability) {
    throw new Error('Availability is required.');
  }

  return [submittedDate, name, availability];
}

function findMatchingRowsByName_(sheet, submittedName) {
  const lastRow = sheet.getLastRow();
  const normalizedName = normalizeNameKey_(submittedName);

  if (!normalizedName || lastRow < 2) {
    return [];
  }

  const nameValues = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
  const matchingRows = [];

  nameValues.forEach(function(row, index) {
    if (normalizeNameKey_(row[0]) === normalizedName) {
      matchingRows.push(index + 2);
    }
  });

  return matchingRows;
}

function formatSubmittedDate_(timestamp, spreadsheet) {
  const submittedAt = timestamp ? new Date(timestamp) : new Date();
  const safeDate = Number.isNaN(submittedAt.getTime()) ? new Date() : submittedAt;
  const timezone = spreadsheet.getSpreadsheetTimeZone() || Session.getScriptTimeZone() || 'Asia/Kolkata';

  return Utilities.formatDate(safeDate, timezone, 'yyyy-MM-dd');
}

function normalizeAvailability_(payload) {
  const rawKey = sanitizeCellText_(payload.availabilityKey).toLowerCase();
  if (AVAILABILITY_BY_KEY[rawKey]) {
    return AVAILABILITY_BY_KEY[rawKey];
  }

  const rawLabel = sanitizeCellText_(payload.availability).toLowerCase();
  return AVAILABILITY_BY_LABEL[rawLabel] || sanitizeCellText_(payload.availability);
}

function normalizeNameKey_(value) {
  return sanitizeCellText_(value).toLowerCase();
}

function sanitizeCellText_(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}
