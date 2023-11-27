import { createSlice } from '@reduxjs/toolkit'

type CartSlice = {
	orders: string[]
}

const initialState: CartSlice = {
	orders: [],
}

const cartSlice = createSlice({
	name: '@cart',
	initialState,
	reducers: {},
})

export const {} = cartSlice.actions
export default cartSlice.reducer
