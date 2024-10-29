import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem("cartCount")) || [],
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action) => {
      const exist = state.value.find(item => item.id === action.payload.id);
      if (!exist){
        state.value.push(action.payload);
        localStorage.setItem("cartCount", JSON.stringify(state.value));
      }
    },
    removeFromCart: (state, action) => {
      // Filtrar el carrito para eliminar el producto
      state.value = state.value.filter(item => item.id !== action.payload);

      // Actualizar el localStorage
      localStorage.setItem("cartCount", JSON.stringify(state.value));
    }
  },
});
export const selectCartValue = (state) => state.cart.value;
export const { addItem,removeFromCart } = cart.actions;
