AVALUM NAANUM — PREMIUM WEBSITE V2
====================================

FILES
-----
index.html
style.css
booking.js
Code.gs
assets/logo.png
assets/instagram-contact.jpg
assets/instagram-profile.jpg

OPEN LOCALLY
------------
Double-click index.html to open it in Chrome.

EDIT BUSINESS DETAILS
---------------------
Open booking.js.

At the top, edit:
- Instagram
- Email
- Ponmanaselvan phone
- Nandhini phone

EDIT SERVICES
-------------
In booking.js find:

const SERVICES = [

Replace the temporary services with your final service list.
You can add as many service objects as you want.

GOOGLE SHEETS
-------------
The website is configured for the Google Sheet already supplied for Avalum Naanum.

Replace/deploy Code.gs in Google Apps Script.

Use:
- Execute as: Me
- Who has access: Anyone
- Deploy as Web app

After deploying, make sure the /exec URL in booking.js is the current URL.

GOOGLE SHEET HEADERS
--------------------
Timestamp | Name | Phone | Email | Event Type | Service | Package | Event Date |
Location | Budget | Message | Guest Count | Source

IMPORTANT
---------
The portfolio intentionally does NOT pretend you have previous events.
Until you provide event photos, the website uses your logo and a
"first chapter / portfolio coming soon" presentation.

When you send your service list and event photos later, replace the
temporary SERVICES array and add the photos to the Journey section.



SERVICE-SPECIFIC BOOKING
------------------------
The booking form automatically receives the selected service and package.
Each service card has:
- Details
- Editable starting price
- WhatsApp enquiry button

Each package has:
- Editable price
- Editable inclusions
- Choose Package button
- WhatsApp button

CALL + WHATSAPP
---------------
The website uses Ponmanaselvan's number as the primary call/WhatsApp contact.
Change SITE.contacts in booking.js if you want another primary number.

PRICING
-------
All public prices have been removed for now.
The website uses enquiry/WhatsApp buttons instead of displaying prices.

SERVICE LIST
------------
The editable service list now covers common wedding and event-planning categories:
- full and partial wedding planning
- day-of coordination
- engagement, reception and destination weddings
- venue selection
- decor and floral
- catering
- photography and videography
- bridal makeup, grooming, mehendi and saree draping
- invitations and stationery
- entertainment, DJ, sound, lighting and LED
- special entries and sangeet/choreography
- rituals and ceremony support
- guest hospitality, RSVP and accommodation
- transportation and logistics
- return gifts and hampers
- birthdays, private/family events and baby/family celebrations
- corporate events
- pre-wedding events/shoots
- complete event management
- custom events

All of these are editable in booking.js.
