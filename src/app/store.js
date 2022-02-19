import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import pokemonReducer from './features/pokemon/pokemonSlice'
import searchReducer from './features/search/searchSlice'
import {pokemonApi} from './services/pokemon'

const rootReducer = combineReducers({
	[pokemonApi.reducerPath]: pokemonApi.reducer,
	pokemon: pokemonReducer,
	search: searchReducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)
