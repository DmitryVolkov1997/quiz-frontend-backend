import Layout from '@/components/layout/Layout'
import Container from '@/components/ui/container/Container'
import quizServices from '@/services/quiz.services'
import { resetQuizzes, setQuizzes } from '@/store/quiz-slice/quizSlice'
import { RootState, useAppDispatch } from '@/store/store'
import { Box, Button, Heading, Input, Select } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import styles from './QuizCreatorPage.module.scss'
import { inputData } from './input.data'
import { FormErrors, Inputs } from './input.type'
import { categories, optionData } from './option.data'

const QuizCreatorPage: FC = () => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isValid },
	} = useForm<Inputs>()
	const dispatch = useAppDispatch()
	const { quizzes } = useSelector((state: RootState) => state.quiz)
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: () =>
			quizServices.createQuiz({ quiz: quizzes, category: quizzes[0].category }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['quizzesPost'] })
		},
	})

	const onSubmit: SubmitHandler<Inputs> = data => {
		dispatch(
			setQuizzes({
				question: data.question,
				answers: [
					{ answer: data.answerA },
					{ answer: data.answerB },
					{ answer: data.answerC },
					{ answer: data.answerD },
					{ answer: data.answerE },
				],
				rightAnswerId: +data.select,
				category: data.category,
			})
		)
		reset()
	}

	const createQuiz = async () => {
		try {
			// Отправка данных создания теста
			await mutation.mutateAsync()

			// Сброс данных тестов
			dispatch(resetQuizzes())
		} catch (error) {
			console.error('Произошла ошибка при создании теста:', error)
		}
	}

	return (
		<Layout>
			<Container>
				<Box className={styles.creator} shadow={'md'} padding={8}>
					<Heading className={styles.title}>Создать тест</Heading>

					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						{inputData.map(el => {
							return (
								<Box className={styles.label} key={el.id} as='label'>
									{el.label}
									<Input
										type={el.type}
										{...register(
											el.name as
												| 'question'
												| 'answerA'
												| 'answerB'
												| 'answerC'
												| 'answerD'
												| 'answerE',
											{ required: 'Обязательное поле' }
										)}
									/>
									<Box className={styles.error} as='span'>
										{errors[el.label as keyof FormErrors]?.message}
									</Box>
								</Box>
							)
						})}

						<Controller
							name='select'
							control={control}
							rules={{ required: 'Выберите вариант' }}
							render={({ field }) => (
								<Select my={3} placeholder='Правильный вариант' {...field}>
									{optionData.map(el => (
										<option key={el.value} value={el.value}>
											{el.label}
										</option>
									))}
								</Select>
							)}
						/>

						<Controller
							name='category'
							control={control}
							rules={{ required: 'Выберите категорию' }}
							render={({ field }) => (
								<Select my={3} placeholder='Категория' {...field}>
									{categories.map(el => (
										<option key={el.id} value={el.name}>
											{el.name}
										</option>
									))}
								</Select>
							)}
						/>

						<Box className={styles.group}>
							<Button type='submit' isDisabled={!isValid}>
								Добавить вопрос
							</Button>
							<Button
								isDisabled={!isValid && !quizzes.length}
								onClick={createQuiz}
							>
								Создать тест
							</Button>
						</Box>
					</form>
				</Box>
			</Container>
		</Layout>
	)
}

export default QuizCreatorPage
