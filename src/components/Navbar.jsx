    import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { AppBar, Toolbar, Button, Box, Container, Grid, Typography, MenuItem } from '@mui/material';
    import PhoneIcon from '@mui/icons-material/Phone';
    import LocationOnIcon from '@mui/icons-material/LocationOn';
    import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
    import logo from '@/photos/logo.png';

    // GÜNCELLENDİ: Tüm menü verileri, paylaşılan görsellere göre eksiksiz olarak tanımlandı
    const yonetimItems = [
        { text: "Genel Merkez", path: "/yonetim/genel-merkez" },
        { text: "Antalya", path: "/yonetim/antalya" },
        { text: "İstanbul", path: "/yonetim/istanbul" },
        { text: "İzmir", path: "/yonetim/izmir" },
        { text: "Mersin", path: "/yonetim/mersin" },
    ];
    const kibrisItems = [
        { text: "Kıbrıs Uyuşmazlığı", path: "/kibris/uyusmazlik" },
        { text: "Kültürel Etkinlikler", path: "/kibris/kulturel-etkinlikler" },
        { text: "Kıbrısla İlgili Tavsiyeler", path: "/kibris/tavsiyeler" },
        { text: "Kıbrıs Türk Kültürü", path: "/kibris/kultur" },
        { text: "Önemli Gün ve Haftalar", path: "/kibris/onemli-gunler" },
    ];
    const kurumsalItems = [
        {text: "Tarihçe", path: "/kurumsal/tarihce"}, 
        {text: "Tüzük", path: "/kurumsal/tuzuk"}, 
        {text: "Üyelik", path: "/kurumsal/uyelik"},
        {text: "Doktor Üyelerimiz", path: "/kurumsal/doktor-uyelerimiz"},
        {text: "Sık Sorulan Sorular", path: "/kurumsal/sss"},
        {text: "Mali Bilgiler", path: "/kurumsal/mali-bilgiler"},
        {text: "Burs İşlemleri", path: "/kurumsal/burs-islemleri"},
    ];
    const basinItems = [
        {text: "Basın Açıklamaları", path: "/basin/aciklamalar"}, 
        {text: "Basında Biz", path: "/basin/basinda-biz"},
        {text: "Basında KKTC", path: "/basin/basinda-kktc"},
    ];
    const yazarlarItems = [
        {text: "İsmail Bozkurt", path: "/yazarlar/ismail-bozkurt"},
        {text: "Kaptanın Seyir Defteri", path: "/yazarlar/kaptanin-seyir-defteri"},
        {text: "Sabahattin İsmail", path: "/yazarlar/sabahattin-ismail"},
        {text: "Prof. Dr. Ata Atun", path: "/yazarlar/ata-atun"},
        {text: "Atilla Çilingir", path: "/yazarlar/atilla-cilingir"},
        {text: "Ahmet Göksan", path: "/yazarlar/ahmet-goksan"},
        {text: "Hüseyin Laptalı", path: "/yazarlar/huseyin-laptali"},
        {text: "Hasan İkizer", path: "/yazarlar/hasan-ikizer"},
        {text: "Ali Fikret Atun", path: "/yazarlar/ali-fikret-atun"},
        {text: "Yusuf Kanlı", path: "/yazarlar/yusuf-kanli"},
    ];
    const iletisimItems = [
        {text: "Bize Ulaşın", path: "/iletisim/bize-ulasin"}, 
        {text: "Ziyaretçi Defteri", path: "/iletisim/ziyaretci-defteri"},
        {text: "Defterimize Yazın", path: "/iletisim/defterimize-yazin"},
    ];

    function Navbar() {
    const location = useLocation();

    const getButtonSx = (path) => {
        // GÜNCELLENDİ: Ana sayfa butonu kaldırıldığı için özel kontrol kaldırıldı
        const isPageActive = location.pathname.startsWith(path);
        return {
        py: 1.5, px: 2, 
        mx: 0,
        position: 'relative',
        overflow: 'hidden',
        color: isPageActive ? 'white' : 'text.primary',
        transition: 'color 0.4s ease-in-out',
        whiteSpace: 'nowrap',
        zIndex: 1,
        borderRadius: 0,
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
                    width: '220px',
                    bgcolor: 'white',
                    borderRadius: '0 0 5px 5px',
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
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
                            color: 'text.primary',
                            animationDelay: `${index * 60}ms`,
                            '&:hover': { 
                                bgcolor: 'grey.100',
                                color: 'primary.main'
                            }
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
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap' }}>
                {/* KALDIRILDI: Ana Sayfa butonu silindi */}

                <AnimatedMenu items={kurumsalItems}>
                    <Button component={Link} to="/kurumsal" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/kurumsal')}>Kurumsal</Button>
                </AnimatedMenu>

                <AnimatedMenu items={yonetimItems}>
                    <Button component={Link} to="/yonetim" endIcon={<KeyboardArrowDownIcon />} sx={getButtonSx('/yonetim')}>Yönetim</Button>
                </AnimatedMenu>
                
                <AnimatedMenu items={kibrisItems}>
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
                
                {/* GÜNCELLENDİ: Üyelik Formu butonu diğerleriyle aynı stili kullanıyor */}
                <Button component={Link} to="/uyelik-formu" sx={getButtonSx('/uyelik-formu')}>Üyelik Formu</Button>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
        </>
    );
    }

    export default Navbar;
