import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {SearchBar} from '../app/features/search/SearchBar'
import {List} from './pokedex/List'

export const Home = () => {
	const [loadedPokedex, setLoadedPokedex] = useState([])
	const [isLoaded, setLoaded] = useState(false)
	const {pokedex} = useSelector((state) => state.pokemon)
	const {searchTerms} = useSelector((state) => state.search)
	const nameQuery = searchTerms.name.query
	const tagQuery = searchTerms.tags.query

	useEffect(
		() => {
			if (pokedex) {
				setLoaded(true)
				setLoadedPokedex(pokedex)
			}
			if (isLoaded && nameQuery) {
				setLoadedPokedex(
					pokedex.filter((pokemon) => pokemon.name.toLowerCase().includes(nameQuery.toLowerCase()))
				)
			}
			if (isLoaded && tagQuery) {
				setLoadedPokedex(
					pokedex.filter((pokemon) =>
						pokemon.tags.some((tag) => tag.toLowerCase().includes(tagQuery.toLowerCase()))
					)
				)
			}
			if (isLoaded && nameQuery && tagQuery) {
				setLoadedPokedex(
					pokedex.filter(
						(pokemon) =>
							pokemon.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
							pokemon.tags.some((tag) => tag.toLowerCase().includes(tagQuery.toLowerCase()))
					)
				)
			}
		},
		[isLoaded, nameQuery, pokedex, tagQuery]
	)

	return (
		<section
			data-cy='pokemon-portal'
			className='bg-clr-ii border w-full h-screen md:w-4/5 md:h-3/4 md:rounded-lg md:shadow-md overflow-auto '>
			<nav className='min-w-full sticky z-10 top-0' data-cy='filter-nav'>
				<SearchBar field='tags' />
				<SearchBar field='name' />
			</nav>
			{isLoaded ? <List list={loadedPokedex} type='pokemon' /> : <List list={loadedPokedex} type='loader' />}
		</section>
	)
}
