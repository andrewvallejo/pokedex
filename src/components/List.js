/** componnent | List
 * @description: A list of students
 * @components: Student
 * @elements: students
 */

import {Student} from './Student'

export const List = ({students}) => {
	return <ul>{students.map((student) => <Student key={student.id} student={student} />)}</ul>
}
