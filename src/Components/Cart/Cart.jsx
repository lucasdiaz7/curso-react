import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import style from "./Cart.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Swal from "sweetalert2";
import Form from "../Form/Form";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Cart = () => {
  const { cart, priceTotal, deletProduct, limpiarCarro} = useContext(CartContext);
  const priceTot = priceTotal()
  const[form, setForm] = useState(false)
  const [orderId, setOrderId] = useState(null)


  const eliminar = (item) => {

    Swal.fire({
      title: 'Estas seguro que deseas eliminar el producto del carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Borrar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Se eliminó correctamente el producto del carrito', '', 'success')
        deletProduct(item.id)
      }
    })
  }

  if(orderId) {
    return(
      <div className={style.comprobante}>
        <h1>Gracias por su compra</h1>
        <h4>Su numero de comprobante es: {orderId}</h4>
        <Link to="/">
          <button className={style.btnCompr} onClick={limpiarCarro}>Seguir comprando</button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      { !form? (
         <div>
         {
           cart.length == 0? 
           <div className={style.vac}>
            <img src="https://res.cloudinary.com/dmgvv9nbt/image/upload/v1680647596/curso-react/cart/external-shopping-cart-black-friday-5-sbts2018-outline-color-sbts2018_j5e5jg.png" alt="Cart" />
             {/* <ShoppingCartIcon sx={{size: "100px"}} /> */}
             <h4 style={{marginTop: "10px"}} >Su carrito esta vacio</h4> 
           </div> :
        <div>
        <div className={style.carr}>
        <TableContainer sx={{position: "center", width: "80%", top:"11%", backgroundColor: "#e2e2e2"}} className={style.box} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Carrito de Compras
              </TableCell>
            </TableRow> 
            <TableRow sx={{ minWidth: 650 }} aria-label="simple table">
              <TableCell align="right">Producto</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Precio</TableCell>
            </TableRow>
        
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell><img style={{maxWidth: "120px" , maxHeight: "120px"}} src={item.img} alt={item.name} /></TableCell>
                <TableCell ><Link style={{textDecoration: "none" , color: "black"}} to={`/item/${item.id}`}>{item.name}</Link></TableCell> 
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <IconButton onClick={()=> eliminar(item)}  sx={{marginTop: "56px"}} aria-label="delete" color="error">
                  <DeleteIcon  />
                </IconButton>
              </TableRow>
              ))}
         
           
          </TableBody>
        </Table>
      </TableContainer>
              </div>
              <div className={style.compra}>
                <div className={style.prec}>
                  <TableCell className={style.tCell} >SubTotal:</TableCell>
                  <TableCell >{priceTot}</TableCell>
                </div  >
                <div className={style.prec}>
                  <TableCell className={style.tCell}  colSpan={2}>Total</TableCell>
                  <TableCell >{priceTot}</TableCell>
                </div>
                <Stack sx={{display:"flex", justifyContent: "flex-end"}} spacing={2} direction="row">
                  <Button sx={{marginRight: "10px", width: "210px"}} className={style.btnFinalizar} variant="outlined" onClick={()=> setForm(true)}>Finalizar Compra</Button>
                </Stack>
              </div>
      </div>
         }
       </div>
      ) : ( 
      <Form cart={cart} priceTotal={priceTotal} setOrderId={setOrderId} setForm={setForm} />
     )} 
    </div>
  );
};

export default Cart;



             

             
      