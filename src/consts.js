// Code repo base — used for the Mac app download URL and the public source link.
export const ORG = 'open-orcha';
export const REPO_NAME = 'orcha';
export const REPO = `https://github.com/${ORG}/${REPO_NAME}`;

// Zenodo archive — permanent DOI for citing Orcha (matches CITATION.cff in the code repo).
// This is the "concept" DOI: it always resolves to the latest archived release.
export const ZENODO_DOI = '10.5281/zenodo.20740087';
export const ZENODO_DOI_URL = `https://doi.org/${ZENODO_DOI}`;

// Mac desktop app release artifacts (published GitHub Release on the code repo).
// Bump APP_VERSION here when a new release is cut and the URLs follow automatically.
// Since 1.2.1 the app ships as an Apple Silicon (arm64) build named Embodent-<v>-arm64
// (no universal/Intel build); 1.1.1 and earlier were Orcha-<v>-universal.
export const APP_VERSION = '2.1.0';
export const RELEASE_TAG = `v${APP_VERSION}`;
export const RELEASE_URL = `${REPO}/releases/tag/${RELEASE_TAG}`;
export const MAC_DMG_URL = `${REPO}/releases/download/${RELEASE_TAG}/Embodent-${APP_VERSION}-arm64.dmg`;
export const MAC_ZIP_URL = `${REPO}/releases/download/${RELEASE_TAG}/Embodent-${APP_VERSION}-arm64-mac.zip`;

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

// Release maintainers can disable the download at build time if the asset is withdrawn.
// No client-side GitHub availability probe runs on the installation page.
export const MAC_DOWNLOAD_AVAILABLE = true;
export const TERMINAL_GUIDE_URL = `${REPO}/blob/${RELEASE_TAG}/README.md#option-2--the-command-line-with-uv-macos`;
export const LIFECYCLE_GUIDE_URL = `${REPO}/blob/${RELEASE_TAG}/README.md#lifecycle`;
