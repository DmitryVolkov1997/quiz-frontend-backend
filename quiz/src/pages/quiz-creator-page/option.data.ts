import { EnumCategory } from '@/types/category-interfaces'

interface IOption {
	id: number
	value: string
	label: string
}

export const optionData: IOption[] = [
	{
		id: 1,
		value: '0',
		label: 'A',
	},
	{
		id: 2,
		value: '1',
		label: 'B',
	},
	{
		id: 3,
		value: '2',
		label: 'C',
	},
	{
		id: 4,
		value: '3',
		label: 'D',
	},
	{
		id: 5,
		value: '4',
		label: 'E',
	},
]

export const categories = [
	{
		id: 1,
		name: EnumCategory.HTML,
	},
	{
		id: 2,
		name: EnumCategory.CSS,
	},
	{
		id: 3,
		name: EnumCategory.JavaScript,
	},
	{
		id: 4,
		name: EnumCategory.Accessibility,
	},
]
