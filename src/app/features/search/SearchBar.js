import {useDispatch, useSelector} from 'react-redux'
import {setSearchTerm} from './searchSlice'

export const SearchBar = ({field}) => {
	const {searchTerms} = useSelector((state) => state.search)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		dispatch(setSearchTerm({field, value: e.target.value}))
	}

	return (
		<div className='flex flex-col mx-2 justify-center items-center border-b-2 border-b-gray-100 sm:hover:border-b-black'>
			<input
				className='w-full h-12 p-1 text-lg sm:hover:placeholder-black focus:outline-none focus:placehholder-black '
				type='text'
				placeholder={`Search by ${field}`}
				value={searchTerms[field].value}
				onChange={handleChange}
				data-cy={`search-bar-${field}`}
			/>
		</div>
	)
}
