import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import style from "./Form.module.css"

// ----mui-----
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useFormik } from "formik";

const Form = ({cart, priceTotal, setOrderId, setForm}) => {
  const [user, setUser] = useState({ name: "", apellido: "", telefono: "", email: "" });
  let total = priceTotal()
  const formik = useFormik({
    initialValues:{
      nombre: "",
      apellido: "",
      email: "",
      telefono: ""
    },
    onSubmit: values => {
      let order = {
        buyer: user,
        items: cart,
        total
      }
      const orderCollection = collection(db, "order" )
    addDoc(orderCollection, order)
    // .then(res=> values(res.id))
    .then(res=> setOrderId(res.id))
    .catch(err => console.log(err))
    
    cart.map((prod) => {
      let refDoc = doc(db, "products", prod.id)
      updateDoc(refDoc, {stock: prod.stock - prod.quantity})
    })
    },
    validate: values => {
      let errores = {}
      const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
      if(!values.nombre){
        errores.nombre = "Este campo es obligatorio"
      }
      if(!values.apellido){
        errores.apellido = "Apellido es requerido"
      }
      if(!validEmail.test(values.email)){
        errores.email = "Ingresa un formato correcto"
      }
      if(!values.email){
        errores.email = "Email es requerido"
      }
      if(!values.telefono){
        errores.telefono = "Telefono es requerido"
      }
      if(values.telefono < 0){
        errores.telefono = "Telefono debe ser correcto"
      }

      return errores 
    }
  })
  
  const {values, handleChange, handleSubmit, errors} = formik

  return (
       <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      className={style.form}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="Nombre" 
        variant="outlined" 
        required
        error={errors.nombre? `${errors.nombre}` : null}
        helperText={errors.nombre? `${errors.nombre}` : null}
        name="nombre" 
        onChange={handleChange}
        value={values.nombre}/>
      
      <TextField 
        id="outlined-basic" 
        label="Apellido" 
        variant="outlined" 
        name="apellido" 
        required
        error={errors.apellido? `${errors.apellido}` : null}
        helperText={errors.apellido? `${errors.apellido}` : null}
        value={values.apellido} 
        onChange={handleChange}/>
      <TextField 
        id="outlined-basic" 
        fullWidth 
        label="Email" 
        type="email"
        required
        error={errors.email? `${errors.email}` : null}
        helperText={errors.email? `${errors.email}` : null}
        variant="outlined" 
        name="email" 
        value={values.email} 
        onChange={handleChange}/>
      <TextField 
        id="outlined-basic" 
        fullWidth label="Telefono"
        variant="outlined" 
        type = "number"
        required
        error={errors.telefono? `${errors.telefono}` : null}
        helperText={errors.telefono? `${errors.telefono}` : null}
        name="telefono" 
        value={values.telefono} 
        onChange={handleChange}/>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="error" onClick={() => setForm(false)}>
            Cancelar
        </Button>
        <Button className={style.btnC} variant="outlined" type="submit">Comprar</Button>
      </Stack>
    </Box>
  );
};

export default Form;
