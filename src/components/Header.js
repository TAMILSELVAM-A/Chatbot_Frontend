import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [{ label: 'Home', nav: "hero" }, { label: 'Rooms', nav: "rooms" }, { label: 'Amenities', nav: "features" }, { label: 'Contact', nav: "footer" }];

    const renderNavItems = () => (
        navItems.map((item) => (
            <Button key={item} color="inherit" sx={{ mx: 1, color: "black" }} onClick={() => onNavigate(item.nav)}>{item.label}</Button>
        ))
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                background: isScrolled
                    ? 'linear-gradient(to right, #f5f5f5, #e0e0e0)'
                    : 'transparent',
                boxShadow: isScrolled ? 1 : 0,
                transition: 'background 0.3s, box-shadow 0.3s',
            }}
        >
            <Toolbar sx={{ height: '80px' }}>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <img
                        src="https://www.theleela.com/themes/custom/leela/app/images/icons/Leelalogo.png"
                        alt="The Leela Logo"
                        style={{ height: '50px', marginRight: '20px' }}
                    />
                </Box>
                {isMobile ? (
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box sx={{ display: 'flex' }}>
                        {renderNavItems()}
                    </Box>
                )}
                <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => setDrawerOpen(false)}
                        onKeyDown={() => setDrawerOpen(false)}
                    >
                        <List>
                            {navItems.map((item) => (
                                <ListItem button key={item}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
