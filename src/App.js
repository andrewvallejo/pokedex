/** src | App.js
 * @description: The main app component
 * @components: StudentPage
 * @Routes: '/' -> Student Page
 */

import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import {fetchStudents} from './api/studentApi'
import {StudentPage} from './features/students/StudentPage'

export const App = () => {
	const dispatch = useDispatch()

	useEffect(
		() => {
			dispatch(fetchStudents())
		},
		[dispatch]
	)

	return (
		<main className='h-screen flex flex-col bg-gray-100 justify-center items-center'>
			<Routes>
				<Route path='/' element={<StudentPage />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</main>
	)
}
