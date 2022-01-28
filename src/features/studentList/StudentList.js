/** studentList |  StudentList |Component
* @description: A list of all of the students
* @elements: profile picture, name, email, company, skills, grade average
*/

import React from 'react'
import {useGetStudentsQuery} from '../api/apiSlice'

export const StudentList = () => {
	const {data, isLoading, isError} = useGetStudentsQuery()
	const students = data.students

	const getAverage = (grades) => {
		const average =
			grades.reduce((acc, grade) => {
				acc += parseInt(grade)
				return acc
			}, 0) / grades.length

		return <p>{average}</p>
	}

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>Error :(</p>

	return (
		<ul>
			{students.map((student) => (
				<li key={student.id}>
					<img src={student.pic} alt={student.firstName} />
					<div>
						<h2>
							{student.firstName} {student.lastName}
						</h2>
						<p>Email: {student.email}</p>
						<p>Company: {student.company}</p>
						<p>Skill: {student.skill}</p>
						{getAverage(student.grades)}
					</div>
				</li>
			))}
		</ul>
	)
}
