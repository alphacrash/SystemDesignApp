import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const styles = {
    navbar: {
        width: '250px',
        backgroundColor: '#1a1a1a',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
    },
    listItem: {
        position: 'relative',
        color: '#ffffff',
        zIndex: 1,
        fontSize: '1.2rem',
        padding: '1em',
        transition: 'none',
        '&:hover': {
            backgroundColor: '#ffffff !important',
            color: '#1a1a1a',
            zIndex: 2,
        },
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            right: '0',
            width: '20%',
            height: '100%',
            borderRadius: '100%',
            display: 'none',
        },
        '&::before': {
            bottom: '-100%',
        },
        '&::after': {
            bottom: '100%',
        },
        '&:hover::before': {
            display: 'block',
            boxShadow: '1.2em -1.5em 0 0 white',
        },
        '&:hover::after': {
            display: 'block',
            boxShadow: '1.2em 1.5em 0 0 white',
        },
    },
    listIcon: {
        color: '#ffffff',
        '&:hover': {
            color: '#1a1a1a',
        },
    },
};

const LeftNavbar = () => {
    return (
        <Box sx={styles.navbar}>
            <List>
                <ListItem button sx={styles.listItem}>
                    <ListItemIcon sx={styles.listIcon}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Easy" />
                </ListItem>
                <Divider />
                <ListItem button sx={styles.listItem}>
                    <ListItemIcon sx={styles.listIcon}>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Medium" />
                </ListItem>
                <Divider />
                <ListItem button sx={styles.listItem}>
                    <ListItemIcon sx={styles.listIcon}>
                        <ContactMailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hard" />
                </ListItem>
            </List>
        </Box>
    );
};

export default LeftNavbar;
