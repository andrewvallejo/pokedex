import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Stats} from '../../../components/pokedex/Stats'
import {Tag} from '../../../components/pokedex/Tag'
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
		<li className='w-full px-2 py-4 shadow-lg snap-bottom ' cy-data={`pokemon-${pokemon.id}`}>
			<section className='relative flex-row flex-wrap w-full break-all '>
				<article className='flex justify-around py-3 rounded shadow-md bg-clr-iii rounded-bl-3xl '>
					<div className='flex items-center ml-2 '>
						{!isLoading ? (
							<img
								className='w-40 h-40 p-1 border rounded-full shadow-md bg-clr-ii md:w-32 md:h-32 align-self-center md:mx-0 md:my-0'
								src={data.sprite}
								alt={pokemon.name}
							/>
						) : (
							<div className='w-40 h-40 mx-auto my-2 border rounded-full animate-pulse background-gray-100 md:w-32 md:h-32 align-self-center md:mx-0 md:my-0' />
						)}
						<div>
							<div className='flex-col '>
								<h2 className='w-full px-3 text-2xl font-bold uppercase md:px-0 md:text-4xl'>
									{pokemon.name}
								</h2>

								<div className='px-5 py-2 '>
									<h3>Weight: {data.weight}</h3>
									<h3>Height: {data.height}</h3>
									<h3>Type: {data.types.map(({type}) => type).join(', ')}</h3>
									{pokemonTags && (
										<ul className='flex'>
											{tags.map((tag) => <Tag key={tag} characters={tag} />)}
										</ul>
									)}
									<form onSubmit={handleAddTag}>
										<input
											className='h-12 py-2 pl-2 mt-2 placeholder-gray-200 border-b-2 rounded-md max-w-fit text-clr-black bg-clr-ii text-md border-b-gray-100 focus:outline-none focus:border-b-clr-iiii'
											type='text'
											placeholder='Add a team tag'
											value={tag}
											onChange={handleChange}
										/>
									</form>
									<ul className='flex flex-col pt-2' data-cy='testscores-list'>
										{isShowTestScores && <Stats name={pokemon.name} stats={pokemon.stats} />}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-start pb-4 mr-2 md:mt-2 lg:mt-0'>
						<button
							className='transition ease-in-out text-8xl text-clr-black sm:hover:text-clr-iiiii active:rotate-45 1s'
							onClick={handleToggle}>
							{isShowTestScores ? '-' : '+'}
						</button>
					</div>
				</article>
			</section>
		</li>
	)
}
