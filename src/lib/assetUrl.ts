// Ensures asset URLs are absolute so external hosts (e.g. SiteGround)
// can load them from the Lovable CDN.
const ASSET_BASE = "https://cherishme.lovable.app";

export const assetUrl = (a: { url: string }): string =>
  a.url.startsWith("http") ? a.url : `${ASSET_BASE}${a.url}`;
