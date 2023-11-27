export enum EnumCategory {
	HTML = 'html',
	CSS = 'css',
	JavaScript = 'javascript',
	Accessibility = 'accessibility',
}

export interface ICategory {
	id: number
	name: string
	to: string
	category: EnumCategory
}
