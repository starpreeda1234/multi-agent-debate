# 🤖 Multi Agent Debate Platform v1.0 | ระบบดีเบตอัจฉริยะ
"เปลี่ยนการระดมสมองแบบเดิม ๆ สู่มิติใหม่! แพลตฟอร์มจำลองเวทีดีเบตอัจฉริยะด้วยขุมพลัง AI เปิดโอกาสให้สุดยอดสมองกลร่วมถกเถียง คัดค้าน และวิเคราะห์ไอเดียในทุกมิติแบบเรียลไทม์ พร้อมติดตั้งและเปิดใช้งานได้ง่าย"

<p align="center">
  <img width="500" height="300" alt="Screenshot 2026-06-29 235950" src="https://github.com/user-attachments/assets/ebaf61fd-4360-4307-a53e-f6f52634dd86" /><br/>
  <b>หน้าเวที</b>
</p>

<p align="center">
  <img width="500" height="300" alt="Screenshot 2026-06-30 000206" src="https://github.com/user-attachments/assets/ea7f910a-1705-41e5-b31c-4481a5aacb4e" /><br/>
  <b>การจัดการตัว Agent AI</b>
</p>
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
📝 Customizable Topics | ตั้งหัวข้อและปรับเปลี่ยนประเด็นได้อย่างอิสระ
สามารถกำหนด หัวข้อ แก้ไข หรือปรับเปลี่ยนประเด็นที่จะนำมาดีเบตถกเถียงกันได้อย่างยืดหยุ่นตามความต้องการ


🤖 Universal AI Model Support | รองรับโมเดล AI ชั้นนำจากทุกค่ายจากผู้ให้บริการชั้นนำระดับโลกอย่างไร้ข้อจำกัด


👥 Unlimited AI Agents |เพิ่มหรือลดจำนวนผู้ร่วมดีเบตได้ไม่จำกัด
จัดเวทีใหญ่แค่ไหนก็ได้ สามารถเพิ่มหรือปรับลดจำนวนเอเจนต์ AI ที่จะลงสนามมาประชันไอเดียได้อย่างอิสระ


🎭 Custom Persona & Roles | กำหนดบทบาทตัวละครได้อย่างหลากหลาย จำลองสถานการณ์สมจริงด้วยการกำหนดบทบาทให้ AI เป็นได้ทั้ง นักวิชาการ, ผู้พิพากษา, อัยการ, ข้าราชการ, พ่อค้าแม่ค้า, เกษตรกร, ทหาร, ตำรวจ, นักการเมือง หรือนักวิทยาศาสตร์ ได้อย่างแนบเนียน

⏳ Flexible Rounds & Length | ถกเถียงเป็นรอบ เลือกความสั้น-ยาวได้ตามใจ ควบคุมเวลาและเนื้อหาได้เต็มที่ โดยแบ่งการโต้ตอบเป็นรอบ ๆ ไม่จำกัดจำนวนรอบ พร้อมเลือกได้ว่าจะให้ถกเถียงแบบสรุปสั้นกระชับหรือวิเคราะห์ยาวเจาะลึก

💾 Smart Data Export | บันทึกและส่งออกข้อมูลการดีเบตได้ทันที ไม่พลาดทุกไอเดียสำคัญด้วยระบบจัดเก็บข้อมูลการสนทนาโต้ตอบทั้งหมด ออกมาเป็นไฟล์ตระกูลข้อความ (Text) หรือไฟล์ตารางคำนวณ (Excel/XLS) เพื่อนำไปใช้งานต่อได้ง่าย

☁️ Flexible Deployment | รองรับการติดตั้งทั้งบนคลาวด์และในเครื่องส่วนตัว เลือกติดตั้งใช้งานได้ตามสะดวก ไม่ว่าจะรันระบบบน Cloud Server ประสิทธิภาพสูง หรือจะติดตั้งแบบ Self-Host ภายในเครื่องของคุณเอง

💻 Cross-Platform Compatibility | ใช้งานได้สมบูรณ์แบบทุกระบบปฏิบัติการ ตัวระบบออกแบบมาให้เป็นมิตรและรองรับการทำงานได้อย่างลื่นไหลทั้งบนระบบ Windows, macOS และ Linux

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
## 🛠️ Instructions
### 1. Clone repo

เปิด Terminal บนเครื่องของคุณแล้วรันคำสั่งเพื่อดึงโปรเจกต์ลงมา:

git clone https://github.com/starpreeda1234/multi-agent-debate.git

cd multi-agent-debate

### 2. Install / Run


🐧 Linux (Ubuntu / Alibaba Cloud / AWS)

sudo docker-compose up --build -d
 
sudo docker-compose ps

🍏 macOS (Intel & Apple Silicon)


docker-compose up --build -d

docker-compose ps

🪟 Windows

docker-compose up --build -d

docker-compose ps

### 3. Open the web app

Local Machine:  http://localhost:3001

Cloud : Public IP ของคุณ เช่น http://xx.xx.xxx.xxx:3001
