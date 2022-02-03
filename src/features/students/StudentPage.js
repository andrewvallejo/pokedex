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
import {Loader} from '../../components/Loader'
import {List} from '../../components/List'
import {SearchBar} from '../search/SearchBar'

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

	//TODO fix scrollwheel top padding
	// Figure out a way to add padding to the search bar bottom border

	return (
		<main className='h-screen flex flex-col bg-gray-100 font-body justify-center items-center'>
			<section className='bg-white min-w-10 w-4/5 h-3/4 rounded-lg shadow-md overflow-auto relative'>
				<nav className='min-w-full sticky z-10 top-0'>
					<SearchBar field='name' filter={setLoadedStudents} />
				</nav>
				{isLoaded ? (
					<List list={loadedStudents} type='students' />
				) : 'loading' === loading ? (
					<Loader />
				) : (
					<div className='flex flex-col justify-center items-center'>
						<h2 className='text-3xl font-bold'>Loading...</h2>
					</div>
				)}
			</section>
		</main>
	)
}
