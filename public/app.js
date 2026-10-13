/**
 * 前端脚本：
 * 每 1 秒请求一次 /api/time 接口，获取并展示当前服务器时间
 */

// 获取并展示服务器时间
async function fetchServerTime() {
  try {
    const response = await fetch("/api/time");
    const data = await response.json();

    // 将接口返回的时间显示到页面上
    document.getElementById("server-time").textContent = data.time;
  } catch (error) {
    // 请求失败时给出提示
    document.getElementById("server-time").textContent =
      "获取服务器时间失败：" + error.message;
  }
}

// 页面加载后立即获取一次
fetchServerTime();

// 之后每 1 秒自动刷新一次，保证时间始终是最新的服务器时间
setInterval(fetchServerTime, 1000);
