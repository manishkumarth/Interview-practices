import { create } from "zustand";


export const useTodo=create((set)=>(
    {
        todos:[{name:"manish",age:24,contact:9798293519,id:Date.now()}],
        setTodo:(paylods)=> set((state)=>({todos:[...state.todos,paylods]})),
        deleteTodos:(id)=> set((state)=>(
            {todos:[...state.todos.filter((item)=>item.id!==id)]}
        ))
    }
))