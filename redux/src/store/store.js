import {configureStore} from '@reduxjs/toolkit'
import Counter from './slice/countSlice'
export const Store=configureStore({
    reducer:{
        CounterApp:Counter
    }
})