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

### Minimum Requirements (สำหรับรันผ่าน API Cloud เช่น OpenAI)
- **CPU:** 2 Cores
- **RAM:** 4 GB
- **Storage:** พื้นที่ว่างอย่างน้อย 10 GB (สำหรับ Docker Images)
- **Network:** อินเทอร์เน็ตความเร็วคงที่ (สำหรับยิงโหลด API ข้ามคลาวด์)

### Recommended Requirements (สำหรับรันโมเดลภายในเครื่อง/โฮสต์เอง)
- **GPU:** NVIDIA RTX 3060 ขึ้นไป (VRAM 8GB+)
- **RAM:** 16 GB

---

## 🛠️ Instructions

### 1. Clone repo
เปิด Terminal บนเครื่องของคุณแล้วรันคำสั่งเพื่อดึงโปรเจกต์ลงมา:
```bash
git clone [https://github.com/starpreeda1234/multi-agent-debate.git](https://github.com/starpreeda1234/multi-agent-debate.git)
cd multi-agent-debate