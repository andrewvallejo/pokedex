import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
	const data = await response.json().then((data) => {
		return data
	})
	return data
})
