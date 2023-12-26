import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error:null,
    items:[],
    backdropOpen:false
}

export const cartSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

        addItem:(state,action) => {
            let modified = false;
            const item = action.payload.item;

            if(state.items.length > 0){

                let newItems = state.items.map((data) => {
                    if(data.id === item.id){
                        data.quantity = item.quantity;
                        modified = true;
                    }
                    return data;
                })

                state.items = newItems;

            }
            

            if(!modified){
                state.items.push(item)
            }
        },

        decreseQuantity:(state,action) => {
            let modified = false;
            const item = action.payload.item;

            if(state.items.length > 0){

                let newItems = state.items.map((data) => {
                    if(data.id === item.id){
                        data.quantity = item.quantity;
                        modified = true;
                    }
                    return data;
                })

                state.items = newItems;

            }
        },


        removeItem:(state,action) => {
            const id = action.payload.itemId;

            if(state.items.length > 0){

                let newItems = state.items.filter((data) => {
                    return data.id != id;
                })

                state.items = newItems;
            }
        },

        handleOpen:(state,action) => {
            // state.backdropOpen = action.payload.open;
            state.backdropOpen = !state.backdropOpen;


        }

    }
});

export const {addItem,removeItem,decreseQuantity,handleOpen} 
    = cartSlice.actions;

export default cartSlice.reducer;