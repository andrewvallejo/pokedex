import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
	const response = await fetch('https://api.hatchways.io/assessment/students')
	const data = await response.json()
	return data
})
