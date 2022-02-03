import {Student} from '../features/students/Student'

export const StudentList = ({students}) => {
	return (
		<ul className='divide-y'>
			{students.map((student) => {
				return <Student key={student.id} student={student} />
			})}
		</ul>
	)
}
