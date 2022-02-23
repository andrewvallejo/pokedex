import {useDispatch, useSelector} from 'react-redux'
import {setSearchTerm} from './searchSlice'

export const SearchBar = ({field}) => {
	const {searchTerms} = useSelector((state) => state.search)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		dispatch(setSearchTerm({field, value: e.target.value}))
	}

	return (
		<div className='flex flex-col items-center justify-center w-full overflow-auto text-white border-t-0 border-b-2 border-l-0 border-r-2 shadow-lg border-b-red-i round-tr-br border-r-red-i '>
			<input
				className='w-full h-12 p-1 pl-6 text-lg bg-red-ii placeholder-clr-iii sm:hover:placeholder-clr-ii focus:outline-none focus-visible:placeholder-clr-ii'
				type='text'
				placeholder={`Search by ${field}`}
				value={searchTerms[field].value}
				onChange={handleChange}
				data-cy={`search-bar-${field}`}
			/>
		</div>
	)
}
