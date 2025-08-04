require("reflect-metadata");
const express = require('express');
const { DataSource } = require("typeorm");
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Entity'lerimizi import edelim
const { Yazar } = require("./src/entity/Yazar");
const { Makale } = require("./src/entity/Makale");
const { Kullanici } = require("./src/entity/Kullanici");

const app = express();
app.use(cors());
app.use(express.json());

// --- TYPEORM VERİTABANI BAĞLANTISI ---
const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [Yazar, Makale, Kullanici],
});

AppDataSource.initialize()
    .then(() => {
        console.log("TypeORM ile veritabanı bağlantısı başarılı!");
        
        const yazarRepository = AppDataSource.getRepository(Yazar);
        const makaleRepository = AppDataSource.getRepository(Makale);
        const kullaniciRepository = AppDataSource.getRepository(Kullanici);

        // --- LOGIN ENDPOINT (HATA YÖNETİMİ EKLENDİ) ---
        app.post('/api/login', async (req, res) => {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return res.status(400).json({ message: "E-posta ve şifre zorunludur." });
                }

                const user = await kullaniciRepository.findOne({ where: { email } });
                if (!user) {
                    return res.status(401).json({ message: "Bu e-posta ile kayıtlı kullanıcı bulunamadı." });
                }

                const isPasswordCorrect = await bcrypt.compare(password, user.sifre);
                if (!isPasswordCorrect) {
                    return res.status(401).json({ message: "Şifre yanlış." });
                }

                const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '8h' });
                res.json({ message: "Giriş başarılı!", token, userRole: user.rol });

            } catch (error) {
                console.error("Login sırasında sunucu hatası:", error);
                res.status(500).json({ message: "Sunucuda beklenmedik bir hata oluştu." });
            }
        });

        // --- YAZARLAR API ENDPOINTS ---
        app.get('/api/yazarlar', async (req, res) => {
            try {
                res.json(await yazarRepository.find());
            } catch (error) {
                res.status(500).json({ message: 'Yazarlar alınamadı.' });
            }
        });
        
        app.post('/api/yazarlar', async (req, res) => {
            try {
                res.status(201).json(await yazarRepository.save(req.body));
            } catch (error) {
                res.status(500).json({ message: 'Yazar eklenemedi.' });
            }
        });

        // --- MAKALELER API ENDPOINTS ---
        app.get('/api/makaleler', async (req, res) => {
            try {
                res.json(await makaleRepository.find({ relations: ["author"], order: { created_at: "DESC" } }));
            } catch(error) {
                res.status(500).json({ message: 'Makaleler alınamadı.' });
            }
        });
        
        app.post('/api/makaleler', async (req, res) => {
             try {
                const { title, content, author_id } = req.body;
                const yeniMakale = makaleRepository.create({ title, content, author: { id: author_id } });
                await makaleRepository.save(yeniMakale);
                res.status(201).json(yeniMakale);
            } catch (error) {
                res.status(500).json({ message: 'Makale eklenemedi.' });
            }
        });

        app.delete('/api/makaleler/:id', async (req, res) => {
            try {
                await makaleRepository.delete(req.params.id);
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ message: 'Makale silinemedi.' });
            }
        });

        const PORT = 3001;
        app.listen(PORT, () => {
            console.log(`API Sunucusu http://localhost:${PORT} adresinde başarıyla başlatıldı.`);
        });
    })
    .catch((error) => console.log("Veritabanı bağlantı hatası:", error));
    .catch((error) => console.log("Veritabanı bağlantı hatası:", error));