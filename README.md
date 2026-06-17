# Orcha website

The public marketing + docs site for **Orcha** — human-authoritative multi-agent
orchestration. Built with [Astro](https://astro.build/) and deployed to GitHub Pages.

Live domain (once published): **https://openorcha.io**

## Pages

| Page | Status |
|---|---|
| Landing / intro (`/`) | live content |
| Installation Guide (`/installation`) | coming soon stub |
| Usage Guide (`/usage`) | coming soon stub |
| Open Source Attribution (`/attribution`) | coming soon stub |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the build locally
```

## Brand assets

`public/orca-mark.svg` and `public/orca-icon.png` are copied from the Orcha app
icon (`desktop/resources/` in the main repo). The palette in
`src/styles/global.css` is derived from that mark.

## Deploying

Push to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. **Pages must be enabled first**
(Settings → Pages → Source: *GitHub Actions*). The `public/CNAME` file points the
site at the `openorcha.io` apex domain — configure the matching DNS records with
your registrar before relying on it.
