export const SearchBar = ({queryType}) => {
	const searchSwitch = (type) => {
		switch (type) {
			case 'name':
				return 'Search by name'
			default:
				return 'Search'
		}
	}

	const query = searchSwitch(queryType)

	return (
		<div className='flex justify-center items-center border-b'>
			<input
				className='w-full h-12 p-1 text-lg hover:placeholder-black focus:outline-none focus:ring focus:border-blue-200 focus:placehholder-black'
				type='text'
				placeholder={query}
			/>
		</div>
	)
}
