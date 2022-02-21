import {Pokemon} from '../../app/features/pokemon/Pokemon'

export const List = ({list, type}) => {
	const selections = {
		pokemon: list.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)
	}

	return (
		<ul className='divide-y divide-red-i overscroll-auto h-full snap-x relative' data-cy={`list-${type}`}>
			{selections[type]}
			{!list.length && (
				<p className='text-center text-5xl text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					No pokemon found
				</p>
			)}
		</ul>
	)
}
