import React from 'react';
import { Box, Typography, TextField, IconButton, List, ListItem, ListItemText, Divider, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Başlıklar için ortak stil
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
const announcements = [
  { title: 'KIBRIS TÜRK KÜLTÜR DERNEĞİ GENEL MERKEZİ 55.OLAĞAN GENEL KURUL TOPLANTISI ERTELEME TUTANAĞI', date: '25 Temmuz 2025' },
  { title: 'YENİ ÜYELİK DUYURUSU', date: '15 Temmuz 2025' },
];

const columnists = [
    { name: 'İsmail Bozkurt', avatar: '/path/to/avatar1.jpg' },
    { name: 'Prof. Dr. Ata Atun', avatar: '/path/to/avatar2.jpg' },
];

function Sidebar() {
  return (
    <Box>
      {/* Site İçi Arama */}
      <Box sx={{ mb: 4, p: 2, border: '1px dashed #ccc' }}>
        <Typography variant="h6" sx={{ mb: 1, borderBottom: '1px solid #eee', pb: 1 }}>
          Site İçi Arama
        </Typography>
        <Box component="form" sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Aradığınız kelime"
            fullWidth
            sx={{ mr: 1 }}
          />
          <IconButton type="submit" sx={{ p: '10px', backgroundColor: 'primary.main', color: 'white', '&:hover': {backgroundColor: '#b71c1c'} }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Duyurular */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle>Duyurular</SectionTitle>
        <List disablePadding>
          {announcements.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start" sx={{px: 0}}>
                <ListItemText
                  primary={
                    <Typography component="span" variant="body1" color="text.primary" fontWeight="bold">
                      {item.title}
                    </Typography>
                  }
                  secondary={item.date}
                />
              </ListItem>
              {index < announcements.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Köşe Yazarları */}
      <Box>
        <SectionTitle>Köşe Yazarları</SectionTitle>
        <List disablePadding>
          {columnists.map((item, index) => (
             <React.Fragment key={index}>
                <ListItem alignItems="center" sx={{px: 0}}>
                    <Avatar alt={item.name} src={item.avatar} sx={{ mr: 2 }} />
                    <ListItemText primary={item.name} />
                </ListItem>
                {index < columnists.length - 1 && <Divider component="li" />}
             </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
