import { EnumCategory } from './category-interfaces'

export interface IAnswer {
	answer: string
}

export interface IQuiz {
	id: number
	rightAnswerId: number
	question: string
	answers: IAnswer[]
	category: EnumCategory
}
