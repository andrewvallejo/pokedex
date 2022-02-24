export const Stat = ({stat}) => {
	const {name, value} = stat
	return (
		<li className='flex items-center justify-between'>
			<p className='text-xl text-center text-gray-500 '>{name}:</p>
			<p className='text-xl text-center text-gray-500 '>{value}</p>
		</li>
	)
}
