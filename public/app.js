/**
 * 前端脚本：
 * 每 5 秒请求一次 /api/time 接口，刷新页面上显示的服务器时间
 */

async function refreshTime() {
  try {
    const res = await fetch("/api/time");
    const data = await res.json();
    document.getElementById("serverTime").textContent = data.serverTime;
  } catch (e) {
    // 接口暂时不可用时保留原显示，不报错
  }
}

// 页面加载后立即获取一次
refreshTime();

// 之后每 5 秒自动刷新一次
setInterval(refreshTime, 5000);
