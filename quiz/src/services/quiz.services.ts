import { axiosClassic } from '@/api/api'
import { EnumCategory } from '@/types/category-interfaces'
import { IQuiz } from '@/types/quiz.inteface'

export class QuizService {
	async getQuizByCategory(category: string) {
		return await axiosClassic.get<IQuiz[]>(`/quizzes?category=${category}`)
	}

	async createQuiz({
		quiz,
		category,
	}: {
		quiz: Omit<IQuiz, 'id'>[]
		category: EnumCategory
	}) {
		return await axiosClassic.post(`/quizzes/${category}`, quiz)
	}
}

export default new QuizService()
