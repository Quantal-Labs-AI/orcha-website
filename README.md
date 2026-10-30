# Embodent website

The public website for **Embodent (formerly Orcha)**, built with Astro and hosted
on GitHub Pages at https://openorcha.io.

## Pages

- `/`: product introduction and features.
- `/installation`: Apple Silicon Mac download, setup, terminal guide, stopping and backup.
- `/usage`: workflows, task approvals, collaboration and review.
- `/attribution`: source, licenses and the unchanged Orcha citation.
- `/stats`: unlisted public Mac release download counts, not users or installations.

## Develop and preview

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4330
npm run build
npm run preview -- --host 127.0.0.1 --port 4330
```

The preview commands stay in the foreground. Open http://localhost:4330/ while
one is running. `npm run preview` serves the static `dist/` output.

## Design and behavior

Implements Dana's approved Embodent design in
[the design handoff](https://github.com/open-orcha/orcha/issues/389).
Halo E brand assets and licenses are in `public/brand/`; Inter font files are
bundled locally from `src/assets/`. Theme tokens live in `src/styles/tokens.css`.
The shared layout renders navigation, metadata and content at build time.
JavaScript adds the phone menu, appearance preference and copy feedback.
Without JavaScript, navigation and all guide content remain available.

Dark is the default. Light and System choices are stored only in this browser.
The existing public Cloudflare beacon configuration is retained.
The workshop illustration contains invented example data, with a visible caption.
Old guide anchors remain available; the old videos remain stored but unlinked.

## Release updates

Keep release version, artifact destinations and download availability in
`src/consts.js`. If a release artifact is withdrawn, set
`MAC_DOWNLOAD_AVAILABLE` to `false` and rebuild; the page then offers the release
list instead of an enabled download link. Do not probe GitHub availability on
every installation-page visit.

The advertised Mac release and the terminal development install are distinct.
The older Homebrew formula is not the recommended setup for the current runtime.
The CLI and repository retain the `orcha` name; the citation title and DOI stay unchanged.

## Publication

A push to `main` runs `.github/workflows/deploy.yml` and publishes to GitHub Pages.
Implementation branches and local builds do not deploy. Kedar reviews the local
preview before the separate publication step opens a pull request; only a human
may merge. This implementation does not authorize publication.

`public/CNAME` retains `openorcha.io`. `astro.config.mjs` keeps that canonical
origin and `/` as the base; for project Pages, set the base to the repository path.
All local links and assets respect the configured base.
