/** components |  StudentPage | Page
* @description: A page that displays all students, and allows the user to filter by name.
	@redux: search/searchSlice
	@store: loading, students
	@reducers: searchTerm, searchField
  @state: loadedStudents([]), isLoaded(false)
	@components: [Student]List, SearchBar
	@elements: main, student portal, search bar, list of students
*/

import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {SearchBar} from './SearchBar'
import {Student} from './Student'

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

	const list = () => {
		if (isLoaded) {
			return loadedStudents.map((student) => <Student key={student.id} student={student} />)
		}
	}

	const loader = () => {
		if (loading) {
			return (
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-3xl font-bold'>Loading...</h2>
				</div>
			)
		}
	}

	return (
		<main className='h-screen flex flex-col bg-gray-100 font-body justify-center items-center'>
			<section className='bg-white min-w-10 w-4/5 h-3/4 rounded-lg shadow-md overflow-auto relative'>
				<nav className='px-2 min-w-full sticky top-0'>
					<SearchBar field='name' filter={setLoadedStudents} />
				</nav>
				{isLoaded ? list() : loader()}
			</section>
		</main>
	)
}
