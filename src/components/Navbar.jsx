import React from "react";
import logo  from '../assets/QPICK_logo.png';
import { Stack, TextField, Box, Badge } from '@mui/material'
import {FavoriteBorderOutlined , ShoppingCart} from '@mui/icons-material';
import {Link} from 'react-router-dom';

const Navbar = () => (
    <Stack
        direction='row'
        sx={{p: 3, background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
        <Box sx={{flex: 2}}>
            <Link to='/'><img src={logo} alt="logo" sx={{width: '50px', objectFit: 'cover'}} /></Link>
        </Box>
        <Box sx={{flex: 3}}>
            <TextField variant="outlined" sx={{width: '100%'}} label='Search' />
        </Box>
        <Box sx={{flex: 2, textAlign: 'end'}}>
            <Badge badgeContent={4} color='error' sx={{mx: 2}}>
                <FavoriteBorderOutlined fontSize="large" />
            </Badge>
            <Badge badgeContent={4} color='error'>
                <Link to='/cart'><ShoppingCart fontSize="large" color="primary"/></Link>
            </Badge>
        </Box>
    </Stack>
)

export default Navbar;
