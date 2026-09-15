/************************************************************
 * AVALUM NAANUM - GOOGLE SHEETS BOOKING API
 *
 * Deploy:
 * 1. Open Apps Script
 * 2. Paste this into Code.gs
 * 3. Save
 * 4. Deploy > New deployment
 * 5. Type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 ************************************************************/

const SPREADSHEET_ID = "1ULskL25grUitNPytJ08TQYXFhC8Ep4xq0qPrjuxBKrc";

function getBookingSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  return spreadsheet.getSheets()[0];
}

function doGet() {
  return ContentService
    .createTextOutput("Avalum Naanum Booking API is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    if (!e) throw new Error("No request received.");

    const sheet = getBookingSheet();
    const data = e.parameter || {};

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.event_type || "",
      data.service || "",
      data.package || "",
      data.event_date || "",
      data.location || "",
      data.budget || "",
      data.message || "",
      data.guest_count || "",
      "Website"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Booking saved successfully."
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error(error);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: String(error)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
