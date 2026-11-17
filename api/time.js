// Vercel Serverless Function：GET /api/time
const TIME_ZONE = "Asia/Shanghai";

function formatTime(d) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

module.exports = (req, res) => {
  const now = new Date();

  res.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });

  res.end(
    JSON.stringify({
      serverTime: formatTime(now),
      timestamp: now.toISOString(),
      timezone: TIME_ZONE,
    })
  );
};
