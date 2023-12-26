import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error:null,
    products:null, 
}

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setProducts:(state,action) => {
            state.loading = false;
            state.products = action.payload.products;
        },

        fetchProducts:(state) => {
            state.loading = true;
        }

    }
});

export const {setProducts,fetchProducts} 
    = productSlice.actions;

export default productSlice.reducer;