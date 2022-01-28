/** studentList |  StudentList |Component
* @description: A list of all of the students
* @elements: profile picture, name, email, company, skills, grade average
*/

import React from 'react'
import {useGetStudentsQuery} from '../api/apiSlice'
import {Student} from './Student'

export const List = () => {
	const {data, isLoading, isError} = useGetStudentsQuery()

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>Error :(</p>

	const getAverage = (grades) => {
		const average =
			grades.reduce((acc, grade) => {
				acc += parseInt(grade)
				return acc
			}, 0) / grades.length

		return <p>{average}</p>
	}

	const students = data.students.map((student) => {
		return <Student student={student} average={getAverage(student.grades)} />
	})

	return <ul className='bg-white min-w-10 w-2/3 h-4/5 rounded-lg shadow-md overflow-auto'>{students}</ul>
}
