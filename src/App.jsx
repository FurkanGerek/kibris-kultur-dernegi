import React from 'react';
import { Outlet } from 'react-router-dom';
// GÜNCELLENDİ: Eksik olan Container ve Typography eklendi
import { Box, Fab, Fade, useScrollTrigger, Container, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Yeni footer'ımızı import ediyoruz

// Yukarı Çık Butonu için özel bir component
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100, // 100px aşağı kaydırınca buton görünsün
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1200 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Yukarı çıkma işleminin hedefini belirleyen görünmez bir çapa */}
      <Box id="back-to-top-anchor" />

      <Navbar />
      
      {/* Sayfa içeriği burada görünecek */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      {/* Yeni Footer'ımız */}
      <Footer />
      
      {/* Telif Hakkı Çubuğu */}
      <Box sx={{ bgcolor: '#1e1e1e', color: 'grey.500', py: 2 }}>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2">
                © Kıbrıs Türk Kültür Derneği 1948 - 2019 Tüm Hakları Saklıdır
            </Typography>
            <Typography variant="body2">
                Web Tasarım
            </Typography>
        </Container>
      </Box>

      {/* Yukarı Çık Butonu */}
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

export default App;
