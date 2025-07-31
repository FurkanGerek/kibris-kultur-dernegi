import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';

// Tüm boş sayfaları temsil edecek genel bir component.
// Bunu src/pages/PlaceholderPage.jsx olarak kaydetmiştik.
import PlaceholderPage from './pages/PlaceholderPage.jsx';

const theme = createTheme({
  palette: { primary: { main: '#D32F2F' } },
  typography: { button: { textTransform: 'none' } }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },

      // Kurumsal Menüsü Rotaları
      { path: "/kurumsal", element: <PlaceholderPage title="Kurumsal" /> },
      { path: "/kurumsal/tarihce", element: <PlaceholderPage title="Tarihçe" /> },
      { path: "/kurumsal/tuzuk", element: <PlaceholderPage title="Tüzük" /> },
      { path: "/kurumsal/uyelik", element: <PlaceholderPage title="Üyelik" /> },
      { path: "/kurumsal/doktor-uyeler", element: <PlaceholderPage title="Doktor Üyelerimiz" /> },
      { path: "/kurumsal/sss", element: <PlaceholderPage title="Sık Sorulan Sorular" /> },
      { path: "/kurumsal/mali-bilgiler", element: <PlaceholderPage title="Mali Bilgiler" /> },
      { path: "/kurumsal/burs", element: <PlaceholderPage title="Burs İşlemleri" /> },

      // Yönetim Menüsü Rotaları
      { path: "/yonetim", element: <PlaceholderPage title="Yönetim" /> },
      { path: "/yonetim/genel-merkez/yonetim-kurulu", element: <PlaceholderPage title="Genel Merkez - Yönetim Kurulu" /> },
      { path: "/yonetim/genel-merkez/denetim-kurulu", element: <PlaceholderPage title="Genel Merkez - Denetim Kurulu" /> },
      { path: "/yonetim/antalya/yonetim-kurulu", element: <PlaceholderPage title="Antalya - Yönetim Kurulu" /> },
      { path: "/yonetim/antalya/denetim-kurulu", element: <PlaceholderPage title="Antalya - Denetim Kurulu" /> },
      { path: "/yonetim/istanbul/yonetim-kurulu", element: <PlaceholderPage title="İstanbul - Yönetim Kurulu" /> },
      { path: "/yonetim/istanbul/denetim-kurulu", element: <PlaceholderPage title="İstanbul - Denetim Kurulu" /> },
      { path: "/yonetim/izmir/yonetim-kurulu", element: <PlaceholderPage title="İzmir - Yönetim Kurulu" /> },
      { path: "/yonetim/izmir/denetim-kurulu", element: <PlaceholderPage title="İzmir - Denetim Kurulu" /> },
      { path: "/yonetim/mersin/yonetim-kurulu", element: <PlaceholderPage title="Mersin - Yönetim Kurulu" /> },
      { path: "/yonetim/mersin/denetim-kurulu", element: <PlaceholderPage title="Mersin - Denetim Kurulu" /> },

      // Kıbrıs Menüsü Rotaları
      { path: "/kibris", element: <PlaceholderPage title="Kıbrıs" /> },
      { path: "/kibris/uyusmazlik", element: <PlaceholderPage title="Kıbrıs Uyuşmazlığı" /> },
      { path: "/kibris/kulturel-etkinlikler", element: <PlaceholderPage title="Kültürel Etkinlikler" /> },
      { path: "/kibris/tavsiyeler", element: <PlaceholderPage title="Kıbrıs'la İlgili Tavsiyeler" /> },
      { path: "/kibris/kultur/sive", element: <PlaceholderPage title="Kıbrıs Şivesi" /> },
      { path: "/kibris/kultur/ninniler", element: <PlaceholderPage title="Kıbrıs Ninnileri" /> },
      { path: "/kibris/kultur/turkuler", element: <PlaceholderPage title="Kıbrıs Türküleri" /> },
      { path: "/kibris/kultur/edebiyat", element: <PlaceholderPage title="Edebiyat" /> },
      { path: "/kibris/kultur/siirler", element: <PlaceholderPage title="Şairlerimizden Şiirler" /> },
      { path: "/kibris/onemli-gunler", element: <PlaceholderPage title="Önemli Gün ve Haftalar" /> },
      
      // Diğer Üst Menü Rotaları
      { path: "/yayinlarimiz", element: <PlaceholderPage title="Yayınlarımız" /> },
      { path: "/kutuphanemiz", element: <PlaceholderPage title="Kütüphanemiz" /> },
      { path: "/etkinlikler", element: <PlaceholderPage title="Etkinlikler" /> },

      // Basın Menüsü Rotaları
      { path: "/basin", element: <PlaceholderPage title="Basın" /> },
      { path: "/basin/basin-aciklamalari", element: <PlaceholderPage title="Basın Açıklamaları" /> },
      { path: "/basin/basinda-biz", element: <PlaceholderPage title="Basında Biz" /> },
      { path: "/basin/basinda-kktc", element: <PlaceholderPage title="Basında KKTC" /> },

      // Yazarlar Menüsü Rotaları
      { path: "/yazarlar", element: <PlaceholderPage title="Yazarlar" /> },
      { path: "/yazarlar/ismail-bozkurt", element: <PlaceholderPage title="İsmail Bozkurt" /> },
      { path: "/yazarlar/kaptanin-seyir-defteri", element: <PlaceholderPage title="Kaptanın Seyir Defteri" /> },
      { path: "/yazarlar/sabahattin-ismail", element: <PlaceholderPage title="Sabahattin İsmail" /> },
      { path: "/yazarlar/prof-dr-ata-atun", element: <PlaceholderPage title="Prof. Dr. Ata Atun" /> },

      // İletişim Menüsü Rotaları
      { path: "/iletisim", element: <PlaceholderPage title="İletişim" /> },
      { path: "/iletisim/bize-ulasin", element: <PlaceholderPage title="Bize Ulaşın" /> },
      { path: "/iletisim/ziyaretci-defteri", element: <PlaceholderPage title="Ziyaretçi Defteri" /> },
      { path: "/iletisim/defterimize-yazin", element: <PlaceholderPage title="Defterimize Yazın" /> },
      
      // Üyelik Formu Rotası
      { path: "/uyelik-formu", element: <PlaceholderPage title="Üyelik Formu" /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);