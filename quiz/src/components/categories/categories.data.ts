import { EnumCategory, ICategory } from '@/types/category-interfaces'

export const categoriesList: ICategory[] = [
	{
		id: 1,
		name: 'HTML',
		to: 'quiz/html',
		category: EnumCategory.HTML,
	},
	{
		id: 2,
		name: 'CSS',
		to: 'quiz/css',
		category: EnumCategory.CSS,
	},
	{
		id: 3,
		name: 'JavaScript',
		to: 'quiz/javascript',
		category: EnumCategory.JavaScript,
	},
	{
		id: 4,
		name: 'Accessibility',
		to: 'quiz/accessibility',
		category: EnumCategory.Accessibility,
	},
]
