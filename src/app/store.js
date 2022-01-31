/** app |  store
* @reducers: studentList
* @api: apiSlice
* @description: Student Store with reducers and api
*/

import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import studentsReducer from '../features/students/studentSlice'

const rootReducer = combineReducers({
	students: studentsReducer
})

export const store = configureStore({
	reducer: {
		reducer: rootReducer
	}
})

setupListeners(store.dispatch)
