import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Rating } from "flowbite-react";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        cart:  [],
       
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload.map((product) => ({
                ...product,
                stock: Math.floor(Math.random() * 100) + 1,
                Rating: parseFloat(Math.random() * 5).toFixed(1),
                Buying: Math.floor(Math.random() * 1000),
                diskusi: Math.floor(Math.random() * 100),
                ongkos: Math.floor(Math.random() * 10000),
                layanan: 1000,
            }))
        },
        addToCart: (state, action) => {
            const product = state.productList.find(
                (item) => item.id === action.payload.id
            );
            if (product && product.stock > 0) {
                const cartItem = state.cart.find(
                    (item) => item.id === action.payload.id
                );
                if (cartItem) {
                    cartItem.quantity += action.payload.quantity || 1;
                } else {
                    state.cart.push({ ...product, quantity: action.payload.quantity || 1});
                  
                }
                product.stock -= action.payload.quantity || 1;
            } else {
                console.warn("Produk tidak ditemukan");
            }
        },
        incrementQuantity: (state, action) => {
            const product = state.productList.find((item) => item.id === action.payload);
            const cartItem = state.cart.find((item) => item.id === action.payload);
            if(product && cartItem && product.stock > 0) {
                cartItem.quantity += 1;
                product.stock -= 1;
            }
            
            
           
            
            
        },
        decrementQuantity: (state, action) => {
            const cartItem = state.cart.find((item) => item.id === action.payload);
            const product = state.productList.find((item) => item.id === action.payload);
            if (cartItem && product && cartItem.quantity > 1) {
                cartItem.quantity -= 1;
                product.stock += 1;
            }else if (cartItem && product && cartItem.quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
                product.stock += 1;
            }

            
            
            
        },
        IncrementGlobalQuantity: (state, action) => {
            const product = state.productList.find((item) => item.id === action.payload.id);
            if (product && product.stock > 0) {
                product.stock -= action.payload.quantity || 1; 
            }
        },
        
        decrementGlobalQuantity: (state, action) => {
            const product = state.productList.find((item) => item.id === action.payload.id);
            if (product && product.stock >= 0) {
                product.stock += action.payload.quantity || 1; 
            }
        },
        

        removeToCart: (state, action) => {
            const cartItem = state.cart.find((item) => item.id === action.payload);
            if (cartItem) {
                const product = state.productList.find((item) => item.id === cartItem.id);
                if (product) {
                    product.stock += cartItem.quantity; 
                }
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            }

        },
     
        
       
    }

})



export const { setProductList, addToCart, incrementQuantity, decrementQuantity, removeToCart, IncrementGlobalQuantity, decrementGlobalQuantity  } = productSlice.actions;

export const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
})
console.log("store created :", store.getState())

store.subscribe(() => {
    console.log("store changed :", store.getState())
})

;

export default store