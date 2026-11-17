/**
 * Hello World 网站 - 本地 Express 服务器入口
 *
 * 功能：
 * 1. 托管 public 目录下的静态页面（index.html / style.css / app.js）
 * 2. 提供 /api/time 接口，返回当前服务器时间与进程启动时间（JSON 格式）
 *
 * 说明：部署到 Vercel 时，请求由 api/index.js 与 api/time.js 两个
 * Serverless Function 承接；本文件用于本地 `npm start` 调试。
 */
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const START_TIME = new Date();

function formatTime(d) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

const app = express();

// 将 public 目录托管为静态资源目录
app.use(express.static(path.join(__dirname, "public")));

// 接口：返回当前服务器时间与启动时间
app.get("/api/time", (req, res) => {
  res.json({
    currentTime: formatTime(new Date()),
    startTime: formatTime(START_TIME),
    timestamp: new Date().toISOString(),
  });
});

// 启动本地服务器并监听端口
app.listen(PORT, () => {
  console.log(`✅ 服务器已启动：http://localhost:${PORT}`);
  console.log(`   按 Ctrl + C 可以停止服务器`);
});
