import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import studentsReducer from '../features/students/studentSlice'
import searchReducer from '../features/search/searchSlice'

const rootReducer = combineReducers({
	students: studentsReducer,
	search: searchReducer
})

export const store = configureStore({
	reducer: {
		reducer: rootReducer
	}
})

setupListeners(store.dispatch)
