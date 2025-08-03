import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import HakkimizdaPage from './pages/HakkimizdaPage.jsx';
import TarihcePage from './pages/TarihcePage.jsx';
import YonetimKuruluPage from './pages/YonetimKuruluPage.jsx';
import HaberDetayPage from './pages/HaberDetayPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';

// YENİ: Admin paneli bileşenlerini import edelim
import AdminLayout from './admin/AdminLayout.jsx';
import AdminDashboard from './admin/pages/AdminDashboard.jsx';
import LoginPage from './admin/pages/LoginPage.jsx';
import ArticleList from './admin/pages/ArticleList.jsx';


const router = createBrowserRouter([
  // Ana site yolları (değişiklik yok)
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/kurumsal/hakkimizda",
        element: <HakkimizdaPage />,
      },
      {
        path: "/kurumsal/tarihce",
        element: <TarihcePage />,
      },
      {
        path: "/kurumsal/yonetim-kurulu",
        element: <YonetimKuruluPage />,
      },
      {
        path: "/haberler/:id",
        element: <HaberDetayPage />,
      },
      {
        path: "/kurumsal/uyelik",
        element: <PlaceholderPage />,
      }
    ]
  },
  // YENİ: Admin paneli yolları
  {
    path: "/girne",
    element: <AdminLayout />,
    children: [
      {
        // /girne adresine gidildiğinde bu sayfa gösterilecek
        path: "/girne",
        element: <AdminDashboard />,
      },
      {
        // /girne/makaleler adresine gidildiğinde bu sayfa gösterilecek
        path: "/girne/makaleler",
        element: <ArticleList />,
      },
    ]
  },
  {
    // Giriş sayfası, ana admin layout'unun dışında ayrı bir yol
    path: "/girne/login",
    element: <LoginPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)