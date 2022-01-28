import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {studentsApi} from '../services/studentsApi'

import studentListReducer from '../features/studentReducer/studentListSlice'

const rootReducer = combineReducers({
	studentList: studentListReducer
})

export const store = configureStore({
	reducer: {
		reducer: rootReducer,
		[studentsApi.reducerPath]: studentsApi.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(studentsApi.middleware)
})

setupListeners(store.dispatch)
