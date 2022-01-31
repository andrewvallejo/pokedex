/** app |  store
* @reducers: studentList
* @api: apiSlice
* @description: Student Store with reducers and api
*/

import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {apiSlice} from '../features/api/apiSlice'
import studentListReducer from '../features/students/studentListSlice'

const rootReducer = combineReducers({
	studentList: studentListReducer
})

export const store = configureStore({
	reducer: {
		reducer: rootReducer,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)
