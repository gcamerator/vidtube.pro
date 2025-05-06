// MidSoune
// https://web2.topcinema.cam/

const headers = {'Referer': 'https://vidtube.pro/', 'User-Agent': 'Mozilla/5.0'};
const url = "https://vidtube.pro/d/jv5u9xir1v7r.html";
const res = await VidtubeDownloads(url);
const res = await fetch(res.directLink[0], { headers });
const buffer = await res.arrayBuffer();
await conn.sendMessage(m.chat, {  document:  Buffer.from(buffer),  fileName: 'video.mp4',  mimetype: 'video/mp4',}, { quoted: null });
