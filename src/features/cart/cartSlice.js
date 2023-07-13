import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cart:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        deleteItem:(state,action)=>{
            state.cart=state.cart.filter(item=>item.pizzaId !== action.payload)
        },
        incraseItemQuantity:(state,action)=>{
            const item=state.cart.find(item=>item.pizzaId===action.payload)
            item.quantity++
            state.totalPrice=item.quantity*state.unitPrice 
        },
        decreaseItemQuantity:(state,action)=>{
            const item=state.cart.find(item=>item.pizzaId===action.payload)
            item.quantity--

            if(item.quantity===0) cartSlice.caseReducers.deleteItem(state,action) 

            state.totalPrice=item.quantity*state.unitPrice 

        },
        clearCart:(state,action)=>{
            state.cart=[]
        }
    }
})



export const {addToCart,deleteItem,incraseItemQuantity,decreaseItemQuantity,clearCart} = cartSlice.actions
export default cartSlice.reducer


export const getAllQuantityCount = state=>state.cart.cart.reduce((sum,item)=> sum + item.quantity,0)
export const getSumOfallPizza=state=>state.cart.cart.reduce((sum,item)=> sum + item.totalPrice,0)
export const getCartItemQuantity=id=>state=>state.cart.cart.find(item=>item.pizzaId===id)?.quantity??0
export const getCart=state=>state.cart.cart
