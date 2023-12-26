import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
    <Container maxWidth={"xl"} sx={{display:"flex", alignItems:"center" , justifyContent:"center", mt:"5vmax"}}>
    <Typography variant="h2" align='center' >
            <p>Welcome to Food's</p> 
            <p>Kitchen</p> 

        <Link to={"/products"}>
        <Button variant="contained">Go To Menu</Button>
        </Link>
        </Typography>
        </Container>
    </>
  )
}

export default Home;