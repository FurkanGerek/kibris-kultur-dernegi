import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';
import MainContentSlider from '@/components/MainContentSlider';
import Sidebar from '@/components/Sidebar';

// Resimleri import ediyoruz
import slideImage1 from '@/photos/slide1.jpg';

// Başlıklar için ortak stil component'i
const SectionTitle = ({ children }) => (
  <Typography
    variant="body2"
    component="h2"
    sx={{
      display: 'inline-block',
      backgroundColor: 'primary.main',
      color: 'white',
      px: 2,
      py: 0.5,
      mb: 2,
      fontWeight: 'bold',
    }}
  >
    {children}
  </Typography>
);

// Örnek veriler
const basindaKktcData = [
  { text: 'BASIN AÇIKLAMASI', subtext: 'BASIN AÇIKLAMASI', path: '/basin/aciklama-1' },
  { text: '“İSİAS ORTAK DAVAMIZ”', subtext: '“İSİAS ORTAK DAVAMIZ”', path: '/basin/isias-davamiz' },
  { text: '8 AĞUSTOS ERENKÖY DİRENİŞİNİN 59. YIL DÖNÜMÜNÜ ONURLA ANIYORUZ', subtext: '8 AĞUSTOS ERENKÖY DİRENİŞİNİN 59. YIL DÖNÜMÜNÜ ONURLA ANIYORUZ', path: '/basin/erenkoy-direnisi' },
  { text: 'KIBRIS TÜRK HALKININ TOPLUMSAL DİRENİŞ BAYRAMI KUTLU OLSUN', subtext: 'KIBRIS TÜRK HALKININ TOPLUMSAL DİRENİŞ BAYRAMI KUTLU OLSUN', path: '/basin/direnis-bayrami' },
];

const uyusmazlikData = [
    { text: 'Türk Ve Rum Müzakere Stratejileri Karşılaştırıldığında', subtext: '2018-04-21, M. Ergün Olgun', path: '/kibris/turk-rum-muzakere' },
    { text: 'Besparmak Düşünce Grubu Değerlendirmesi', subtext: '2017-12-15', path: '/kibris/besparmak-degerlendirmesi' },
];

const kulturData = [
    { title: 'Kıbrıs Ninnileri', image: slideImage1, path: '/kibris/kultur/ninniler' },
    { title: 'Kıbrıs Türküleri', image: slideImage1, path: '/kibris/kultur/turkuler' },
    { title: 'Şairlerimizden Şiirler', image: slideImage1, path: '/kibris/kultur/siirler' },
    { title: 'Kıbrıs Şivesi', image: slideImage1, path: '/kibris/kultur/sive' },
];

function HomePage() {
  return (
    <Box>
      <HeroSlider />

      <Container sx={{ py: 4 }} maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sol Sütun */}
          <Grid item xs={12} md={8}>
            <MainContentSlider />

            {/* Basında KKTC Bölümü */}
            <Box sx={{ mt: 4 }}>
              <SectionTitle>Basında KKTC</SectionTitle>
              <Grid container spacing={2}>
                {basindaKktcData.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <MuiLink component={Link} to={item.path} underline="hover" color="inherit">
                      <Typography variant="body1">{item.text}</Typography>
                    </MuiLink>
                    <Typography variant="caption" color="text.secondary">{item.subtext}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Kıbrıs Uyuşmazlığı Bölümü */}
            <Box sx={{ mt: 4 }}>
              <SectionTitle>Kıbrıs Uyuşmazlığı</SectionTitle>
               <Grid container spacing={2}>
                {uyusmazlikData.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <MuiLink component={Link} to={item.path} underline="hover" color="inherit">
                      <Typography variant="body1">{item.text}</Typography>
                    </MuiLink>
                    <Typography variant="caption" color="text.secondary">{item.subtext}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Etkinlikler Bölümü */}
            <Box sx={{ mt: 4 }}>
                <SectionTitle>Etkinlikler</SectionTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #eee', p: 2 }}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, textAlign: 'center', mr: 2 }}>
                        <Typography variant="h4" fontWeight="bold">31</Typography>
                        <Typography variant="body1">JUL</Typography>
                    </Box>
                    <Typography variant="h6">Yaklaşan Etkinlik Bulunmamaktadır</Typography>
                </Box>
            </Box>

            {/* Tavsiyeler ve Yemekler Bölümü */}
            <Grid container spacing={4} sx={{ mt: 0 }}>
                <Grid item xs={12} sm={6}>
                    <SectionTitle>Kıbrısla İlgili Tavsiyeler</SectionTitle>
                    <Card>
                        <CardMedia component="img" height="180" image={slideImage1} alt="Ercan Havalimanı" />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Kıbrıs'ta ne yapılır, Kıbrıs'ta nerelere gidilir, Kıbrıs'ta alışveriş yaparken pazarlık varmıdır.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SectionTitle>Kıbrıs Yemekleri</SectionTitle>
                     <Card>
                        <CardMedia component="img" height="180" image={slideImage1} alt="Kıbrıs Yemekleri" />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Eğer Kıbrıslıysanız ya da yolunuz bir süreliğine Kıbrıs'a düşmüşse kendinizi mümkün olduğunca şanslı hissedebilirsiniz.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Kıbrıs Türk Kültürü Bölümü */}
            <Box sx={{ mt: 4 }}>
                <SectionTitle>Kıbrıs Türk Kültürü</SectionTitle>
                <Grid container spacing={2}>
                    {kulturData.map((item) => (
                        <Grid item xs={12} sm={6} md={3} key={item.title}>
                            <Card>
                                <CardMedia component="img" height="120" image={item.image} alt={item.title} />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="body1">{item.title}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

          </Grid>

          {/* Sağ Sütun: Kenar Çubuğu */}
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
