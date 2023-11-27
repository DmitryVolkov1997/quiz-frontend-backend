import FinishedQuiz from '@/components/finished-quiz/FinishedQuiz'
import Layout from '@/components/layout/Layout'
import QuizList from '@/components/quiz-list/QuizList'
import Container from '@/components/ui/container/Container'
import { useQuizByCategory } from '@/hooks/useQuizByCategory'
import { IAnswerState } from '@/types/answer-state-interface'
import { Box, Heading, Spinner } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './QuizPage.module.scss'

interface IQuizPage {}

const QuizPage: FC<IQuizPage> = ({}) => {
	// const { list } = useSelector((state: RootState) => state.quiz)
	const { category } = useParams()
	const { data: list = [], isLoading } = useQuizByCategory(category)
	const [answerState, setAnswerState] = useState<IAnswerState | null>(null)
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [isFinished, setIsFinished] = useState<boolean>(false)
	const [results, setResults] = useState<{ [key: string]: string }>({})

	function timeoutQuiz() {
		const timeout = window.setTimeout(() => {
			if (isFinishedQuiz()) {
				setIsFinished(true)
			} else {
				setCurrentQuestion(prev => prev + 1)
				setAnswerState(null)
			}
		}, 1000)
		return () => window.clearTimeout(timeout)
	}

	const onClickNextQuestion = (answerId: number) => {
		if (answerState) {
			const key = +Object.keys(answerState)[0]

			if (answerState[key] === 'success' || answerState[key] === 'error') {
				return
			}
		}

		const isCorrect = list[currentQuestion].rightAnswerId === answerId

		if (isCorrect) {
			if (!results[list[currentQuestion].id]) {
				setResults(prevState => ({
					...prevState,
					[list[currentQuestion].id]: 'success',
				}))
			}

			setAnswerState({
				[answerId]: 'success',
			})

			timeoutQuiz()
		} else {
			if (!results[list[currentQuestion].id]) {
				setResults(prevState => ({
					...prevState,
					[list[currentQuestion].id]: 'error',
				}))
			}

			setAnswerState({
				[answerId]: 'error',
			})

			timeoutQuiz()
		}
	}

	const resetQuiz = () => {
		setAnswerState(null)
		setCurrentQuestion(0)
		setIsFinished(false)
		setResults({})
	}

	const isFinishedQuiz = () => {
		return list.length === currentQuestion + 1
	}

	return (
		<Layout>
			<Container>
				<Box
					className={styles.quiz}
					boxShadow='md'
					p='10'
					rounded='md'
					borderWidth='1.2px'
				>
					{isLoading && (
						<Box className='flex justify-center w-full'>
							<Spinner />
						</Box>
					)}

					{isFinished ? (
						<Box className={styles.center}>
							<FinishedQuiz
								resetQuiz={resetQuiz}
								results={results}
								list={list}
							/>
						</Box>
					) : list.length ? (
						<>
							<Box>
								<Box className={styles.left}>
									Вопрос {currentQuestion + 1} из {list.length}
								</Box>
								<Heading className={styles.title}>
									{list[currentQuestion].question}
								</Heading>
							</Box>

							<QuizList
								answers={list[currentQuestion].answers}
								answerState={answerState}
								onClickNextQuestion={onClickNextQuestion}
							/>
						</>
					) : (
						<Heading>Упс! Ничего не найдено</Heading>
					)}
				</Box>
			</Container>
		</Layout>
	)
}

export default QuizPage
