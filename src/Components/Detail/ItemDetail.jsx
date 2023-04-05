import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import style from "./itemDetail.module.css"



const ItemDetail = ({listQuantity, productDetail, onAdd}) => {
 
  return (
    <div  className={style.fondColor} >
      <Card 
      sx={{ display: 'flex', margin: 10, backgroundColor: "#e2e2e2" }} 
      className={style.fon}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography sx={{marginTop: 3}}component="div" variant="h5">
              {productDetail.name}
            </Typography>
            <Typography sx={{ marginBottom:6}}component="div" variant="h6">
              $ {productDetail.price}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {productDetail.description}
            </Typography>
            <Typography>
              {!productDetail.stock? "sin stock" : null}
            </Typography>
            <ItemCount stock={productDetail.stock} onAdd={onAdd} initial={listQuantity}  />
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 600, height: 400, marginRight: 10 }}
          image={productDetail.img}
          alt={productDetail.name}
        />     
      </Card>
    </div>
  );
};

export default ItemDetail;
