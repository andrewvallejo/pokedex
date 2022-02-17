import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'

import {Tag} from '../../../components/pokedex/Tag'
import {TestScores} from '../../../components/pokedex/TestScores'

import {setPokemonTags} from './pokemonSlice'

export const Pokemon = ({pokemon}) => {
	const [isShowTestScores, setShowTestScores] = useState(false) < Tag
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
		[pokemonTags, tags]
	)

	const handleChange = (e) => {
		setTag(e.target.value)
	}

	const handleToggle = () => {
		setShowTestScores(!isShowTestScores)
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
		<li className='flex flex-col py-4 px-4 w-full snap-bottom' cy-data={`pokemon-${pokemon.id}`}>
			<div className='flex flex-row w-full flex-wrap relative'>
				{pokemon.pic ? (
					<img
						className='rounded-full border w-40 h-40 md:w-32 md:h-32 align-self-center mx-auto my-2 md:mx-0 md:my-0'
						src={pokemon.pic}
						alt={pokemon.firstName}
					/>
				) : (
					<div className='rounded-full animate-pulse border background-gray-100 w-40 h-40 md:w-32 md:h-32 align-self-center mx-auto my-2 md:mx-0 md:my-0' />
				)}
				<div>
					<div className='px-5 flex-col'>
						<h2 className='px-3 md:px-0 font-bold uppercase text-2xl md:text-4xl'>{pokemon.name}</h2>
						<div className='py-2 px-5'>
							<h3>Email: {pokemon.email}</h3>
							<h3>Company: {pokemon.company}</h3>
							<h3>Skill: {pokemon.skill}</h3>
							<h3 className='flex'>Average: {pokemon.average}%</h3>
							{pokemonTags && (
								<ul className='flex'>{tags.map((tag) => <Tag key={tag} characters={tag} />)}</ul>
							)}
							<form onSubmit={handleAddTag}>
								<input
									className='max-w-1/2 h-12 p-1 text-md border-b-2 border-b-gray-100 focus:outline-none focus:border-b-black'
									type='text'
									placeholder='Add a tag'
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
				<div className='flex flex-1 flex-row-reverse'>
					<button
						className='absolute -top-10 md:top-0 text-9xl md:text-8xl text-gray-200 sm:hover:text-black'
						onClick={handleToggle}>
						{isShowTestScores ? '-' : '+'}
					</button>
				</div>
			</div>
		</li>
	)
}
