import {createSlice} from '@reduxjs/toolkit'
import {fetchPokemon} from '../../api/pokemonApi'

const pokemonSlice = createSlice({
	name: 'pokemonList',
	initialState: {
		loading: 'idle',
		pokedex: []
	},
	reducers: {
		setLoading: (state) => {
			if (state.loading === 'idle') {
				state.loading = 'pending'
			}
		},
		setPokemon: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle'
				state.pokedex = action.payload
			}
		},
		setPokemonTags: (state, action) => {
			const {pokemonId, tagList} = action.payload
			const {pokemon} = state.pokemonList
			const currentPokemon = pokemon.find((pokemon) => pokemon.id === pokemonId)
			currentPokemon.tags = tagList
		}
	},
	extraReducers: {
		[fetchPokemon.pending]: (state) => {
			state.loading = 'pending'
		},
		[fetchPokemon.fulfilled]: (state, action) => {
			state.loading = 'idle'
			state.pokemonList = action.payload
		},
		[fetchPokemon.rejected]: (state) => {
			state.loading = 'idle'
		}
	}
})

const {actions, reducer} = pokemonSlice

export const {setLoading, setPokemon, setPokemonTags} = actions

export default reducer
