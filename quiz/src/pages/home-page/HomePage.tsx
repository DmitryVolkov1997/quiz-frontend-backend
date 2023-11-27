import Categories from '@/components/categories/Categories'
import Layout from '@/components/layout/Layout'
import Container from '@/components/ui/container/Container'
import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './HomePage.module.scss'

interface IHomePage {}

const HomePage: FC<IHomePage> = ({}) => {
	return (
		<Layout>
			<Container>
				<Box className={styles.row}>
					<Box>
						<Heading className={styles.title}>
							Welcome to the <Box as='span'>Frontend Quiz!</Box>
						</Heading>

						<Box className={styles.subtitle}>Pick a subject to get started.</Box>
					</Box>

					<Categories />
				</Box>
			</Container>
		</Layout>
	)
}

export default HomePage
