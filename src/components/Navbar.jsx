import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// GÜNCELLENDİ: MenuItem import'u eklendi
import { AppBar, Toolbar, Button, Box, Container, Grid, Typography, MenuItem } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '@/photos/logo.png';

// Menü verileri (Eksiksiz)
const yonetimItems = [
    { text: "Genel Merkez", subMenuItems: [{text: "Yönetim Kurulu", path: "/yonetim/genel-merkez/yonetim-kurulu"}, {text: "Denetim Kurulu", path: "/yonetim/genel-merkez/denetim-kurulu"}] },
    { text: "Antalya", subMenuItems: [{text: "Yönetim Kurulu", path: "/yonetim/antalya/yonetim-kurulu"}, {text: "Denetim Kurulu", path: "/yonetim/antalya/denetim-kurulu"}] },
];
const kibrisTurkKulturuSubItems = [
    { text: "Kıbrıs Şivesi", path: "/kibris/kultur/sive" },
    { text: "Kıbrıs Ninnileri", path: "/kibris/kultur/ninniler" },
];
const kurumsalItems = [
    {text: "Tarihçe", path: "/kurumsal/tarihce"}, 
    {text: "Tüzük", path: "/kurumsal/tuzuk"}, 
    {text: "Üyelik", path: "/kurumsal/uyelik"},
];
const basinItems = [
    {text: "Basın Açıklamaları", path: "/basin/aciklamalar"}, 
    {text: "Basında Biz", path: "/basin/basinda-biz"},
];
const yazarlarItems = [
    {text: "İsmail Bozkurt", path: "/yazarlar/ismail-bozkurt"},
    {text: "Prof. Dr. Ata Atun", path: "/yazarlar/ata-atun"},
];
const iletisimItems = [
    {text: "Bize Ulaşın", path: "/iletisim/bize-ulasin"}, 
    {text: "Ziyaretçi Defteri", path: "/iletisim/ziyaretci-defteri"},
];

// GÜNCELLENDİ: Bu component artık Navbar içinde tanımlı
const CascadingMenuItem = ({ children, submenuItems, onSubMenuClick }) => {
    // Bu component'in mantığı şimdilik basit tutuldu, gerekirse geliştirilebilir.
    return (
        <MenuItem onClick={onSubMenuClick} sx={{ justifyContent: 'space-between' }}>
            {children}
            <span>&rsaquo;</span>
        </MenuItem>
    );
};


function Navbar() {
  const location = useLocation();

  const getButtonSx = (path) => {
    const isPageActive = path === '/' ? location.pathname === path : location.pathname.startsWith(path);
    return {
      py: 1.5, px: 2, mx: 0.5,
      position: 'relative',
      overflow: 'hidden',
      color: isPageActive ? 'white' : 'text.primary',
      transition: 'color 0.4s ease-in-out',
      zIndex: 1,
      '& .MuiSvgIcon-root': {
        color: isPageActive ? 'white' : 'inherit',
        transition: 'color 0.4s ease-in-out',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: isPageActive ? '100%' : '3px',
        backgroundColor: 'primary.main',
        zIndex: -1,
        transition: 'height 0.4s ease-in-out',
      },
      '&:hover': {
        color: 'white',
        '& .MuiSvgIcon-root': { color: 'white' },
      },
      '&:hover::before': {
        height: '100%',
      },
    };
  };
  
  // GÜNCELLENDİ: Yeni animasyonlu menü yapısı
  const AnimatedMenu = ({ items, children }) => (
    <Box className="nav-item" sx={{ position: 'relative', '&:hover .drop-menu': { display: 'block' } }}>
        {children}
        <Box
            className="drop-menu"
            sx={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '200px', // Menü genişliği
                bgcolor: '#666',
                borderRadius: '0 0 5px 5px',
                perspective: '1000px',
                zIndex: 1200,
                '& .menu-item': {
                    opacity: 0,
                    transformOrigin: 'top center',
                    animationName: 'menu2',
                    animationDuration: '300ms',
                    animationTimingFunction: 'ease-in-out',
                    animationFillMode: 'forwards',
                }
            }}
        >
            {items.map((item, index) => (
                <MenuItem
                    key={item.text}
                    component={Link}
                    to={item.path}
                    className="menu-item"
                    sx={{
                        color: 'rgba(255,255,255,0.8)',
                        animationDelay: `${index * 80}ms`, // Animasyon gecikmesi
                        '&:hover': { bgcolor: '#606060' }
                    }}
                >
                    {item.text}
                </MenuItem>
            ))}
        </Box>
    </Box>
  );

  return (
    <>
      {/* GÜNCELLENDİ: Animasyon için @keyframes tanımı */}
      <style>
        {`
          @keyframes menu2 {
            0% {
              opacity: 0;
              transform: rotateX(-90deg);
            }
            100% {
              opacity: 1;
              transform: rotateX(0deg);
            }
          }
        `}
      </style>
      <Box sx={{ bgcolor: 'grey.100', py: 1, borderBottom: '1px solid #e0e0e0' }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link to="/"><img src={logo} alt="Kıbrıs Türk Kültür Derneği Logosu" style={{ height: '60px' }} /></Link>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}><PhoneIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} /><Box><Typography variant="body2" fontWeight="bold">0 (312) 434 14 12</Typography><Typography variant="caption" color="text.secondary">kibristkd@gmail.com</Typography></Box></Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}><LocationOnIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} /><Box><Typography variant="body2" fontWeight="bold">Halk Sokak No:17/2</Typography><Typography variant="caption" color="text.secondary">Yenişehir Çankaya Ankara</Typography></Box></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
              <Button component={Link} to="/" sx={getButtonSx("/")}>Ana Sayfa</Button>

              <AnimatedMenu items={kurumsalItems}>
                  <Button component={Link} to="/kurumsal" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/kurumsal')}>Kurumsal</Button>
              </AnimatedMenu>

              {/* İç içe menüler şimdilik bu yapıyla desteklenmiyor, basit liste olarak eklendi */}
              <AnimatedMenu items={yonetimItems.map(i => ({text: i.text, path: '/yonetim'}))}>
                <Button component={Link} to="/yonetim" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/yonetim')}>Yönetim</Button>
              </AnimatedMenu>
              
              <AnimatedMenu items={kibrisTurkKulturuSubItems}>
                <Button component={Link} to="/kibris" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/kibris')}>Kıbrıs</Button>
              </AnimatedMenu>
              
              <Button component={Link} to="/yayinlarimiz" sx={getButtonSx('/yayinlarimiz')}>Yayınlarımız</Button>
              <Button component={Link} to="/kutuphanemiz" sx={getButtonSx('/kutuphanemiz')}>Kütüphanemiz</Button>
              
              <AnimatedMenu items={basinItems}>
                <Button component={Link} to="/basin" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/basin')}>Basın</Button>
              </AnimatedMenu>

              <Button component={Link} to="/etkinlikler" sx={getButtonSx('/etkinlikler')}>Etkinlikler</Button>
              
              <AnimatedMenu items={yazarlarItems}>
                <Button component={Link} to="/yazarlar" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/yazarlar')}>Yazarlar</Button>
              </AnimatedMenu>
              
              <AnimatedMenu items={iletisimItems}>
                 <Button component={Link} to="/iletisim" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/iletisim')}>İletişim</Button>
              </AnimatedMenu>
            </Box>
            <Button variant="contained" color="primary" component={Link} to="/uyelik-formu" sx={{ py: '6px', whiteSpace: 'nowrap', minWidth: '130px' }}>Üyelik Formu</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
