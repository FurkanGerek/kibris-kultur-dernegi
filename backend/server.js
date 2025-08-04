const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}).promise();

// --- KULLANICI GİRİŞ (LOGIN) ENDPOINT'İ ---
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "E-posta ve şifre alanları zorunludur." });
        }

        const [rows] = await db.query("SELECT * FROM kullanicilar WHERE email = ?", [email]);

        if (rows.length === 0) {
            return res.status(401).json({ message: "Bu e-posta ile kayıtlı bir kullanıcı bulunamadı." });
        }

        const user = rows[0];

        // Güvenli Karşılaştırma: Kullanıcının girdiği şifre ile veritabanındaki hash'lenmiş şifreyi karşılaştır
        const isPasswordCorrect = await bcrypt.compare(password, user.sifre);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Şifre yanlış." });
        }
        
        // Şifre doğruysa, kullanıcıya özel bir "giriş bileti" (token) oluştur
        const token = jwt.sign(
            { id: user.id, rol: user.rol },
            process.env.JWT_SECRET,
            { expiresIn: '8h' } // Token 8 saat geçerli olacak
        );

        res.json({ message: "Giriş başarılı!", token: token, userRole: user.rol });

    } catch (error) {
        console.error("Login hatası:", error);
        res.status(500).json({ message: "Sunucuda bir hata oluştu." });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`API Sunucusu http://localhost:${PORT} adresinde başarıyla başlatıldı.`);
});