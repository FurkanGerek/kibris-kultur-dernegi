import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Sayfaları ve layout'ları import edelim
import HomePage from './pages/HomePage';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import ArticleList from './admin/pages/ArticleList';

// Eğer varsa Navbar ve Footer gibi bileşenlerinizi de import edebilirsiniz
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Eğer tüm sayfalarda ortak bir Navbar veya Footer olacaksa buraya koyabilirsiniz */}
      {/* <Navbar /> */}
      
      <Routes>
        {/* Ana Sayfa Route'u */}
        <Route path="/" element={<HomePage />} />
        
        {/* Diğer normal sayfa route'larınız varsa buraya ekleyebilirsiniz */}
        {/* Örnek: <Route path="/hakkimizda" element={<AboutPage />} /> */}

        {/* Admin Paneli için Route'lar */}
        {/* "/girne" ana yolu, AdminLayout'u yükler ve içindeki Outlet'e alt route'ları yerleştirir */}
        <Route path="/girne" element={<AdminLayout />}>
          {/* "/girne" adresine gidildiğinde varsayılan olarak AdminDashboard'u gösterir */}
          <Route index element={<AdminDashboard />} />
          
          {/* "/girne/makaleler" adresine gidildiğinde ArticleList'i gösterir */}
          <Route path="makaleler" element={<ArticleList />} />
          
          {/* Gelecekte eklenecek diğer admin sayfaları buraya gelecek */}
          {/* Örnek: <Route path="kullanicilar" element={<UserList />} /> */}
        </Route>
        
        {/* Opsiyonel: Giriş sayfası genellikle layout'un dışında olur */}
        {/* <Route path="/girne/login" element={<LoginPage />} /> */}
        
        {/* Eşleşmeyen tüm yollar için 404 sayfası (opsiyonel) */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      
      {/* <Footer /> */}
    </Router>
  );
}

export default App;