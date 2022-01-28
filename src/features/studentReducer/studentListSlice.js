import {createSlice} from '@reduxjs/toolkit'

const studentListSlice = createSlice({
	name: 'students',
	initialState: {
		loading: 'idle',
		students: []
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
		}
	}
})

const {actions, reducer} = studentListSlice

export const {studentsLoading, setStudents} = actions

export default reducer
