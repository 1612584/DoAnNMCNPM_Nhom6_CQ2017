Clone project: git clone https://github.com/1612584/DoAnNMCNPM_Nhom6_CQ2017.git
Yêu cầu để run project bằng hướng dẫn bên dưới, cài ubuntu subsystem, mở terminal trên thanh công cụ
    - cài đặt nodejs: sudo apt-get install nodejs
    - cài đặt nodemon: sudo npm install -g nodemon
    - cài các node_modules: npm install
    - Tạo file .env trong cùng đường dẫn với app.js, cấu hình một số thông tin server bằng cách thêm các dòng trong dấu ngoặc nhọn vào file .env và save lại:
        {
            PORT='3001'
            HOST='localhost'
        }
    - start server: npm start