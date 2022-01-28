/** api |  apiSlice | getStudents
* @method: GET
* @url: https://api.hatchways.io/assessment/students
* @description: Get all students
* @return: Array of students
*/

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
	reducerPath: 'apiSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.hatchways.io/assessment'
	}),
	endpoints: (builder) => ({
		getStudents: builder.query({
			query: () => 'students'
		})
	})
})
export const {useGetStudentsQuery} = apiSlice
