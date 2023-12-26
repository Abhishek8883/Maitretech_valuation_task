import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

import { addItem,removeItem,decreseQuantity} from '../../features/cart/cartReducer';

export default function ImgMediaCard({item,id}) {

  const dispatch = useDispatch();

  const [total, setTotal] = React.useState(0);
  const [cost, setCost] = React.useState(0);

  const addHandler = () => {
    let newTotal = total + 1;
    let cost = newTotal * item.price
    setTotal(newTotal);
    setCost(cost);
    dispatch(addItem({item:{
      id,
      quantity:newTotal,
      price:item.price,
      name:item.name
    }}))
  }

  const removeHandler = () => {

    let newTotal = 0;
    let cost = 0;
    if(total > 0){
      newTotal = total - 1;
      cost = newTotal * item.price
    }
    setTotal(newTotal);
    setCost(cost);

    if(newTotal <= 0){
      dispatch(removeItem({itemId:id}))
    }else{
      dispatch(decreseQuantity({item:{
        id,
        quantity:newTotal,
        price:item.price,
        name:item.name
      }}))
    }
    
  }


  return (
    <Card sx={{ maxWidth: 400,padding:"0.5rem" , margin:"1rem"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`assets/${item.image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {item.price}
          
        </Typography>
        {total ? 
          <Typography variant="body2" color="text.secondary">
          Total: {total}
        </Typography>
        :
        ""
      }

      {cost ? 
          <Typography variant="body2" color="text.secondary">
          Cost(INR): {cost}   
        </Typography>
        :
        ""
      }
        
       
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={addHandler}>+</Button>

        {total ? 
        <Button  variant="contained" size="small" onClick={removeHandler}>-</Button> 
        :
        <Button disabled  variant="contained" size="small">-</Button>
        }
      </CardActions>
    </Card>
  );
} 