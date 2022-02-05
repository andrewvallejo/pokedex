import {Student} from '../features/students/Student'
import {Loader} from './Loader'

export const List = ({list, type}) => {
	const selections = {
		students: list.map((student) => <Student key={student.id} student={student} />),
		loader: Array.from({length: 10}).map((_, i) => <Loader key={i} />)
	}

	return <ul className='divide-y divide-gray-100   overscroll-auto h-full snap-x'>{selections[type]}</ul>
}
