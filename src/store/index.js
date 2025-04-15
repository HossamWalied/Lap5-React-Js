import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import createReducer from './slices/cart'
const store = configureStore({
    reducer:{
        counter : counterReducer,
        cart : createReducer,
    }
})
export default store;