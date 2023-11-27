import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import Header from './header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	)
}

export default Layout
