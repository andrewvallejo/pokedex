import {useEffect, useState} from 'react'
import {Pokemon} from '../../app/features/pokemon/Pokemon'
import {Stat} from './Stat'

export const List = ({list, type}) => {
	const [stats, setStats] = useState([])

	useEffect(
		() => {
			if (type === 'stats') {
				setStats(list[1])
			}
		},
		[list, type]
	)

	const selections = {
		pokemon: list.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />),
		stats: stats.map((stat) => <Stat key={`${list[0]}-${stat.name}`} stat={stat} />)
	}

	return (
		<ul
			className='relative z-10 min-h-full overflow-y-scroll divide-y divide-red-i snap-x'
			data-cy={`list-${type}`}>
			{list && selections[type]}
			{!list.length && (
				<p className='absolute text-5xl text-center text-gray-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
					No pokemon found
				</p>
			)}
		</ul>
	)
}
