/*
  AVALUM NAANUM - EASY EDIT AREA
  --------------------------------
  Change your business details here.
  Your final service list can also be replaced in SERVICES below.
*/

const SITE = {
  brandName: "Avalum Naanum Event Planners",
  instagram: "https://www.instagram.com/avalumnaanum_eventplanners/",
  email: "avalumnaanum.eventplanners@gmail.com",

  contacts: [
    { name: "Ponmanaselvan", phone: "9786442566" },
    { name: "Nandhini", phone: "7305345838" }
  ]
};

/* TEMPORARY SERVICE LIST
   Replace these with your final service list when you send it.
*/
/*
  =========================
  EASY EDIT AREA
  =========================
  You can change:
  - service names
  - service descriptions
  - starting prices
  - WhatsApp message
  - package names/prices/inclusions
  - contact numbers
*/

const SERVICES = [
  {
    id: "full-wedding-planning",
    icon: "♡",
    title: "Full Wedding Planning",
    short: "End-to-end planning for a beautifully coordinated wedding.",
    description: "Complete planning support from concept and vendor coordination through event-day execution, timelines and guest experience.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Full Wedding Planning."
  },
  {
    id: "partial-wedding-planning",
    icon: "◇",
    title: "Partial Wedding Planning",
    short: "Professional support for couples who have already started planning.",
    description: "We step in where you need us — helping with selected vendors, timelines, styling, logistics and the remaining planning details.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Partial Wedding Planning."
  },
  {
    id: "day-of-coordination",
    icon: "⌁",
    title: "Day-of Coordination",
    short: "Relax and enjoy your celebration while we manage the flow.",
    description: "On-the-day coordination of schedules, vendors, key moments, setup and event flow so your family can enjoy the occasion.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Day-of Coordination."
  },
  {
    id: "engagement",
    icon: "◊",
    title: "Engagement Planning",
    short: "Elegant planning for intimate and memorable engagement celebrations.",
    description: "Venue, styling, decor, guest flow and event-day coordination tailored to your engagement celebration.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Engagement Planning."
  },
  {
    id: "reception",
    icon: "✦",
    title: "Reception Planning",
    short: "A polished reception with thoughtful styling and coordination.",
    description: "Reception planning covering decor, entertainment, photography coordination, schedule management and guest experience.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Reception Planning."
  },
  {
    id: "destination-wedding",
    icon: "✧",
    title: "Destination Weddings",
    short: "Planning and coordination for celebrations away from home.",
    description: "Venue research, vendor coordination, guest logistics, accommodation support, transportation and multi-day event planning.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Destination Wedding Planning."
  },
  {
    id: "venue-selection",
    icon: "⌂",
    title: "Venue Selection & Management",
    short: "Find and coordinate the right venue for your celebration.",
    description: "Venue shortlisting, site coordination, layout planning, booking assistance and venue-day coordination.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Venue Selection."
  },
  {
    id: "decor-design",
    icon: "❋",
    title: "Wedding & Event Decor",
    short: "Theme, stage, entrance, floral and venue styling.",
    description: "Creative decor concepts including stage design, mandapam styling, entrances, backdrops, florals, tablescapes and venue ambience.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Wedding & Event Decor."
  },
  {
    id: "floral-decor",
    icon: "❀",
    title: "Floral & Fresh Flower Decor",
    short: "Floral styling for stages, entrances, mandapams and tables.",
    description: "Fresh and artificial floral arrangements for wedding stages, mandapams, entrances, aisles, dining spaces and photo areas.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Floral Decor."
  },
  {
    id: "catering",
    icon: "◌",
    title: "Catering & Menu Planning",
    short: "Food planning and catering coordination for your guests.",
    description: "Menu planning, catering coordination, service style and food counters tailored to your guest count, traditions and preferences.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Catering."
  },
  {
    id: "photography",
    icon: "◎",
    title: "Photography",
    short: "Capture the people, emotions and details you will remember.",
    description: "Traditional and candid photography coordination for ceremonies, portraits, family moments and celebration details.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Wedding Photography."
  },
  {
    id: "videography",
    icon: "▣",
    title: "Videography & Cinematic Films",
    short: "Tell your celebration story through film.",
    description: "Wedding films, cinematic coverage, highlights and event videography coordinated around your important moments.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Wedding Videography."
  },
  {
    id: "bridal-makeup",
    icon: "✿",
    title: "Bridal Makeup & Grooming",
    short: "Beauty and styling coordination for every important function.",
    description: "Bridal makeup, hair styling, grooming and beauty coordination for wedding, reception and pre-wedding functions.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Bridal Makeup & Grooming."
  },
  {
    id: "mehendi",
    icon: "❋",
    title: "Mehendi",
    short: "Mehendi artists and function coordination.",
    description: "Mehendi artist coordination for brides, families and guests, with timing planned around the event schedule.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Mehendi services."
  },
  {
    id: "saree-draping",
    icon: "◈",
    title: "Saree Draping & Styling",
    short: "Traditional and contemporary styling support.",
    description: "Saree draping, hair styling and function-ready styling coordination for brides, family members and special guests.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Saree Draping & Styling."
  },
  {
    id: "invitations",
    icon: "✉",
    title: "Invitations & Stationery",
    short: "Printed and digital invitations designed around your celebration.",
    description: "Invitation coordination, digital invites, wedding stationery, welcome boards, signage and event-day printed details.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Invitations & Stationery."
  },
  {
    id: "entertainment",
    icon: "♫",
    title: "Entertainment & Performances",
    short: "Music, artists and entertainment for memorable celebrations.",
    description: "DJ, live music, cultural performances, dance performances, emcee coordination and entertainment planning.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Entertainment services."
  },
  {
    id: "dj-sound-lighting",
    icon: "◉",
    title: "DJ, Sound, Lighting & LED",
    short: "Production support that brings the celebration to life.",
    description: "DJ, sound systems, stage lighting, ambient lighting, LED screens and event production coordination.",
    whatsapp: "Hi Avalum Naanum, I’m interested in DJ, Sound & Lighting."
  },
  {
    id: "special-entries",
    icon: "✦",
    title: "Bride & Groom Special Entries",
    short: "Plan an entrance your guests will remember.",
    description: "Creative couple entries, family entries, traditional arrivals, props, choreography and coordinated music moments.",
    whatsapp: "Hi Avalum Naanum, I’m interested in a Special Entry."
  },
  {
    id: "sangeet-choreography",
    icon: "♬",
    title: "Sangeet & Choreography",
    short: "Dance planning and coordination for family celebrations.",
    description: "Sangeet concepts, choreography coordination, rehearsal planning, performance order and stage-flow support.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Sangeet & Choreography."
  },
  {
    id: "ritual-services",
    icon: "◈",
    title: "Traditional Ritual & Ceremony Support",
    short: "Coordination for meaningful wedding traditions and ceremonies.",
    description: "Support with ceremony schedules, ritual materials, priest coordination and traditional function arrangements where required.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Traditional Ritual Services."
  },
  {
    id: "guest-hospitality",
    icon: "♢",
    title: "Guest Hospitality & RSVP",
    short: "Thoughtful guest communication and hospitality support.",
    description: "RSVP coordination, guest lists, welcome desks, hospitality teams, guest communication and special-family assistance.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Guest Hospitality."
  },
  {
    id: "accommodation",
    icon: "⌂",
    title: "Accommodation & Guest Stay",
    short: "Stay coordination for family and outstation guests.",
    description: "Hotel coordination, rooming lists, check-in support and guest accommodation management for multi-day celebrations.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Accommodation Coordination."
  },
  {
    id: "transportation",
    icon: "➜",
    title: "Guest Transportation & Logistics",
    short: "Smooth movement for guests, family and VIPs.",
    description: "Transportation planning, pickup/drop coordination, vehicle schedules, guest movement and event logistics.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Guest Transportation."
  },
  {
    id: "gifts-hampers",
    icon: "◇",
    title: "Return Gifts & Welcome Hampers",
    short: "Thoughtful gifting for guests and loved ones.",
    description: "Return gifts, welcome hampers, personalised gifting, packaging and distribution coordination.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Return Gifts & Hampers."
  },
  {
    id: "birthday-private",
    icon: "♡",
    title: "Birthdays & Private Celebrations",
    short: "Birthdays, anniversaries, proposals and family celebrations.",
    description: "Personalised planning for birthdays, anniversaries, proposals, surprise parties and intimate family celebrations.",
    whatsapp: "Hi Avalum Naanum, I’m interested in a Private Celebration."
  },
  {
    id: "baby-family-events",
    icon: "♡",
    title: "Baby & Family Celebrations",
    short: "Warmly planned celebrations for growing families.",
    description: "Baby showers, seemantham, naming ceremonies, family functions and other milestone celebrations.",
    whatsapp: "Hi Avalum Naanum, I’m interested in a Baby or Family Event."
  },
  {
    id: "corporate-events",
    icon: "▦",
    title: "Corporate & Professional Events",
    short: "Professional event planning for teams and organisations.",
    description: "Corporate celebrations, launches, meetings, award functions, employee events and professional event coordination.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Corporate Event Planning."
  },
  {
    id: "pre-wedding",
    icon: "◎",
    title: "Pre-Wedding Events & Shoots",
    short: "Plan the moments before the big day.",
    description: "Pre-wedding shoots, couple experiences, haldi, mehendi, intimate gatherings and creative pre-wedding celebrations.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Pre-Wedding Services."
  },
  {
    id: "complete-event-management",
    icon: "✧",
    title: "Complete Event Management",
    short: "One coordinated team for the full celebration.",
    description: "A customised combination of planning, venue, decor, catering, photography, entertainment, guest hospitality and event-day execution.",
    whatsapp: "Hi Avalum Naanum, I’m interested in Complete Event Management."
  },
  {
    id: "custom-event",
    icon: "♡",
    title: "Custom Event",
    short: "Have a different idea? Tell us and we will build it with you.",
    description: "If your celebration does not fit a standard category, tell us what you are imagining and we can build a tailored event plan.",
    whatsapp: "Hi Avalum Naanum, I have a custom event idea."
  }
];

const PACKAGES = [
  {
    id: "silver",
    name: "Silver",
    subtitle: "Essential",
    note: "A simple planning foundation for your celebration",
    popular: false,
    includes: [
      "Initial planning consultation",
      "Event checklist & timeline",
      "Selected vendor coordination",
      "Event-day schedule support",
      "WhatsApp planning support"
    ]
  },
  {
    id: "gold",
    name: "Gold",
    subtitle: "Signature",
    note: "A more complete planning and coordination experience",
    popular: true,
    includes: [
      "Everything in Silver",
      "Theme & concept guidance",
      "Decor coordination",
      "Vendor follow-up",
      "Detailed event timeline",
      "Event-day coordination"
    ]
  },
  {
    id: "platinum",
    name: "Platinum",
    subtitle: "Luxury",
    note: "For couples who want broader end-to-end support",
    popular: false,
    includes: [
      "Everything in Gold",
      "Full event planning support",
      "Premium vendor coordination",
      "Guest-flow & schedule management",
      "Photography & catering coordination",
      "Dedicated planning support"
    ]
  }
];

/* GOOGLE SHEETS WEB APP */
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxHh1k2lQMCATuM-NPfYYePm_g9tsh6b36-rCUpOjlsVPHHdvoY2KkndMk4M8nDyW4P/exec";

/*
  IMPORTANT:
  If your current Apps Script URL is different, replace the URL above
  with your working /exec URL.
*/

document.addEventListener("DOMContentLoaded", () => {
  setupContactDetails();
  setupServices();
  setupMenu();
  setupBooking();
  setupModal();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function digits(phone) {
  return String(phone).replace(/\D/g, "");
}

function setupContactDetails() {
  const [one, two] = SITE.contacts;

  const p1 = document.getElementById("phone-1");
  const p2 = document.getElementById("phone-2");
  const email = document.getElementById("email-1");

  if (p1) {
    p1.textContent = `${one.name} · ${one.phone}`;
    p1.href = `tel:${one.phone}`;
  }

  if (p2) {
    p2.textContent = `${two.name} · ${two.phone}`;
    p2.href = `tel:${two.phone}`;
  }

  if (email) {
    email.textContent = SITE.email;
    email.href = `mailto:${SITE.email}`;
  }

  const call = document.getElementById("call-link");
  if (call) call.href = `tel:${one.phone}`;

  const wa = document.getElementById("whatsapp-link");
  if (wa) {
    wa.href = `https://wa.me/91${digits(one.phone)}`;
  }

  const ig = document.getElementById("instagram-link");
  const fig = document.getElementById("footer-instagram");
  if (ig) ig.href = SITE.instagram;
  if (fig) fig.href = SITE.instagram;
}

function setupServices() {
  const grid = document.getElementById("service-grid");
  if (!grid) return;

  grid.innerHTML = SERVICES.map((service, index) => `
    <article class="service-card">
      <div class="service-number">0${index + 1}</div>
      <div class="service-icon">${service.icon}</div>
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.short)}</p>
      <div class="service-bottom">
        <div class="service-actions">
          <button type="button" data-service="${index}">Details →</button>
          <a href="${whatsappUrl(service.whatsapp)}" target="_blank" rel="noopener" class="wa-mini">WhatsApp</a>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-service]").forEach(btn => {
    btn.addEventListener("click", () => openService(Number(btn.dataset.service)));
  });

  const select = document.getElementById("service-select");
  if (select) {
    select.innerHTML = `<option value="">Select a service</option>` +
      SERVICES.map(service =>
        `<option value="${escapeHtml(service.title)}">${escapeHtml(service.title)}</option>`
      ).join("");
  }

  setupPackages();
}

function setupPackages() {
  const grid = document.getElementById("package-grid");
  const select = document.getElementById("package-select");
  if (!grid) return;

  grid.innerHTML = PACKAGES.map(pkg => `
    <article class="package-card ${pkg.popular ? "featured" : ""}">
      ${pkg.popular ? '<div class="package-ribbon">MOST POPULAR</div>' : ""}
      <span class="package-level">${escapeHtml(pkg.subtitle)}</span>
      <h3>${escapeHtml(pkg.name)}</h3>
      <p class="package-note">${escapeHtml(pkg.note)}</p>
      <ul>
        ${pkg.includes.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      <div class="package-actions">
        <button type="button" class="btn btn-gold package-book" data-package="${escapeHtml(pkg.name)}">Choose ${escapeHtml(pkg.name)}</button>
        <a class="package-wa" href="${whatsappUrl(`Hi Avalum Naanum, I’m interested in the ${pkg.name} Package.`)}" target="_blank" rel="noopener">WhatsApp →</a>
      </div>
    </article>
  `).join("");

  if (select) {
    select.innerHTML = `<option value="">Select a package</option>` +
      PACKAGES.map(pkg => `<option value="${escapeHtml(pkg.name)}">${escapeHtml(pkg.name)} — ${escapeHtml(pkg.price)}</option>`).join("");
  }

  grid.querySelectorAll(".package-book").forEach(button => {
    button.addEventListener("click", () => {
      const packageName = button.dataset.package;
      if (select) select.value = packageName;
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
      document.getElementById("service-select")?.focus();
    });
  });
}

function openService(index) {
  const service = SERVICES[index];
  const modal = document.getElementById("service-modal");

  document.getElementById("modal-kicker").textContent = "SERVICE";
  document.getElementById("modal-title").textContent = service.title;
  document.getElementById("modal-text").textContent = service.description;
  document.getElementById("modal-price").textContent = service.price;

  const modalWa = document.getElementById("modal-whatsapp");
  if (modalWa) modalWa.href = whatsappUrl(service.whatsapp);

  const serviceSelect = document.getElementById("service-select");
  if (serviceSelect) serviceSelect.value = service.title;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function whatsappUrl(message) {
  const number = digits(SITE.contacts[0].phone);
  return `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
}

function closeModal() {
  const modal = document.getElementById("service-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModal() {
  document.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function setupBooking() {
  const form = document.getElementById("booking-form");
  const note = document.getElementById("booking-note");
  if (!form || !note) return;

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const button = form.querySelector(".submit-btn");
    const originalText = button.innerHTML;

    note.textContent = "Sending your enquiry…";
    note.style.color = "#6e7784";
    button.disabled = true;
    button.innerHTML = "Sending…";

    try {
      const data = new URLSearchParams(new FormData(form));

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: data
      });

      note.textContent = "Thank you — your enquiry has been sent. We’ll be in touch soon.";
      note.style.color = "#24734a";
      form.reset();
    } catch (error) {
      console.error(error);
      note.textContent = "Something went wrong. Please call or WhatsApp us directly.";
      note.style.color = "#b53b3b";
    } finally {
      button.disabled = false;
      button.innerHTML = originalText;
    }
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
