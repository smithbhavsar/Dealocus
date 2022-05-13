import React from 'react';
import Grid from '@mui/material/Grid'
import Product from './Product/Product';

const products = [
    {id: '1' , name: 'Iphone', description:'Mehenga Phone', price: '₹ 80,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jDmsl_o23ykvAyxvS_q5ohfuXMm9Y_noAxdqup_DU-STsffGcL7nT8jlGdFPX8IMQOc&usqp=CAU'},
    {id: '2' , name: 'MacBook', description:'Kidney leva Laptop', price: '₹ 1,50,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jDmsl_o23ykvAyxvS_q5ohfuXMm9Y_noAxdqup_DU-STsffGcL7nT8jlGdFPX8IMQOc&usqp=CAU'},
    {id: '3' , name: 'Ipad', description:'JebTod Ipad', price: '₹ 45,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jDmsl_o23ykvAyxvS_q5ohfuXMm9Y_noAxdqup_DU-STsffGcL7nT8jlGdFPX8IMQOc&usqp=CAU'},
    {id: '4' , name: 'Sony Bravia Tv', description:'Jaan TV', price: '₹ 1,00,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jDmsl_o23ykvAyxvS_q5ohfuXMm9Y_noAxdqup_DU-STsffGcL7nT8jlGdFPX8IMQOc&usqp=CAU'},
];

const Products = () => {
    return (
        <main>
            <Grid container style={{justifyContent: 'center'}} spacing={4}>
                {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;