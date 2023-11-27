import { EnumCategory, ICategory } from '@/types/category-interfaces'
import { Box, useColorMode } from '@chakra-ui/react'
import cn from 'classnames'
import { Braces, Code2, Paintbrush2, PersonStanding } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './CategoriesItem.module.scss'

interface ICategoriesItem {
	item: ICategory
}

const CategoriesItem: FC<ICategoriesItem> = ({ item }) => {
	const { colorMode } = useColorMode()

	switch (item.category) {
		case EnumCategory.HTML:
			return (
				<Box
					className={cn(styles.item, {
						[styles.dark]: colorMode === 'dark',
					})}
				>
					<Link to={item.to}>
						<Code2 color='orange' size={40} />
						<Box className={styles.name}>{item.name}</Box>
					</Link>
				</Box>
			)
		case EnumCategory.CSS:
			return (
				<Box
					className={cn(styles.item, {
						[styles.dark]: colorMode === 'dark',
					})}
				>
					<Link to={item.to}>
						<Paintbrush2 color='lightgreen' size={40} />
						<Box className={styles.name}>{item.name}</Box>
					</Link>
				</Box>
			)
		case EnumCategory.JavaScript:
			return (
				<Box
					className={cn(styles.item, {
						[styles.dark]: colorMode === 'dark',
					})}
				>
					<Link to={item.to}>
						<Braces color='lightblue' size={40} />
						<Box className={styles.name}>{item.name}</Box>
					</Link>
				</Box>
			)
		case EnumCategory.Accessibility:
			return (
				<Box
					className={cn(styles.item, {
						[styles.dark]: colorMode === 'dark',
					})}
				>
					<Link to={item.to}>
						<PersonStanding color='cyan' size={40} />
						<Box className={styles.name}>{item.name}</Box>
					</Link>
				</Box>
			)
	}
}

export default CategoriesItem
