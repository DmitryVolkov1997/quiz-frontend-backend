import { IAnswer } from '@/types/quiz.inteface'
import { Box, Button } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './QuizItem.module.scss'

interface IQuizItem {
	answer: IAnswer
	idx: number
	answerState: 'success' | 'error' | null
	onClickNextQuestion: (answerId: number) => void
}

const QuizItem: FC<IQuizItem> = ({
	answer,
	idx,
	answerState,
	onClickNextQuestion,
}) => {
	const getLetterQuestion = (idx: number) => {
		const letters = ['A', 'B', 'C', 'D', 'E']

		return letters[idx]
	}

	return (
		<Button
			className={styles.item}
			justifyContent={'start'}
			colorScheme={
				answerState === 'success'
					? 'green'
					: answerState === 'error'
					? 'red'
					: 'telegram'
			}
			onClick={() => onClickNextQuestion(idx)}
			height={'auto'}
		>
			<Box className={styles.letter}>{getLetterQuestion(idx)})</Box>
			<Box className={styles.answer}>{answer.answer}</Box>
		</Button>
	)
}

export default QuizItem
