/** studentList |  StudentList |Component
* @description: A list of all of the students
* @elements: profile picture, name, email, company, skills, grade average
*/

import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {List} from './List'
import {SearchBar} from './SearchBar'

export const StudentPage = () => {
	const [loadedStudents, setLoadedStudents] = useState([])
	const [isLoaded, setLoaded] = useState(false)
	const {loading, studentList: {students}} = useSelector((state) => state.reducer.students)

	const {search: {searchTerm, searchField}} = useSelector((state) => state.reducer)

	useEffect(
		() => {
			if (students) {
				setLoaded(true)
				setLoadedStudents(students)
			}
			if (searchTerm) {
				setLoadedStudents(
					students.filter((student) => {
						return student[searchField].toLowerCase().includes(searchTerm.toLowerCase())
					})
				)
			}
		},
		[loading, searchField, searchTerm, students]
	)

	return (
		<main className='h-screen flex flex-col bg-gray-100 font-body justify-center items-center'>
			<section className='bg-white min-w-10 w-4/5 h-3/4 rounded-lg shadow-md overflow-auto'>
				<nav className='px-2 min-w-full'>
					<SearchBar field='name' filter={setLoadedStudents} />
				</nav>
				{isLoaded ? (
					<List students={loadedStudents} />
				) : (
					<div className='flex flex-col justify-center items-center'>
						<h1 className='text-3xl font-bold'>Loading...</h1>
					</div>
				)}
			</section>
		</main>
	)
}
