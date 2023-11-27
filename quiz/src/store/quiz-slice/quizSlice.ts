import { IQuiz } from '@/types/quiz.inteface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type QuizSlice = {
	quizzes: Omit<IQuiz, 'id'>[]
}

const initialState: QuizSlice = {
	quizzes: [],
}

export const quizSlice = createSlice({
	name: '@quiz',
	initialState,
	reducers: {
		setQuizzes(state, action: PayloadAction<Omit<IQuiz, 'id'>>) {
			state.quizzes = [...state.quizzes, action.payload]
		},
		resetQuizzes(state) {
			state.quizzes = []
		},
	},
})

export const { setQuizzes, resetQuizzes } = quizSlice.actions
export default quizSlice.reducer
