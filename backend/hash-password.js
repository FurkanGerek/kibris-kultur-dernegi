const bcrypt = require('bcryptjs');

// Veritabanına koymak istediğin şifreyi buraya yaz
const plainPassword = 'admin123'; // Örnek şifre, bunu kendi şifrenle değiştir

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(plainPassword, salt);

console.log('Güvenli Şifre (Hash):');
console.log(hashedPassword);