# 🤖 Multi Agent Debate Platform v1.0 | ระบบดีเบตอัจฉริยะ

แพลตฟอร์มเวทีดีเบตจำลองอัจฉริยะที่ขับเคลื่อนด้วยระบบ Multi-Agent AI (LLMs) โดยรองรับการทำงานร่วมกันระหว่างฝั่ง Backend (Python & Gradio) และ Frontend Node.js Controller อย่างสมบูรณ์แบบผ่านระบบ Docker Container พร้อมปลดล็อกโครงสร้างเน็ตเวิร์กสำหรับรันบน Cloud Instance

---

## 📌 Table of Contents
1. [Features](#-features)
2. [Hardware Requirements](#-hardware-requirements)
3. [Instructions](#-instructions)
   - [1. Clone Repository](#1-clone-repository)
   - [2. Install / Run](#2-install--run)
   - [3. Open the Web App](#3-open-the-web-app)
   - [4. For Public Link](#4-for-public-link)

---

## 🚀 Features
- **AI Multi-Agent Debate Arena:** จำลองเอเจนต์ AI ร่วมถกเถียง คัดค้าน และวิเคราะห์ประเด็นตามหัวข้อและรอบที่กำหนด
- **Real-time Streaming:** อินเทอร์เฟซอัปเดตสถานะและกล่องสนทนาแบบเรียลไทม์ผ่าน Proxy Controller
- **Gradio 5 Integration:** ปลอดภัยกว่าด้วยระบบ Sandbox รุ่นล่าสุด พร้อมแก้บั๊ก Type Error ในการประมวลผล Schema ภายใน
- **Dockerized Environment:** ติดตั้งและแยกส่วนการทำงานของส่วนควบคุมหน้าบ้าน และเครื่องยนต์หลังบ้านชัดเจน

---

## 💻 Hardware Requirements

### Minimum Requirements (สำหรับรับผ่าน API Cloud เช่น OpenAI)
- **CPU:** 2 Cores
- **RAM:** 4 GB
- **Storage:** พื้นที่ว่างอย่างน้อย 10 GB (สำหรับ Docker Images)
- **Network:** อินเทอร์เน็ตความเร็วคงที่ (สำหรับยิงโหลด API ข้ามคลาวด์)

### Recommended Requirements (สำหรับรันโมเดลภายในเครื่อง/โฮสต์เอง)
- **GPU:** NVIDIA RTX 3060 ขึ้นไป (VRAM 8GB+)
- **RAM:** 16 GB

---
🛠️ Instructions
1. Clone repo

เปิด Terminal บนเครื่องของคุณแล้วรันคำสั่งเพื่อดึงโปรเจกต์ลงมา:
Bash

git clone https://github.com/starpreeda1234/multi-agent-debate.git
cd multi-agent-debate

2. Install / Run

ก่อนเริ่มรัน ตรวจสอบให้มั่นใจว่าเครื่องของคุณได้ติดตั้ง Docker และ Docker Compose เรียบร้อยแล้ว
🐧 Linux (Ubuntu / Alibaba Cloud / AWS)
Bash

# สั่งบิวด์และรันตู้คอนเทนเนอร์แบบ Background Mode
sudo docker-compose up --build -d

# ตรวจสอบสถานะว่าตู้รันขึ้นครบถ้วน (Up)
sudo docker-compose ps

🍏 macOS (Intel & Apple Silicon)
Bash

# ตรวจสอบว่าเปิด Docker Desktop อยู่ จากนั้นรันคำสั่ง:
docker-compose up --build -d

# เช็กสถานะการทำงาน
docker-compose ps

🪟 Windows
PowerShell

# เปิด PowerShell หรือ Command Prompt (cmd) ในฐานะ Administrator แล้วรัน:
docker-compose up --build -d

# เช็กสถานะการทำงาน
docker-compose ps

3. Open the web app

เมื่อตู้คอนเทนเนอร์เปิดทำงานสำเร็จ คุณสามารถเข้าใช้งานผ่านหน้าเบราว์เซอร์ได้ทันที:

    Local Machine: เข้าผ่านลิงก์ http://localhost:3001

    Cloud Instance: เข้าผ่าน Public IP ของคุณ เช่น http://47.84.233.154:3001

4. For Public Link

หากต้องการให้ Gradio เจาะระบบทำ Share Link สาธารณะ (gradio.live) ส่งออกไปข้างนอกโดยตรง ให้แก้ไขที่ท้ายไฟล์ backend/app.py:
Python

# ปรับแก้ไขในฟังก์ชัน .launch() เพื่อเปิดสิทธิ์แชร์สาธารณะ
demo.queue().launch(
    server_name="0.0.0.0", 
    server_port=7860,
    share=True
)

จากนั้นสั่งรันเพื่อทำการ Rebuild คอนเทนเนอร์ใหม่อีกครั้ง:
Bash

sudo docker-compose up --build -d