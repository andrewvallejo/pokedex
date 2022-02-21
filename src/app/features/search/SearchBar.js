import {useDispatch, useSelector} from 'react-redux'
import {setSearchTerm} from './searchSlice'

export const SearchBar = ({field}) => {
	const {searchTerms} = useSelector((state) => state.search)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		dispatch(setSearchTerm({field, value: e.target.value}))
	}

	return (
		<div className='flex flex-col text-white w-full md:w-1/2 overflow-auto shadow-lg justify-center items-center border-b-2 border-b-red-i round-tr-br border-r-red-i  border-l-0 border-t-0 border-r-2 sm:hover:border-clr-iii'>
			<input
				className='w-full bg-red-ii h-12 p-1 text-lg placeholder-clr-ii sm:hover:placeholder-clr-iii focus:outline-none'
				type='text'
				placeholder={`Search by ${field}`}
				value={searchTerms[field].value}
				onChange={handleChange}
				data-cy={`search-bar-${field}`}
			/>
		</div>
	)
}
