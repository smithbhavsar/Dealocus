import React from 'react';
import {AppBar , Badge, IconButton, Toolbar , Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    return (
        <div>
        <AppBar>
        <Toolbar>
            <Typography variant="h6"
            color="inherit"
            noWrap 
            style={{flexGrow: 1,
            alignItems: 'center',
            display: 'flex',
            textDecoration: 'none',
            }}>
            Dealocus
            </Typography>
        <div style={{flexGrow: 1}}/>
        <IconButton aria-label='show items in cart' color='inherit' >
            <Badge badgeContent={4} color='secondary'>
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>
        </div>
    );
}

export default Navbar;