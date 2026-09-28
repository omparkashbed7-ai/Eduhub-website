/* ============================================================
   ADMIN CONFIG — edit the values below, no coding needed
   ============================================================ */

// Contact details
const WHATSAPP_NUMBER = "923154487814"; // country code + number, no + or leading 0
const EMAIL_ADDRESS = "Eduhub.education7@gmail.com";

// Social media links — add, remove, or edit any line.
// "label" is the short text shown in the circle (2-3 letters).
const SOCIAL_LINKS = [
  { label: "FB", url: "https://facebook.com/" },
  { label: "IG", url: "https://instagram.com/" },
  { label: "LI", url: "https://linkedin.com/" },
];

// Testimonials — example content, replace with real ones anytime.
const TESTIMONIALS = [
  { quote: "EduHub found us a maths tutor within a day. The whole process was just a WhatsApp chat.", who: "Ayesha K.", role: "Parent" },
  { quote: "I needed help structuring my final year project and EduHub connected me with someone who actually knew the subject.", who: "Hamza R.", role: "University Student" },
  { quote: "Simple and quick — no forms, no app. Just told them what I needed and got matched with a tutor.", who: "Sana M.", role: "Student" },
];

/* ============================================================
   No need to edit below this line
   ============================================================ */
const waLink = "https://wa.me/" + WHATSAPP_NUMBER;
document.querySelectorAll(".wa-link, #wa-nav").forEach(el => el.href = waLink);
document.getElementById("email-btn").href = "mailto:" + EMAIL_ADDRESS;

const socialEl = document.getElementById("social-links");
SOCIAL_LINKS.forEach(s => {
  const a = document.createElement("a");
  a.href = s.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = s.label;
  socialEl.appendChild(a);
});

const testiEl = document.getElementById("testi-track");
TESTIMONIALS.forEach(t => {
  const div = document.createElement("div");
  div.className = "testi";
  div.innerHTML = `<p class="quote">"${t.quote}"</p><p class="who">${t.who}</p><p class="role">${t.role}</p>`;
  testiEl.appendChild(div);
});