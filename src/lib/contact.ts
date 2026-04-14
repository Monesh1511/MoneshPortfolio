const CONTACT_EMAIL = "moneshdhanasekaren@gmail.com";
const CONTACT_SUBJECT = "Portfolio Inquiry";
const CONTACT_BODY = "Hi Monesh,\n\nI would like to connect regarding...";

export const CONTACT_MAILTO_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}&body=${encodeURIComponent(CONTACT_BODY)}`;

export const CONTACT_GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(CONTACT_SUBJECT)}&body=${encodeURIComponent(CONTACT_BODY)}`;