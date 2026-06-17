// Single source of truth for GitHub repo references.
// When the hosting org is finalised, change ORG/REPO_NAME here and every link
// + clone command across the site updates — no per-page edits.
export const ORG = 'open-orcha';
export const REPO_NAME = 'orcha';
export const REPO = `https://github.com/${ORG}/${REPO_NAME}`;
export const REPO_SSH = `git@github.com:${ORG}/${REPO_NAME}.git`;

// Mac desktop app release artifacts (published GitHub Release on the code repo).
// Bump APP_VERSION here when a new release is cut and the URLs follow automatically.
export const APP_VERSION = '1.0.0';
export const RELEASE_TAG = `v${APP_VERSION}`;
export const RELEASE_URL = `${REPO}/releases/tag/${RELEASE_TAG}`;
export const MAC_DMG_URL = `${REPO}/releases/download/${RELEASE_TAG}/Orcha-${APP_VERSION}-universal.dmg`;
export const MAC_ZIP_URL = `${REPO}/releases/download/${RELEASE_TAG}/Orcha-${APP_VERSION}-universal-mac.zip`;
