import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Backdrop from '@mui/material/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import {handleOpen} from "../../../features/cart/cartReducer"

import Summary from "../../cart/Summary"


const Header = () => {

  const {items,backdropOpen} = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const openHandler = () => {
    dispatch(handleOpen({open:true}))
  };


  const backdrop = (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <Summary />
      </Backdrop>
    </div>
  )

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="sm"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <RestaurantIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food's Resturant
          </Typography>


        {(items && items.length > 0) ? 
        <IconButton
        size="sm"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={openHandler}
      >
        <Badge badgeContent={items.length} color='error'>
        <ShoppingCartIcon />
        </Badge>
      </IconButton>
      :
      ""

        }
          
          
        </Toolbar>
      </AppBar>
    </Box>
    {backdrop}
    </>
  )
}

export default Header