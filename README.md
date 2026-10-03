# PintuNiaga website

Company website for **PintuNiaga** — automasi AI untuk PKS Malaysia — published at https://pintuniaga.my.
Built with [Astro](https://astro.build) from the [AstroWind](https://github.com/onwidget/astrowind) template (MIT, see `LICENSE.md`).

## Pages

| Path               | Page            |
| ------------------ | --------------- |
| `/`                | Utama           |
| `/myinvois-helper` | MyInvois Helper |
| `/hubungi`         | Hubungi         |
| `/privasi`         | Privasi         |

## Settings

All contact details live in `src/config.yaml` under `contact`:

- `email` — shown on every page.
- `whatsapp` — international format, digits only (e.g. `60123456789`). Leave it `''` to hide every
  WhatsApp button and link. When filled, a floating WhatsApp button appears on every page.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local preview at http://localhost:4321
npm run build    # build the static site into dist/
```

## Deploying on Render (Static Site)

- Build command: `npm install && npm run build`
- Publish directory: `dist`
