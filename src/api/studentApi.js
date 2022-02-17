import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
	const response = await fetch('https://api.hatchways.io/assessment/students')
	const data = await response.json().then((data) => {
		cleanData(data)
		return data
	})
	return data
})

const cleanData = ({students}) => {
	const getAverage = (grades) => {
		return (
			grades.reduce((acc, grade) => {
				acc += parseInt(grade)
				return acc
			}, 0) / grades.length
		)
	}

	students.forEach((student) => {
		student.name = `${student.firstName} ${student.lastName}`
		student.average = getAverage(student.grades)
		student.tags = []
		delete student.city
	})
}
