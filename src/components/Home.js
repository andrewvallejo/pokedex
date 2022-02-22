import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {SearchBar} from '../app/features/search/SearchBar'
import {FakeController} from './pokedex/FakeController'
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
			className=' bg-red-ii border-4 border-red-i w-full min-w-4/5   h-screen md:w-4/5 md:h-3/4 md:rounded-lg md:shadow-md overflow-hidden  md:rounded-tr-[10rem]'>
			<section className='flex relative  flex-row h-full  justify-between'>
				<div className='min-w-1/2  overflow-y-scroll scroll-smooth	 flex-auto'>
					<nav className='min-w-full  sticky top-0  z-20  border-r-red-iii md:border-r-4' data-cy='filter-nav'>
						<SearchBar field='tags' />
						<SearchBar field='name' />
					</nav>
					<article className='lg:w-full border-r-red-iii  md:border-r-4  '>
						{isLoaded ? (
							<List list={loadedPokedex} type='pokemon' />
						) : (
							<List list={loadedPokedex} type='loader' />
						)}
					</article>
				</div>
				<div className='hidden min-w-1/2 md:flex w-1/2 justify-center items-center'>
					<FakeController />
				</div>
			</section>
		</section>
	)
}
