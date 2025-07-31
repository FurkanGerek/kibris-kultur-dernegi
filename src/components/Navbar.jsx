import React, { useState, useEffect, useRef } from 'react'; // Gerekli hook'lar import edildi
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Container, Menu, MenuItem, Grid, Fade, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CascadingMenuItem from './CascadingMenuItem';
import logo from '@/photos/logo.png';

// Menü verileri (değişiklik yok)
const yonetimItems = [
    { text: "Genel Merkez", subMenuItems: [{text: "Yönetim Kurulu", path: "/yonetim/genel-merkez/yonetim-kurulu"}, {text: "Denetim Kurulu", path: "/yonetim/genel-merkez/denetim-kurulu"}] },
    { text: "Antalya", subMenuItems: [{text: "Yönetim Kurulu", path: "/yonetim/antalya/yonetim-kurulu"}, {text: "Denetim Kurulu", path: "/yonetim/antalya/denetim-kurulu"}] },
    { text: "İstanbul", subMenuItems: [{text: "Yönetim Kurulu", path: "/yonetim/istanbul/yonetim-kurulu"}, {text: "Denetim Kurulu", path: "/yonetim/istanbul/denetim-kurulu"}] },
    { text: "İzmir", subMenuItems: [{text: "Yönetim Kurulu", path: "/yonetim/izmir/yonetim-kurulu"}, {text: "Denetim Kurulu", path: "/yonetim/izmir/denetim-kurulu"}] },
    { text: "Mersin", subMenuItems: [{text: "Yönetim Kurulu", path: "/yonetim/mersin/yonetim-kurulu"}, {text: "Denetim Kurulu", path: "/yonetim/mersin/denetim-kurulu"}] },
];
const kibrisTurkKulturuSubItems = [
    { text: "Kıbrıs Şivesi", path: "/kibris/kultur/sive" },
    { text: "Kıbrıs Ninnileri", path: "/kibris/kultur/ninniler" },
    { text: "Kıbrıs Türküleri", path: "/kibris/kultur/turkuler" },
    { text: "Edebiyat", path: "/kibris/kultur/edebiyat" },
    { text: "Şairlerimizden Şiirler", path: "/kibris/kultur/siirler" },
];
const kurumsalItems = [{text: "Tarihçe", path: "/kurumsal/tarihce"}, {text: "Tüzük", path: "/kurumsal/tuzuk"}, {text: "Üyelik", path: "/kurumsal/uyelik"}];
const basinItems = [{text: "Basın Açıklamaları", path: "/basin/aciklamalar"}, {text: "Basında Biz", path: "/basin/basinda-biz"}];
const yazarlarItems = [{text: "İsmail Bozkurt", path: "/yazarlar/ismail-bozkurt"}, {text: "Prof. Dr. Ata Atun", path: "/yazarlar/ata-atun"}];
const iletisimItems = [{text: "Bize Ulaşın", path: "/iletisim/bize-ulasin"}, {text: "Ziyaretçi Defteri", path: "/iletisim/ziyaretci-defteri"}];


function Navbar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenuName, setOpenMenuName] = React.useState(null);
  const [menuTimer, setMenuTimer] = React.useState(null);

  // YENİ: Kaydırma durumunu takip etmek için state ve ref'ler
  const [isSticky, setIsSticky] = useState(false);
  const topBarRef = useRef(null); // Üst barın referansı (yüksekliğini ölçmek için)
  const menuBarRef = useRef(null); // Menü barının referansı (yüksekliğini ölçmek için)

  useEffect(() => {
    // Sayfa scroll olduğunda çalışacak fonksiyon
    const handleScroll = () => {
      if (topBarRef.current) {
        // Eğer scroll pozisyonu, üst barın yüksekliğini geçtiyse, menüyü sabitle
        if (window.scrollY > topBarRef.current.offsetHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    // Scroll event listener'ını ekle
    window.addEventListener('scroll', handleScroll);

    // Component ekrandan kaldırıldığında event listener'ı temizle (hafıza sızıntısını önler)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] dependency array'i sayesinde bu effect sadece bir kere çalışır

  const handleMouseEnter = (event, menuName) => {
    if (menuTimer) clearTimeout(menuTimer);
    setAnchorEl(event.currentTarget);
    setOpenMenuName(menuName);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setAnchorEl(null);
      setOpenMenuName(null);
    }, 150);
    setMenuTimer(timer);
  };
  
  const handleAllMenusClose = () => {
    setAnchorEl(null);
    setOpenMenuName(null);
  };

  const getButtonSx = (path, menuName) => {
    const isPageActive = path === '/' ? location.pathname === path : location.pathname.startsWith(path);
    const isMenuActive = openMenuName === menuName;
    const isActive = isPageActive || isMenuActive;

    return {
      py: '6px', px: 1.5, mx: 0.25, borderRadius: 2,
      whiteSpace: 'nowrap',
      transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
      backgroundColor: isActive ? 'primary.main' : 'transparent',
      color: isActive ? 'white' : 'text.primary',
      '&:hover': {
        backgroundColor: 'primary.main',
        color: 'white',
        '& .MuiSvgIcon-root': { color: 'white' }
      },
      '& .MuiSvgIcon-root': {
        color: isActive ? 'white' : 'inherit',
      }
    };
  };
  
  const renderMenu = (menuName, items) => (
    <Menu 
      anchorEl={anchorEl}
      open={openMenuName === menuName} 
      MenuListProps={{ onMouseEnter: () => clearTimeout(menuTimer), onMouseLeave: handleMouseLeave }} 
      TransitionComponent={Fade}
      transitionDuration={200}
    >
      {items.map(item => <MenuItem key={item.text} component={Link} to={item.path} onClick={handleAllMenusClose}>{item.text}</MenuItem>)}
    </Menu>
  );

  return (
    <>
      {/* YENİ: Sabitlenen menünün arkada bıraktığı boşluğu doldurmak için bir placeholder */}
      {isSticky && <Box sx={{ height: menuBarRef.current?.offsetHeight }} />}

      {/* YENİ: Navbar'ın tamamını saran ve pozisyonunu yöneten ana kutu */}
      <Box 
        sx={{
          position: isSticky ? 'fixed' : 'relative',
          top: 0,
          width: '100%',
          zIndex: 1100, // Diğer içeriklerin üzerinde kalmasını sağlar
          boxShadow: isSticky ? '0px 2px 4px -1px rgba(0,0,0,0.2)' : 'none', // Sabitlendiğinde gölge ekler
        }}
      >
        {/* İletişim Barı */}
        <Box ref={topBarRef} sx={{ bgcolor: 'grey.100', borderBottom: '1px solid #e0e0e0' }}>
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

        {/* Ana Navigasyon Barı */}
        <AppBar ref={menuBarRef} position="static" color="default" elevation={0} sx={{ bgcolor: 'white' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', flexWrap: 'nowrap' }}>
                <Button component={Link} to="/" sx={getButtonSx("/")}>Ana Sayfa</Button>

                <Box onMouseEnter={(e) => handleMouseEnter(e, 'kurumsal')} onMouseLeave={handleMouseLeave}>
                  <Button component={Link} to="/kurumsal" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/kurumsal', 'kurumsal')}>Kurumsal</Button>
                  {renderMenu('kurumsal', kurumsalItems)}
                </Box>

                <Box onMouseEnter={(e) => handleMouseEnter(e, 'yonetim')} onMouseLeave={handleMouseLeave}>
                  <Button component={Link} to="/yonetim" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/yonetim', 'yonetim')}>Yönetim</Button>
                  <Menu anchorEl={anchorEl} open={openMenuName === 'yonetim'} MenuListProps={{ onMouseEnter: () => clearTimeout(menuTimer), onMouseLeave: handleMouseLeave }} TransitionComponent={Fade}>
                    {yonetimItems.map(item => <CascadingMenuItem key={item.text} submenuItems={item.subMenuItems} onSubMenuClick={handleAllMenusClose}>{item.text}</CascadingMenuItem>)}
                  </Menu>
                </Box>
                
                <Box onMouseEnter={(e) => handleMouseEnter(e, 'kibris')} onMouseLeave={handleMouseLeave}>
                  <Button component={Link} to="/kibris" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/kibris', 'kibris')}>Kıbrıs</Button>
                   <Menu anchorEl={anchorEl} open={openMenuName === 'kibris'} MenuListProps={{ onMouseEnter: () => clearTimeout(menuTimer), onMouseLeave: handleMouseLeave }} TransitionComponent={Fade}>
                      <MenuItem component={Link} to="/kibris/uyusmazlik" onClick={handleAllMenusClose}>Kıbrıs Uyuşmazlığı</MenuItem>
                      <CascadingMenuItem submenuItems={kibrisTurkKulturuSubItems} onSubMenuClick={handleAllMenusClose}>Kıbrıs Türk Kültürü</CascadingMenuItem>
                   </Menu>
                </Box>
                
                <Button component={Link} to="/yayinlarimiz" sx={getButtonSx('/yayinlarimiz')}>Yayınlarımız</Button>
                <Button component={Link} to="/kutuphanemiz" sx={getButtonSx('/kutuphanemiz')}>Kütüphanemiz</Button>
                
                <Box onMouseEnter={(e) => handleMouseEnter(e, 'basin')} onMouseLeave={handleMouseLeave}>
                  <Button component={Link} to="/basin" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/basin', 'basin')}>Basın</Button>
                  {renderMenu('basin', basinItems)}
                </Box>

                <Button component={Link} to="/etkinlikler" sx={getButtonSx('/etkinlikler')}>Etkinlikler</Button>
                
                <Box onMouseEnter={(e) => handleMouseEnter(e, 'yazarlar')} onMouseLeave={handleMouseLeave}>
                  <Button component={Link} to="/yazarlar" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/yazarlar', 'yazarlar')}>Yazarlar</Button>
                  {renderMenu('yazarlar', yazarlarItems)}
                </Box>
                
                <Box onMouseEnter={(e) => handleMouseEnter(e, 'iletisim')} onMouseLeave={handleMouseLeave}>
                   <Button component={Link} to="/iletisim" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/iletisim', 'iletisim')}>İletişim</Button>
                   {renderMenu('iletisim', iletisimItems)}
                </Box>
              </Box>
              <Button variant="contained" color="primary" component={Link} to="/uyelik-formu" sx={{ py: '6px', whiteSpace: 'nowrap', minWidth: '130px' }}>Üyelik Formu</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;