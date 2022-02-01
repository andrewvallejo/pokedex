import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import {fetchStudents} from './api/studentApi'
import {StudentPage} from './components/StudentPage'

export const App = () => {
	const dispatch = useDispatch()

	useEffect(
		() => {
			dispatch(fetchStudents())
		},
		[dispatch]
	)

	return (
		<Routes>
			<Route path='/' element={<StudentPage />} />
		</Routes>
	)
}
