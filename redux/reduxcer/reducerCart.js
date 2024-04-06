import {createSlice} from '@reduxjs/toolkit'
import { list } from 'firebase/storage'
import { Alert } from 'react-native';

const initialState ={
    listCart:[]
}


const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            const existingItemIndex = state.listCart.findIndex(
                item => item.id === action.payload.id
            );
            if (existingItemIndex !== -1) {
                state.listCart[existingItemIndex].quantity++;
            } else {
                state.listCart.push({...action.payload, quantity: 1});
            }
        },
        deleteCart(state, action) {
            const existingItemIndex = state.listCart.findIndex(
                item => item.id === action.payload.id
            );
            if (existingItemIndex !== -1) {
                if (state.listCart[existingItemIndex].quantity > 0) {
                    state.listCart[existingItemIndex].quantity--;
                    if (state.listCart[existingItemIndex].quantity === 0) {
                        state.listCart.splice(existingItemIndex, 1);
                    }
                }
            }
        }
    }
});

export const {addCart,deleteCart} = CartSlice.actions
export default CartSlice.reducer;
