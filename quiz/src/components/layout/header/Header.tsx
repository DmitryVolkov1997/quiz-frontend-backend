import Container from '@/components/ui/container/Container'
import { Box } from '@chakra-ui/react'
import { GraduationCap } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import ThemeSwitcher from './theme-switcher/ThemeSwitcher'

const Header: FC = () => {
	return (
		<Box as='header' className={styles.header}>
			<Container>
				<div className={styles.row}>
					<Link to='/'>
						<GraduationCap size={53} />
					</Link>
					<ThemeSwitcher />
				</div>
			</Container>
		</Box>
	)
}

export default Header
