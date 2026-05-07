
import {create} from 'zustand'
export const useCount=create((set)=>(
    {
        count:0,
        increase:()=>set((state)=>({...state,count:state.count+1})),
        decrease:()=>set((state)=>({...state,count:state.count-1})),
        reset:()=> set((state)=>({...state,count:state.count=0})),
        increaseWith:(paylod)=> set((state)=>({...state,count:state.count+paylod}))
    }
))