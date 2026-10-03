import { getPermalink } from './utils/permalinks';
import { EMAIL, EMAIL_HREF, WHATSAPP_HREF } from './utils/contact';

export const headerData = {
  links: [
    { text: 'Utama', href: getPermalink('/') },
    { text: 'MyInvois Helper', href: getPermalink('/myinvois-helper') },
    { text: 'Hubungi', href: getPermalink('/hubungi') },
  ],
  actions: [{ text: 'Emel Kami', href: EMAIL_HREF, variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Laman',
      links: [
        { text: 'Utama', href: getPermalink('/') },
        { text: 'MyInvois Helper', href: getPermalink('/myinvois-helper') },
        { text: 'Hubungi', href: getPermalink('/hubungi') },
        { text: 'Privasi', href: getPermalink('/privasi') },
        { text: 'Terma', href: getPermalink('/terma') },
      ],
    },
    {
      title: 'Hubungi',
      links: [{ text: EMAIL, href: EMAIL_HREF }, ...(WHATSAPP_HREF ? [{ text: 'WhatsApp', href: WHATSAPP_HREF }] : [])],
    },
  ],
  secondaryLinks: [
    { text: 'Terma', href: getPermalink('/terma') },
    { text: 'Privasi', href: getPermalink('/privasi') },
  ],
  socialLinks: [
    { ariaLabel: 'Emel', icon: 'tabler:mail', href: EMAIL_HREF },
    ...(WHATSAPP_HREF ? [{ ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: WHATSAPP_HREF }] : []),
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/dewatagiri/myinvois-helper' },
  ],
  footNote: `© ${new Date().getFullYear()} PintuNiaga · Automasi AI untuk PKS Malaysia`,
};
