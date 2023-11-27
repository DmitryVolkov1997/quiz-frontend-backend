import HomePage from '@/pages/home-page/HomePage'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import QuizCreatorPage from './pages/quiz-creator-page/QuizCreatorPage'
import QuizPage from './pages/quiz-page/QuizPage'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/quiz/:category' element={<QuizPage />} />
				<Route path='/quiz-creator' element={<QuizCreatorPage />} />
			</Routes>
		</>
	)
}

export default App
