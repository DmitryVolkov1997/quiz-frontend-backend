import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './Categories.module.scss'
import CategoriesItem from './categories-item/CategoriesItem'
import { categoriesList } from './categories.data'

interface ICategories {}

const Categories: FC<ICategories> = ({}) => {
	return (
		<Box className={styles.categories}>
			{categoriesList.map(category => (
				<CategoriesItem key={category.id} item={category} />
			))}
		</Box>
	)
}

export default Categories
