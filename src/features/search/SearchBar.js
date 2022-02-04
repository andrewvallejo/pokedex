/** component | SearchBar
 * @description: A search bar that allows the user to filter the list of students.
 * @elements: searchTerm, searchField
 * @redux: search/searchSlice
 * @actions: setSearchTerm
 * @reducers: searchTerm, searchField
 */

import {useDispatch, useSelector} from 'react-redux'
import {setSearchTerm} from './searchSlice'

export const SearchBar = ({field}) => {
	const {searchTerms} = useSelector((state) => state.reducer.search)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		dispatch(setSearchTerm({field, value: e.target.value}))
	}

	return (
		<div className='flex flex-col justify-center items-center border-b-2    focus-within:border-b-black'>
			<input
				className='w-full h-12 p-1 text-lg hover:placeholder-black focus-within:outline-none  focus:placehholder-black '
				type='text'
				placeholder={`Search by ${field}`}
				value={searchTerms[field].value}
				onChange={handleChange}
			/>
		</div>
	)
}
