FROM python:3.10-slim

WORKDIR /app

# ติดตั้งระบบพื้นฐานที่จำเป็น
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# คัดลอกและติดตั้ง Dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# คัดลอกโค้ดแอปพลิเคชันทั้งหมด
COPY app.py .

# สร้างโฟลเดอร์สำหรับจัดเก็บไฟล์ดาวน์โหลด (ป้องกันสิทธิ์พาทชั่วคราวบน Docker)
RUN mkdir -p /app/downloads && chmod 777 /app/downloads

# กำหนดให้ Gradio รันบนสิทธิ์และพอร์ตสำหรับ Docker Container
ENV GRADIO_SERVER_NAME="0.0.0.0"
ENV GRADIO_SERVER_PORT=7860

EXPOSE 7860

CMD ["python", "app.py"]