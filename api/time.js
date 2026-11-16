// Vercel Serverless Function：GET /api/time
const TIME_ZONE = 'Asia/Shanghai';

module.exports = (req, res) => {
  const now = new Date();
  const time = now.toLocaleString('zh-CN', {
    timeZone: TIME_ZONE,
    hour12: false,
  });

  res.writeHead(200, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });

  res.end(
    JSON.stringify({
      time,
      formatted: time,
      timestamp: now.toISOString(),
      timezone: TIME_ZONE,
    })
  );
};
