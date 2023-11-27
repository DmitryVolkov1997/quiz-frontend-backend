import { Box, Button, Switch, useColorMode } from '@chakra-ui/react'
import { Moon, Sun } from 'lucide-react'
import { FC } from 'react'
import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box className={styles.switcher}>
			<Button className={styles.btn} onClick={toggleColorMode}>
				<Sun size={33} />
			</Button>
			<Button className={styles.btn} onChange={toggleColorMode}>
				<Switch size='lg' isChecked={colorMode === 'dark'} />
			</Button>
			<Button className={styles.btn} onClick={toggleColorMode}>
				<Moon size={33} />
			</Button>
		</Box>
	)
}

export default ThemeSwitcher
