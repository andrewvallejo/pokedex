/** studentList |  studentListSlice | Reducer
 * @description: Add list of students to the store
* @actions: studentsLoading, setStudents
*/

import {createSlice} from '@reduxjs/toolkit'

const studentListSlice = createSlice({
	name: 'studentList',
	initialState: {
		loading: 'idle',
		students: [],
		filteredList: []
	},
	reducers: {
		studentsLoading: (state) => {
			if (state.loading === 'idle') {
				state.loading = 'pending'
			}
		},
		setStudents: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle'
				state.students = action.payload
			}
		},
		setFilteredList: (state, action) => {
			state.filteredList = action.payload
		}
	}
})

const {actions, reducer} = studentListSlice

export const {studentsLoading, setStudents, setFilteredList} = actions

export default reducer
