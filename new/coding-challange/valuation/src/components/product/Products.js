import React, { useEffect } from 'react';
import Container from "@mui/material/Container";
import ProductCard from "./ProductCard";
import { setProducts,fetchProducts } from '../../features/product/productSlice';
import { useDispatch,useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';



const Products = () => {

  const dispatch = useDispatch();
  const {products,loading} = useSelector(state => state.product)

  const getData=()=>{
    fetch('data/feeds.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        const data = myJson;
        dispatch(setProducts({products:myJson}))
      });
  }


  useEffect(()=>{
    dispatch(fetchProducts())
    getData()
  },[])
  

  return (
   <>
    {loading ? <h1>Loading ... </h1> 
    :
    <Container maxWidth={"xl"} sx={{padding:"2rem",display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>
      {products && products.map((item) => (
        <ProductCard item={item} id={uuidv4()}/>
      ))}
    </Container>
    }
   </>
  )
}

export default Products;    