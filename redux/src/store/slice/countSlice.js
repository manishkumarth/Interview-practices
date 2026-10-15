import { createSlice } from "@reduxjs/toolkit";


const Counter=createSlice({
    name:"Counters",
    initialState:{count:0},
    reducers:{
        increaseCount:(state)=>{
            state.count++
        },
        decreaseCount:(state)=>{
            state.count-=1
        },
        resetCount:(state)=>{
            state.count=0
        },
        incByValue:(state,payload)=>{
            console.log("payload",payload)
            state.count+=payload.payload
        }
    }
})

export const {increaseCount,decreaseCount,resetCount,incByValue}=Counter.actions

export default Counter.reducer