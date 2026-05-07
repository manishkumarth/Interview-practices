import { useState, useRef } from 'react'
import './App.css'
import { useCount } from './store/useCount'
import { useTodo } from './store/useTodo'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
function App() {
  const { count, increase, decrease, increaseWith, reset } = useCount()
  const { todos, setTodo, deleteTodos } = useTodo()
  const [data, setData] = useState({ name: "manish" + 1, age: 20 + 1, contact: 9798293519, id: Date.now() })
  console.log(todos)
  const add = () => {
    setData((pre) => ({ name: pre.name + 1, age: pre.age + 1, contact: pre.contact + 1, id: Date.now() }))
    setTodo(data)
  }
  const deleteTodo = (id) => {
    deleteTodos(id)
  }
  return (
    <>
     <h1 className='text-center text-2xl m-10'>Zustand State Management lib</h1>
      <div className='flex justify-center gap-5 border m-5 p-10'>

       

        <p className='bg-pink-400 w-25 cursor-pointer h-auto p-1 rounded'>Count: {count}</p>
        <button className='bg-pink-400 w-25 cursor-pointer h-auto p-1 rounded' onClick={() => increase()}>count+</button>
        <button className='bg-pink-400 w-25 cursor-pointer h-auto p-1 rounded' onClick={() => reset()}>reset 0 </button>
        <button className='bg-pink-400 w-25 cursor-pointer h-auto p-1 rounded' onClick={() => decrease()}>count-</button>
        <button className='bg-pink-400 w-25 cursor-pointer h-auto p-1 rounded' onClick={() => increaseWith(2)}>count+2</button>
      </div>



      <div className='flex flex-col gap-5 overflow-x-0'>
        <div className='flex justify-center'>
          <button className='item-center bg-pink-400 w-25 cursor-pointer h-auto p-1 rounded' onClick={add}>add Todos</button>
        </div>

        <AnimatePresence>
          {
            todos.map((item) => (
              <motion.div
                layout
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 200 }}
                key={item.id} className='flex justify-between gap-2 px-4 py-2 md:mx-20 mx-2 text-xs sm:mx-10 shadow-md shadow-lime-950 '>
                <h1>{item.name}</h1>
                <h1>{item.age}</h1>
                <h1>{item.contact}</h1>
                <h1>{item.id}</h1>
                <button
                  className='text-red-200 bg-pink-500 hover:bg-pink-200 px-3 py-1 cursor-pointer hover:text-red-500 rounded ease-linear duration-100'
                  onClick={() => deleteTodo(item.id)}>x</button>
              </motion.div>
            ))
          }
        </AnimatePresence>
      </div>

    </>
  )
}

export default App
