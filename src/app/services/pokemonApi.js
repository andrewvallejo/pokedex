// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
	endpoints: (builder) => ({
		getPokemonByName: builder.query({
			query: (name) => `pokemon/${name}`,
			transformResponse: (data) => {
				const {name, height, weight, sprites} = data
				return {
					name: name,
					height: height,
					weight: weight,
					sprite: sprites.front_default
				}
			}
		})
	})
})

export const {useGetPokemonByNameQuery} = pokemonApi
