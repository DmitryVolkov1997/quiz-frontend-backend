import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart-slice/cartSlice'
import quizReducer from './quiz-slice/quizSlice'

export const rootReducer = combineReducers({
	cart: cartReducer,
	quiz: quizReducer,
})
