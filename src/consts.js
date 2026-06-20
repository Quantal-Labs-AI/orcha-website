// Code repo base — used for the Mac app download URL and the public source link.
export const ORG = 'open-orcha';
export const REPO_NAME = 'orcha';
export const REPO = `https://github.com/${ORG}/${REPO_NAME}`;

// Homebrew install (single source of truth for the install pages).
export const BREW_TAP = 'open-orcha/orcha';
export const BREW_INSTALL = 'brew install open-orcha/orcha/orcha';

// Zenodo archive — permanent DOI for citing Orcha (matches CITATION.cff in the code repo).
// This is the "concept" DOI: it always resolves to the latest archived release.
export const ZENODO_DOI = '10.5281/zenodo.20740087';
export const ZENODO_DOI_URL = `https://doi.org/${ZENODO_DOI}`;

// Mac desktop app release artifacts (published GitHub Release on the code repo).
// Bump APP_VERSION here when a new release is cut and the URLs follow automatically.
export const APP_VERSION = '1.1.1';
export const RELEASE_TAG = `v${APP_VERSION}`;
export const RELEASE_URL = `${REPO}/releases/tag/${RELEASE_TAG}`;
export const MAC_DMG_URL = `${REPO}/releases/download/${RELEASE_TAG}/Orcha-${APP_VERSION}-universal.dmg`;
export const MAC_ZIP_URL = `${REPO}/releases/download/${RELEASE_TAG}/Orcha-${APP_VERSION}-universal-mac.zip`;

// ── Analytics ────────────────────────────────────────────────────────────────
// Cloudflare Web Analytics beacon token. Privacy-friendly, cookieless, free —
// no consent banner needed. PASTE the token from your Cloudflare dashboard here
// (Cloudflare → Web Analytics → add openorcha.io → copy the token). It is NOT a
// secret: Cloudflare embeds it in the public page anyway. Until it is filled in
// the snippet simply does not render, so the site keeps working as-is.
export const CF_BEACON_TOKEN = '874beb3c5c7f4f08be7582312b3ccdd9';

// GitHub Releases API for the code repo — the Stats page reads the live Mac-app
// download count from here (public, no auth). Mac-app assets (.dmg/.zip) live on
// the `v*` releases and ARE downloaded as files, so their download_count is real.
export const RELEASES_API = `https://api.github.com/repos/${ORG}/${REPO_NAME}/releases?per_page=30`;
// Where to watch site-visit numbers (Cloudflare keeps these; they can't be shown
// on a public page without exposing an account API token).
export const CF_DASHBOARD_URL = 'https://dash.cloudflare.com/?to=/:account/web-analytics';
// CLI installs can't be counted live: `brew install` clones the tap repo at a git
// tag, it does NOT download a release file, so release download_count stays 0 no
// matter how many people install (per HomebrewAgent). The closest available signal
// is the tap repo's Traffic → Clones (admin-only, ~14-day rolling, approximate).
export const HOMEBREW_TAP_TRAFFIC_URL = `https://github.com/${ORG}/homebrew-orcha/graphs/traffic`;
