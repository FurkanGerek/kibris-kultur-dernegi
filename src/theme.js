import { createTheme } from '@mui/material/styles';

// Aposto'dan ilham alan renk paleti
const theme = createTheme({
  palette: {
    primary: {
      main: '#C81432', // Kıbrıs bayrağı kırmızısı
    },
    secondary: {
      main: '#E76F51', // Vurgu ve butonlar için sıcak bir turuncu/kiremit
    },
    background: {
      default: '#F5F5F5', // Çok hafif kırık beyaz bir arka plan
      paper: '#FFFFFF',    // Kartlar ve diğer yüzeyler için saf beyaz
    },
    text: {
      primary: '#1B263B', // Ana metinler için koyu gri
      secondary: '#415A77', // İkincil, daha az önemli metinler için
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700, color: '#1B263B' },
    h5: { fontWeight: 600, color: '#1B263B' },
    h6: { fontWeight: 600, color: '#415A77' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;