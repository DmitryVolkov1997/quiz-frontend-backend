import { Box } from '@chakra-ui/react'
import { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'

const Container: FC<PropsWithChildren> = ({ children }) => {
	return <Box className={styles.container}>{children}</Box>
}

export default Container
