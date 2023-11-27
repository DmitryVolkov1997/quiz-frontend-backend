import quizServices from '@/services/quiz.services'
import { useQuery } from '@tanstack/react-query'

export const useQuizByCategory = (category: string = '') => {
	return useQuery({
		queryKey: ['category', category],
		queryFn() {
			return quizServices.getQuizByCategory(category)
		},
		select(data) {
			return data.data
		},
		enabled: !!category,
	})
}
