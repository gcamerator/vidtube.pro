import fetch from 'node-fetch';
import * as cheerio from "cheerio";

let a = await VidtubeDownloads("https://vidtube.pro/d/jv5u9xir1v7r.html")

async function VidtubeDownloads(url) {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);

  const downloads = [];

  $('section.section .container .row.mb-3 a.btn').each((_, el) => {
    const link = 'https://vidtube.pro' + $(el).attr('href')?.trim();
    if (link) {
      downloads.push(link);
    }
  });

  const Dlink = [];

  for (const dlUrl of downloads) {
    try {
      const ress = await fetch(dlUrl);
      const html2 = await ress.text();
      const $$ = cheerio.load(html2);

const directLink = $$('section.section .container .mb-4 a').attr('href')?.trim();
const sizeText = $$('section.section .container .mb-3').text().trim();
const match = sizeText.match(/([\d.]+\s*(?:MB|GB|KB))/i);
const size = match ? match[1] : null;

      if (directLink) {
        Dlink.push({directLink, size});
      }
    } catch (err) {
      console.error(`فشل في تحميل: ${dlUrl}`, err);
    }
  }

  return Dlink;
}
