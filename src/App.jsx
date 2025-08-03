import React from 'react';
import HomePage from './pages/HomePage'; 
import { Outlet, Routes, Route } from 'react-router-dom';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import ArticleList from './admin/pages/ArticleList';
import { Box, Fab, Fade, useScrollTrigger, Container, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
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
      <Box id="back-to-top-anchor" />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/girne" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="makaleler" element={<ArticleList />} />
          </Route>
        </Routes>
      </Box>
      <Footer />
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
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

export default App;