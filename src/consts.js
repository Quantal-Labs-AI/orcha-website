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
