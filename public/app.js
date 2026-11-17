/**
 * 前端脚本：
 * 每 1 秒请求一次 /api/time 接口，获取当前服务器时间与启动时间并展示
 */

async function fetchServerTime() {
  try {
    const response = await fetch("/api/time");
    const data = await response.json();

    document.getElementById("server-time").textContent = data.currentTime;
    document.getElementById("start-time").textContent =
      "服务器启动时间：" + data.startTime;
  } catch (error) {
    document.getElementById("server-time").textContent = "加载中…";
  }
}

// 页面加载后立即获取一次
fetchServerTime();

// 之后每 1 秒自动刷新一次
setInterval(fetchServerTime, 1000);
