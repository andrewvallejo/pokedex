import {Student} from '../../features/students/Student'
import {Loader} from './Loader'

export const List = ({list, type}) => {
	const selections = {
		students: list.map((student) => <Student key={student.id} student={student} />),
		loader: Array.from({length: 10}).map((_, i) => <Loader key={i} />)
	}

	return (
		<ul className='divide-y divide-gray-100 overscroll-auto h-full snap-x relative' data-cy={`list-${type}`}>
			{selections[type]}
			{!list.length && (
				<p className='text-center text-5xl text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
					No Student found
				</p>
			)}
		</ul>
	)
}
