import {  Box, Button, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { addItem,removeItem,decreseQuantity,handleOpen} from '../../features/cart/cartReducer';
import { Link } from 'react-router-dom';



const Summary = () => {
 
    const {items}  = useSelector(state => state.cart);
    const dispatch = useDispatch()

    const totalPrice = items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

   const addHandler = (item) => {
    let newTotal = item.quantity + 1;
    dispatch(addItem({item:{
      id:item.id,
      quantity:newTotal,
      price:item.price,
      name:item.name
    }}))
   }

   const removeHandler = (item) => {


    let total = item.quantity
    let newTotal = 0;
    let cost = 0;
    if(total > 0){
      newTotal = total - 1;
    }


    if(newTotal <= 0){
      dispatch(removeItem({itemId:item.id}))
    }else{
      dispatch(decreseQuantity({item:{
        id:item.id,
        quantity:newTotal,
        price:item.price, 
        name:item.name
      }}))
    }
    
  }

  const closeHandler = () => {
    dispatch(handleOpen())
  }

  return (
    <>
    <Paper maxWidth={"md"} sx={{width:"30vw",padding:"1rem"}}>
        <Typography variant='h6' align='left' mb={"10px"}>
            Order Summary
        </Typography>

        {(items && items.length > 0) ? 
          
            items.map((item) => (
              <>
              {/* {setTotalPrice(totalPrice + (item.price * item.quantity))} */}
              <Container maxWidth={"sm"} sx={{margin:"10px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Typography variant='body2'>
              {item.name}:
            </Typography>

            <Typography variant='body2'>
              {item.quantity}
            </Typography>

            <Box>
             
            <Button variant="contained" size="small" sx={{marginRight:"5px"}} onClick={() => addHandler(item)}>+</Button>
            <Button variant="contained" size="small" onClick={() => removeHandler(item)}>-</Button>
            </Box>



            </Container>

           
            </>    
            ))


          
        : 
        ""}   

        {totalPrice > 0 ? 

<Typography varient={"body2"} >
Total (INR) : {totalPrice}
</Typography>
:
""
        }



            <Box align={"right " } sx={{marginTop:"2rem"}}>
            <Link to={"/checkout"}> 
              <Button variant="contained" size="small" sx={{marginRight:"5px"}} onClick={closeHandler}>SAVE AND CHECHOUT</Button>
            </Link>

              <Button variant="text" size="small" onClick={closeHandler}>Close</Button>
              </Box>

              


    </Paper>
    </>
  );
}

export default Summary;