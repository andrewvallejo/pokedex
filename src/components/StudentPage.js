/** studentList |  StudentList |Component
* @description: A list of all of the students
* @elements: profile picture, name, email, company, skills, grade average
*/
// import {SearchBar} from '../features/search/SearchBar'

import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Student} from '../components/Student'
import {SearchBar} from '../features/search/SearchBar'

export const StudentPage = () => {
	const {loading, studentList: {students}} = useSelector((state) => state.reducer.students)
	const [isLoaded, setLoaded] = useState(false)

	useEffect(
		() => {
			if (loading === 'idle' && students) {
				setLoaded(true)
			}
		},
		[loading, students]
	)

	return (
		<main className='h-screen flex flex-col bg-gray-100 font-body justify-center items-center'>
			<section className='bg-white min-w-10 w-4/5 h-3/4 rounded-lg shadow-md overflow-auto'>
				<nav className='px-2 min-w-full'>
					<SearchBar field='name' />
				</nav>
				<div className='flex flex-col justify-center items-center'>
					{isLoaded ? (
						students.map((student) => <Student key={student.id} student={student} />)
					) : (
						<div className='flex flex-col justify-center items-center'>
							<h1 className='text-3xl font-bold'>Loading...</h1>
						</div>
					)}
				</div>
			</section>
		</main>
	)
}
