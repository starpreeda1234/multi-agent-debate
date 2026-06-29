const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;
// URL ของ Docker container ที่รัน Python Gradio Engine
const DOCKER_ENGINE_URL = process.env.DOCKER_ENGINE_URL || 'http://localhost:7860';

console.log(`[Node Control] Target Engine Container mapped to: ${DOCKER_ENGINE_URL}`);

// สุขภาพและสถานะการเชื่อมต่อระหว่าง Node Node ไปยัง Docker Node
app.get('/node-status', (req, res) => {
    res.json({
        status: "online",
        node_version: "v1.0.0",
        target_engine: DOCKER_ENGINE_URL,
        timestamp: new Date()
    });
});

// ทำ Reverse Proxy ส่งต่อไปที่ Python Gradio Engine พร้อมรองรับ WebSocket (สตรีมมิ่งข้อความ)
app.use('/', createProxyMiddleware({
    target: DOCKER_ENGINE_URL,
    changeOrigin: true,
    ws: true, // สำคัญมาก: รองรับสตรีมแบบ Real-time ของปุ่ม Stop/Start ใน Gradio
    logger: console
}));

app.listen(PORT, () => {
    console.log(`🚀 Control Node is running dynamically at http://localhost:${PORT}`);
});