import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setSearchTerm} from '../features/search/searchSlice'

export const SearchBar = () => {
	const {search: {searchTerm, searchField}} = useSelector((state) => state.reducer)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		dispatch(setSearchTerm(e.target.value))
	}

	return (
		<div className='flex flex-col justify-center items-center border-b'>
			<input
				className='w-full h-12 p-1 text-lg hover:placeholder-black focus:outline-none focus:ring focus:border-blue-200 focus:placehholder-black'
				type='text'
				placeholder={`Search by ${searchField}`}
				value={searchTerm}
				onChange={handleChange}
			/>
		</div>
	)
}
