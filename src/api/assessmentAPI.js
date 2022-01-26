/* ==========================================================================
  api | Assessment API | getStudents
========================================================================== */
/**
* @method: GET
* @url: https://api.hatchways.io/assessment/students
* @description: Get all students
* @return: Array of students
*/

import axios from 'axios'

const config = {
	method: 'GET',
	url: 'https://api.hatchways.io/assessment/students',
	headers: {'Content-Type': 'application/json'}
}
export const getStudents = async () => {
	try {
		const response = await axios(config)
		return response.data
	} catch (error) {
		console.log(error)
	}
}
