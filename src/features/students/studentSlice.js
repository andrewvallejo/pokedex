/** studentList |  studentListSlice | Reducer
 * @description: Add list of students to the store
* @actions: studentsLoading, setStudents
*/

import {createSlice} from '@reduxjs/toolkit'
import {fetchStudents} from '../../api/studentApi'

const studentListSlice = createSlice({
	name: 'students',
	initialState: {
		loading: 'idle',
		studentList: [],
		filteredList: []
	},
	reducers: {
		setLoading: (state) => {
			if (state.loading === 'idle') {
				state.loading = 'pending'
			}
		},
		setStudents: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle'
				state.studentList = action.payload
			}
		},
		setFilteredList: (state, action) => {
			state.filteredList = action.payload
		}
	},
	extraReducers: {
		[fetchStudents.pending]: (state) => {
			state.loading = 'pending'
		},
		[fetchStudents.fulfilled]: (state, action) => {
			state.loading = 'idle'
			state.studentList = action.payload
		},
		[fetchStudents.rejected]: (state) => {
			state.loading = 'idle'
		}
	}
})

const {actions, reducer} = studentListSlice

export const {setLoading, setStudents, setFilteredList} = actions

export default reducer
