/** studentList |  StudentList |Component
* @description: A list of all of the students
* @elements: profile picture, name, email, company, skills, grade average
*/

import React, {useEffect} from 'react'
import {SearchBar} from '../features/students/SearchBar'
import {useGetStudentsQuery} from '../features/api/apiSlice'
import {Student} from '../features/students/Student'
import {setStudents, studentsLoading} from '../features/students/studentListSlice'
import {useDispatch} from 'react-redux'

export const StudentPage = () => {
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
		return <Student key={student.id} student={student} average={getAverage(student.grades)} />
	})

	return (
		<main className='h-screen flex flex-col bg-gray-100 font-body justify-center items-center'>
			<section className='bg-white min-w-10 w-4/5 h-3/4 rounded-lg shadow-md overflow-auto'>
				<nav className='px-2 min-w-full'>
					<SearchBar field='name' />
				</nav>
				<ul className='divide-y'>{students}</ul>)
			</section>
		</main>
	)
}
