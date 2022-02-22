import {useDispatch, useSelector} from 'react-redux'
import {setSearchTerm} from './searchSlice'

export const SearchBar = ({field}) => {
	const {searchTerms} = useSelector((state) => state.search)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		dispatch(setSearchTerm({field, value: e.target.value}))
	}

	return (
		<div className='flex flex-col   text-white w-full overflow-auto shadow-lg justify-center items-center border-b-2 border-b-red-i round-tr-br border-r-red-i  border-l-0 border-t-0 border-r-2 '>
			<input
				className='w-full pl-6 bg-red-ii h-12 p-1 text-lg placeholder-clr-iii sm:hover:placeholder-clr-ii focus:outline-none focus-visible:placeholder-clr-ii'
				type='text'
				placeholder={`Search by ${field}`}
				value={searchTerms[field].value}
				onChange={handleChange}
				data-cy={`search-bar-${field}`}
			/>
		</div>
	)
}
