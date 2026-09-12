import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, extname } from 'node:path';

const ORIGIN = 'https://angelic-articles.com';
const ROOT_ASSETS = [
  '/angel-writer.png',
  '/logo-angelic-articles.png',
  '/newsletter-header.png',
  '/shop-banner.png',
  '/images/mad-experiments-001.png',
];

const IMAGE_RE = /(?:src|content)=["']([^"']+\.(?:png|jpe?g|webp|gif|svg)(?:\?[^"']*)?)["']/gi;
const LINK_RE = /href=["']([^"'#]+)["']/gi;

const normalizeUrl = (value) => {
  try {
    const url = new URL(value, ORIGIN);
    if (url.origin !== ORIGIN) return null;
    return url;
  } catch {
    return null;
  }
};

const targetPath = (url) => {
  const path = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  if (path === 'angel-writer.png' || path === 'logo-angelic-articles.png') return `brand/${path}`;
  if (path === 'newsletter-header.png') return `newsletter/${path}`;
  if (path === 'shop-banner.png') return `brand/${path}`;
  if (path.startsWith('images/')) return path;
  return `misc/${path}`;
};

const fetchText = async (url) => {
  const response = await fetch(url, { headers: { 'user-agent': 'AngelicAssetsSync/1.0' } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
};

const download = async (url) => {
  const response = await fetch(url, { headers: { 'user-agent': 'AngelicAssetsSync/1.0' } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const destination = targetPath(url);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  console.log(`saved ${destination}`);
};

const pages = new Set([new URL('/', ORIGIN), new URL('/library/', ORIGIN)]);
try {
  const sitemap = await fetchText(`${ORIGIN}/sitemap-index.xml`).catch(() => fetchText(`${ORIGIN}/sitemap.xml`));
  for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = normalizeUrl(match[1]);
    if (url && (url.pathname === '/' || url.pathname.startsWith('/articles/') || url.pathname.startsWith('/library'))) pages.add(url);
  }
} catch (error) {
  console.warn(`sitemap unavailable: ${error.message}`);
}

const images = new Map();
for (const path of ROOT_ASSETS) {
  const url = new URL(path, ORIGIN);
  images.set(url.pathname, url);
}

for (const page of pages) {
  try {
    const html = await fetchText(page);
    for (const match of html.matchAll(IMAGE_RE)) {
      const url = normalizeUrl(match[1]);
      if (url) images.set(url.pathname, url);
    }
    for (const match of html.matchAll(LINK_RE)) {
      const url = normalizeUrl(match[1]);
      if (url && ['.png','.jpg','.jpeg','.webp','.gif','.svg'].includes(extname(url.pathname).toLowerCase())) images.set(url.pathname, url);
    }
  } catch (error) {
    console.warn(`skip ${page}: ${error.message}`);
  }
}

for (const url of images.values()) {
  try {
    await download(url);
  } catch (error) {
    console.warn(`failed ${url}: ${error.message}`);
  }
}

console.log(`processed ${images.size} public image URLs`);
