/* ==========================================================================
  api | Assessment API | getStudents
========================================================================== */
/**
* @method: GET
* @url: https://api.hatchways.io/assessment/students
* @description: Get all students
* @return: Array of students
*/

// TODO: Make sure to remove the student's city since its not needed
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const studentsApi = createApi({
	reducerPath: 'studentApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.hatchways.io/assessment'
	}),
	endpoints: (builder) => ({
		getStudents: builder.query({
			query: () => 'students'
		})
	})
})
export const {useGetStudentsQuery} = studentsApi
