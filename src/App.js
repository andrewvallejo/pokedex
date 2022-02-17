import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import {fetchPokemon} from './app/features/pokemon/pokemonThunk'
import {Home} from './components/Home'

export const App = () => {
	const dispatch = useDispatch()

	useEffect(
		() => {
			dispatch(fetchPokemon())
		},
		[dispatch]
	)

	return (
		<main className='h-screen flex flex-col bg-gray-100 justify-center items-center'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</main>
	)
}
