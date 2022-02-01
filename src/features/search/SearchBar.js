import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

export const SearchBar = ({field}) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [placeholder, setPlaceholder] = useState('Search')

	const {studentList: {students}} = useSelector((state) => state.reducer.students)

	useEffect(
		() => {
			if (field === 'name') {
				setPlaceholder('Search by name')
			}
		},
		[field]
	)

	const handleChange = (e) => {
		setSearchTerm(e.target.value)
	}

	useEffect(
		() => {
			if (field) {
				setPlaceholder(`Search by ${field}`)
			}
		},
		[field]
	)

	return (
		<div className='flex flex-col justify-center items-center border-b'>
			<input
				className='w-full h-12 p-1 text-lg hover:placeholder-black focus:outline-none focus:ring focus:border-blue-200 focus:placehholder-black'
				type='text'
				placeholder={placeholder}
				value={searchTerm}
				onChange={handleChange}
			/>
		</div>
	)
}
