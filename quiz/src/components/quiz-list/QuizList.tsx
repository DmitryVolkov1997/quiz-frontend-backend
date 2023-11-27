import { IAnswer } from '@/types/quiz.inteface'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import styles from './QuizList.module.scss'
import QuizItem from './quiz-item/QuizItem'

interface IQuizList {
	answers: IAnswer[]
	onClickNextQuestion: (answerId: number) => void
	answerState: { [key: string]: 'success' | 'error' } | null
}

const QuizList: FC<IQuizList> = ({
	answers,
	answerState,
	onClickNextQuestion,
}) => {
	return (
		<Box className={styles.list}>
			{answers.map((answer, idx) => {
				return (
					<QuizItem
						key={idx}
						idx={idx}
						answer={answer}
						onClickNextQuestion={onClickNextQuestion}
						answerState={answerState ? answerState[idx] : null}
					/>
				)
			})}
		</Box>
	)
}

export default QuizList
