// Code repo base — used only to build the Mac app download URL below.
// (No user-facing "GitHub" links anywhere on the site; install is via Homebrew.)
export const ORG = 'open-orcha';
export const REPO_NAME = 'orcha';
export const REPO = `https://github.com/${ORG}/${REPO_NAME}`;

// Homebrew install (single source of truth for the install pages).
export const BREW_TAP = 'open-orcha/orcha';
export const BREW_INSTALL = 'brew install open-orcha/orcha/orcha';

// Mac desktop app release artifacts (published GitHub Release on the code repo).
// Bump APP_VERSION here when a new release is cut and the URLs follow automatically.
export const APP_VERSION = '1.0.1';
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
export const CF_BEACON_TOKEN = '';

// GitHub Releases API for the code repo — the Stats page reads live download
// counts from here (public, no auth). Mac-app assets live on the `v*` releases;
// the orcha CLI (what `brew install` pulls) lives on the `cli-v*` releases, so a
// CLI asset download is our best available proxy for a Homebrew tap install.
export const RELEASES_API = `https://api.github.com/repos/${ORG}/${REPO_NAME}/releases?per_page=30`;
// Where to watch site-visit numbers (Cloudflare keeps these; they can't be shown
// on a public page without exposing an account API token).
export const CF_DASHBOARD_URL = 'https://dash.cloudflare.com/?to=/:account/web-analytics';
