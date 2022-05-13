import React from 'react';
import {Card, CardMedia, CardContent, CardActionArea, CardActions, Typography} from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Product({product}) {

    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
          image="https://www.deccanherald.com/sites/dh/files/gallery_images/aiphone13pm-fcvs-sv-sel-6.jpg"
          alt="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {product.description}
          </Typography>
        </CardContent>
        <CardActions style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '5%'}}>
            <AddShoppingCartIcon/>
        </CardActions>
      </CardActionArea>
    </Card>
    );
}

export default Product;