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
			className='bg-red-ii border-4 border-red-i w-full h-screen md:w-4/5 md:h-3/4 md:rounded-lg md:shadow-md overflow-auto relative md:rounded-tr-[10rem]'>
			<nav className='min-w-full sticky z-10 top-0 ' data-cy='filter-nav'>
				<SearchBar field='tags' />
				<SearchBar field='name' />
			</nav>


			<article className='md:w-1/2 md:border-r-red-iii md:border-r-4 '>
			{isLoaded ? <List list={loadedPokedex} type='pokemon' /> : <List list={loadedPokedex} type='loader' />}
			</article>
			<aside className='hidden w-2/5 h-3/4  p-10 flex-col py-10   rounded-tr-[10rem]  fixed right-32 md:flex justify-around top-24  '>
					<div className='flex  h-full justify-center  w-full rounded-3xl  items-center z-10'>
					<div className='flex flex-col justify-between h-full  w-3/4 py-2 rounded-3xl  items-center'>
						<h1 className='text-5xl bg-red-ii  px-10 py-4 rounded-3xl  border-2 border-clr-iiiii text-clr-iiiii'>Poke
							<span className='text-clr-'>dex</span>
						</h1>

					</div>
					</div>

				<div  className='p-10 h-[90%] w-4/5 rounded-tr-[5rem] bg-clr-iiii border-4 rounded border-b-red-i border-l-red-i border-t-red-iii border-r-red-iii border-red-i absolute self-center '>
					<div className='flex flex-col justify-between h-full  w-full py-2 rounded-3xl  items-center'>
					<div className='flex  w-full  bg-clr-iiiiii  h-20 mt-20 border-2 rounded-xl border-clr-ii '>
						<div className=' w-full flex divide-x divide-clr-ii overflow-hidden'>



						<div  className='w-10 '/>
						<div  className='w-10 '/>
						<div  className='w-10 '/>
						<div  className='w-10 '/>
						<div  className='w-10 '/>
						<div  className='w-10 '/>
						<div  className='w-10 '/>
						<div  className='w-10 '/>
						<div  className='w-10 '/>
						<div  className='w-10 '/>


						</div>
					</div>
						</div>
						</div>
			</aside>
			</section>
	)
}
