import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';

const drawerWidth = 240;

function AdminLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sol Taraftaki Kalıcı Menü */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Girne Panel
          </Typography>
        </Toolbar>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Anasayfa" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Makaleler" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Sağ Taraftaki Ana İçerik Alanı */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Bu boşluk, içeriğin app bar'ın altına girmesini engeller */}
        
        {/* Hangi sayfadaysak (Anasayfa, Makaleler vb.) burada görünecek */}
        <Outlet />
      </Box>
    </Box>
  );
}

// En önemli kısım: Bu satır, bileşeni dışa aktararak App.jsx'in onu bulmasını sağlar.
export default AdminLayout;