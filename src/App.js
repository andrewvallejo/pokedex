import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {fetchStudents} from './api/studentApi'
import {StudentPage} from './components/StudentPage'

export const App = () => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state)

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
