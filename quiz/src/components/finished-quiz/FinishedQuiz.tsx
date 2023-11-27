import { IQuiz } from '@/types/quiz.inteface'
import { Box, Button } from '@chakra-ui/react'
import { Check, XCircle } from 'lucide-react'
import { FC } from 'react'
import styles from './FinishedQuiz.module.scss'

interface IFinishedQuiz {
	resetQuiz: () => void
	results: { [key: string]: string }
	list: IQuiz[]
}

const FinishedQuiz: FC<IFinishedQuiz> = ({ resetQuiz, results, list }) => {
	const successCount = Object.keys(results).reduce((acc, key) => {
		if (results[key] === 'success') {
			return acc + 1
		}

		return acc
	}, 0)

	return (
		<Box className={styles.finished}>
			{list.map((el, idx) => {
				const isSuccess = results[el.id] === 'success'

				return (
					<Box key={el.id} className={styles.row}>
						<Box className={styles.wrap}>
							{isSuccess ? <Check color='green' /> : <XCircle color='red' />}
							<Box>{idx + 1})</Box>
						</Box>

						<Box as='p'>{el.question}</Box>
					</Box>
				)
			})}
			<Box className={styles.result}>
				Верно отвечено: {successCount} из {list.length}
			</Box>
			<Button
				className={styles.repeat}
				colorScheme='red'
				onClick={() => resetQuiz()}
			>
				Начать заново
			</Button>
		</Box>
	)
}

export default FinishedQuiz
