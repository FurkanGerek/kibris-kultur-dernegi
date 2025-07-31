import React from 'react';
import { Menu, MenuItem, Box, Fade } from '@mui/material';
import { Link } from 'react-router-dom'; // Link'i import ediyoruz

function CascadingMenuItem({ children, submenuItems, onSubMenuClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMouseEnter = (event) => setAnchorEl(event.currentTarget);
  const handleMouseLeave = () => setAnchorEl(null);

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{ position: 'relative' }}>
      <MenuItem selected={Boolean(anchorEl)} sx={{ justifyContent: 'space-between', width: '100%' }}>
        {children}
        <span style={{ marginLeft: '16px' }}>&rsaquo;</span>
      </MenuItem>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        MenuListProps={{ onMouseLeave: handleMouseLeave }}
        TransitionComponent={Fade}
        transitionDuration={200}
      >
        {/* GÜNCELLENDİ: Her bir alt menü elemanı artık kendi linkine sahip */}
        {submenuItems.map((item) => (
          <MenuItem key={item.text} component={Link} to={item.path} onClick={onSubMenuClick}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default CascadingMenuItem;