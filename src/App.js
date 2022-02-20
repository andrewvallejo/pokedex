import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Navigate, Route, Routes} from 'react-router-dom'
import {fetchPokemon} from './app/features/pokemon/pokemonThunk'
import {Home} from './components/Home'

export const App = () => {
	const dispatch = useDispatch()
	const {pokedex} = useSelector((state) => state.pokemon)

	useEffect(
		() => {
			if (!pokedex.length) {
				dispatch(fetchPokemon())
			}
		},
		[dispatch, pokedex]
	)

	return (
		<main className='h-screen flex flex-col t bg-clr-iii justify-center items-center'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</main>
	)
}
