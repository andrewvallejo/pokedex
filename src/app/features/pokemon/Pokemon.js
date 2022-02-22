import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'

import {Tag} from '../../../components/pokedex/Tag'
import {TestScores} from '../../../components/pokedex/TestScores'
import {useGetPokemonByNameQuery} from '../../services/pokemonApi'

import {setPokemonTags} from './pokemonSlice'

export const Pokemon = ({pokemon}) => {
	const {data, isLoading, isError} = useGetPokemonByNameQuery(pokemon.name)

	const [isShowTestScores, setShowTestScores] = useState(false)
	const [tags, setTags] = useState([])
	const [tag, setTag] = useState('')

	const pokemonTags = pokemon.tags
	const pokemonId = pokemon.id
	const dispatch = useDispatch()

	useEffect(
		() => {
			if (!tags || tags.length === 0) {
				setTags(pokemonTags)
			}
		},
		[data, pokemon.name, pokemonTags, tags]
	)

	const handleChange = (e) => {
		setTag(e.target.value)
	}

	const handleToggle = () => {
		setShowTestScores(!isShowTestScores)
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Error</div>
	}

	const handleAddTag = (event) => {
		const checkForDuplicate = tags.find((t) => t === tag)
		event.preventDefault()
		if (tag && !checkForDuplicate) {
			const tagList = [...tags, tag]
			setTags(tagList)
			setTag('')
			dispatch(setPokemonTags({pokemonId, tagList}))
		}
	}

	return (
		<li className='py-4 px-4 w-full  snap-bottom ' cy-data={`pokemon-${pokemon.id}`}>
			<section className=' w-full flex-row flex-wrap break-all  relative'>
				<article className='flex justify-between  bg-clr-iii shadow-md   rounded rounded-bl-3xl p-2  '>
					<div className='flex'>

					{!isLoading ? (
						<img
						className='rounded-full shadow-md  bg-clr-ii border w-40 h-40 md:w-32 md:h-32 align-self-center mx-auto my-2 md:mx-0 md:my-0'
						src={data.sprite}
						alt={pokemon.name}
						/>
						) : (
							<div className='rounded-full animate-pulse border background-gray-100 w-40 h-40 md:w-32 md:h-32 align-self-center mx-auto my-2 md:mx-0 md:my-0' />
							)}
					<div>
						<div className='px-5 flex-col '>
							<h2 className='px-3 w-full  md:px-0 font-bold uppercase text-2xl md:text-4xl'>{pokemon.name}</h2>
							<div className='py-2 px-5'>
								<h3>Weight: {data.weight}</h3>
								<h3>Height: {data.height}</h3>
								<h3>Type: {data.types.map(({type}) => type).join(', ')}</h3>
								{pokemonTags && (
									<ul className='flex'>{tags.map((tag) => <Tag key={tag} characters={tag} />)}</ul>
									)}
								<form onSubmit={handleAddTag}>
									<input
										className='bg-clr-ii   h-12 p-1 text-md border-b-2  border-b-gray-100 focus:outline-none focus:border-b-black '
										type='text'
										placeholder='Add a team tag'
										value={tag}
										onChange={handleChange}
										/>
								</form>
								<ul className='flex flex-col pt-2' data-cy='testscores-list'>
									{isShowTestScores && <TestScores name={pokemon.name} grades={pokemon.grades} />}
								</ul>
							</div>
						</div>
					</div>
										</div>
					<div className='pb-4 md:mt-2 lg:mt-0 flex flex-col   items-start'>
						<button
							className='text-8xl text-clr-black   sm:hover:text-clr-iiiii'
							onClick={handleToggle}>
							{isShowTestScores ? '-' : '+'}
						</button>
					</div>
				</article>
			</section>
		</li>
	)
}
