
# LIBERARY (Library Management System)

مشروع بسيط: **Frontend (HTML/CSS/JS)** + **Backend (PHP API)** + **MySQL DB**.

## المتطلبات

- Windows 10/11
- **XAMPP 8.2** (Apache + PHP + MySQL)

> ملاحظة: تم إعداد التثبيت عبر `winget` لو متاح.

## تشغيل سريع (موصى به)

### 1) شغّل MySQL

- افتح **XAMPP Control Panel**
- شغّل **MySQL**

### 2) استيراد قاعدة البيانات

- افتح phpMyAdmin من XAMPP
- أنشئ/اختر قاعدة بيانات باسم: `LIBRARY`
- Import لملف: `Database/library.sql`

### 3) شغّل الـ Backend (API)

أسهل طريقة بدون تعديل إعدادات Apache:

- شغّل Apache من XAMPP (اختياري)
- أو شغّل PHP Built-in server من مجلد المشروع:

```powershell
& "C:\xampp\php\php.exe" -S localhost:8000 -t Backend
```

بعدها هتلاقي الـ API على:
- `http://localhost:8000/index.php`
- و الـ endpoints تحت `Backend/api/...`

### 4) شغّل الـ Frontend

افتح `Frontend/index.html` (باستخدام Live Server على بورت 5501 أو أي سيرفر static).

## ملاحظات مهمة

- الـ Frontend بيبني `API_BASE` تلقائيًا على أساس مكانه بالنسبة لـ `Backend`.
- لو شغّلت الـ Backend على بورت مختلف، تأكد إن المسارات متوافقة أو عدّل `Frontend/api.js`.

