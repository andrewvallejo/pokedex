/** api | Student API | fetchStudents
 *	@description:Fetch all students
 *	@url:https://api.hatchways.io/assessment/students
 *	@method:GET
 *	@returns:An array of students
 */

import {createAsyncThunk} from '@reduxjs/toolkit'

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
	const response = await fetch('https://api.hatchways.io/assessment/students')
	const data = await response.json().then((data) => {
		cleanData(data)
		return data
	})
	return data
})

/** api | Student Data Cleaner | cleanData
 *	@description | An instance of a student after cleaning
 *	@params | id, fullName, email, company, skill, average, grades
*/

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
