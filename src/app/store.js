import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import searchReducer from './features/search/searchSlice'
import pokemonReducer from './features/pokemon/pokemonSlice'

const rootReducer = combineReducers({
	pokemon: pokemonReducer,
	search: searchReducer
})

export const store = configureStore({
	reducer: {
		reducer: rootReducer
	}
})

setupListeners(store.dispatch)
