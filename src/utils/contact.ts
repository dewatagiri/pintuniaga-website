import { CONTACT } from 'astrowind:config';

/** Email address from `contact.email` in src/config.yaml. */
export const EMAIL = CONTACT.email;
export const EMAIL_HREF = `mailto:${CONTACT.email}`;

/** WhatsApp link, or `null` when `contact.whatsapp` in src/config.yaml is empty. */
export const WHATSAPP_HREF: string | null = CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}` : null;
