import {Student} from '../features/students/Student'

export const List = ({list, type}) => {
	const selections = {
		students: list.map((student) => <Student key={student.id} student={student} />)
	}

	return <ul className='divide-y overflow-auto h-full'>{selections[type]}</ul>
}
