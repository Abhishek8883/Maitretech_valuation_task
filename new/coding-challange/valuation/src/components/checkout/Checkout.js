import { Container, Typography } from '@mui/material'
import React from 'react'

const checkout = () => {
  return (
    <>
      < Container maxWidth={"md"} sx={{mt:"5vmax",borderBottom:"1px solid black",padding:"2rem"}}>
    <Typography variant="h2" align='center' sx={{marginBottom:"10px"}}>
            Checkout
        </Typography>

        <Typography varient={"h6"}>
            Thank you for your Order
        </Typography>
        </Container>
    </>
  )
}

export default checkout