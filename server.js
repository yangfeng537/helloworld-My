/**
 * Hello World 网站 - 服务器入口文件
 *
 * 功能：
 * 1. 托管 public 目录下的静态页面（index.html / style.css / app.js）
 * 2. 提供 /api/time 接口，返回当前服务器时间（JSON 格式）
 */
const express = require("express");
const path = require("path");

// 创建 Express 应用实例
const app = express();

// 端口号：若环境变量 PORT 未设置，则默认使用 3000
const PORT = process.env.PORT || 3000;

// 将 public 目录托管为静态资源目录（浏览器可直接访问其中的文件）
app.use(express.static(path.join(__dirname, "public")));

// 接口：返回当前服务器时间（JSON 格式）
app.get("/api/time", (req, res) => {
  const serverTime = new Date();

  res.json({
    time: serverTime.toLocaleString("zh-CN", { hour12: false }),
    timestamp: serverTime.toISOString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
});

// 启动服务器并监听端口
app.listen(PORT, () => {
  console.log(`✅ 服务器已启动：http://localhost:${PORT}`);
  console.log(`   按 Ctrl + C 可以停止服务器`);
});
