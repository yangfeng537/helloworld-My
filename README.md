# Hello World 网站

我的第一个 AI 开发的网站。

## 本地运行

```bash
npm install
npm start
```

浏览器访问 http://localhost:3000

## 目录结构

- `server.js`：本地 Express 服务器入口
- `api/index.js`：Vercel 首页 Serverless Function
- `api/time.js`：Vercel `/api/time` 时间接口
- `public/`：静态页面（index.html / style.css / app.js）
- `vercel.json`：Vercel 路由配置
