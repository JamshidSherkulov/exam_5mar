import React from 'react';
import {Stack, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import productsData from '../utils/productsData'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Products = () => {
  return (
    <Stack direction='row' flexWrap='wrap' mx='auto' justifyContent='space-between'  sx={{width: '80%'}}>
      {productsData.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345, m: 2, width: 345 }}>
          <img
            style={{ height: 350, objectFit: 'cover',  width: '100%', display: 'block', mx: 'auto' }}
            src={product.image}
            alt={product.title}
          />
          <CardContent>
            <Typography sx={{display: 'flex', alignItems: 'center'}} gutterBottom variant="h5" component="div">
              <FavoriteIcon />
              {product.title}
            </Typography>
            <Typography sx={{display: 'flex', alignItems: 'center', color: 'gray'}} variant='body1'>
              {product?.rating ? <StarIcon fontSize='medium' sx={{color: 'yellow', opacity: '0.7'}} /> : undefined}
              {product.rating}
            </Typography>
          </CardContent>
          <CardActions sx={{m: '10px'}}>
            <Button size="medium" variant='contained'>Korzinka</Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  )
}

export default Products