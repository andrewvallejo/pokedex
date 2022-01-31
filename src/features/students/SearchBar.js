import {useEffect, useState} from 'react'
import {Student} from '../features/studentList/Student'

export const SearchBar = ({searchType, choices}) => {
	const [query, setQuery] = useState('')

	const [placeholder, setPlaceholder] = useState('Search')

	const handleChange = (e) => {
		setQuery(e.target.value)
	}

	// Filter students based on their first and last name

	const filteredStudents = choices.filter((student) => {
		return (
			student.firstName.toLowerCase().includes(query.toLowerCase()) ||
			student.lastName.toLowerCase().includes(query.toLowerCase())
		)
	})

	useEffect(
		() => {
			if (searchType) {
				setPlaceholder(`Search by ${searchType}`)
			}
		},
		[searchType]
	)
	// Search bar functionality works but to get it to work with the search bar I need to figure out how to get the search bar to work with the students list from the redux store.

	return (
		<div className='flex flex-col justify-center items-center border-b'>
			<input
				className='w-full h-12 p-1 text-lg hover:placeholder-black focus:outline-none focus:ring focus:border-blue-200 focus:placehholder-black'
				type='text'
				placeholder={placeholder}
				value={query}
				onChange={handleChange}
			/>

			<ul className='flex flex-col justify-center items-center'>
				{filteredStudents.map((student) => {
					return <Student student={student} />
				})}
			</ul>
		</div>
	)
}
