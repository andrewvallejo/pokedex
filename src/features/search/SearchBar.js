/** component | SearchBar
 * @description: A search bar that allows the user to filter the list of students.
 * @elements: searchTerm, searchField
 * @redux: search/searchSlice
 * @actions: setSearchTerm
 * @reducers: searchTerm, searchField
 */

import {useDispatch, useSelector} from 'react-redux'
import {setSearchTerm} from './searchSlice'

export const SearchBar = () => {
	const {search: {searchTerm, searchField}} = useSelector((state) => state.reducer)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		dispatch(setSearchTerm(e.target.value))
	}

	return (
		<div className='flex flex-col justify-center items-center border-b focus-within:border-b-black'>
			<input
				className='w-full h-12 p-1 text-lg hover:placeholder-black focus:outline-none focus:ring-2 focus:placehholder-black '
				type='text'
				placeholder={`Search by ${searchField}`}
				value={searchTerm}
				onChange={handleChange}
			/>
		</div>
	)
}
