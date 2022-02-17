import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
	const data = await response.json()
	return data.results.map((pokemon) => {
		const {name, url} = pokemon
		const id = url.split('/').splice(-2, 1)[0]
		console.log(id)
		return {
			id: id,
			name: name,
			tags: []
		}
	})
})
