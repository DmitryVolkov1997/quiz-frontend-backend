import { EnumCategory } from '@/types/category-interfaces'

export type Inputs = {
	question: string
	answerA: string
	answerB: string
	answerC: string
	answerD: string
	answerE: string
	select: string
	category: EnumCategory
}

export type FormErrors = {
	[key in keyof Inputs]?: {
		message: string
	}
}
