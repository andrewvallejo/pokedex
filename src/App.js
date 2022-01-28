import {useGetStudentsQuery} from './services/studentsApi'

export const App = () => {
	const {data, isLoading, isError} = useGetStudentsQuery()

	if (isLoading) return <p>Loading...</p>
	if (isError) return <p>Error :(</p>

	const students = data.students

	// TODO:Create a helper function folder

	const getAverage = (grades) => {
		const sum = grades.reduce((acc, grade) => {
			grade = parseInt(grade)
			acc += grade
			return acc
		}, 0)

		const average = sum / grades.length
		console.log('👾: getAverage -> average', average)
		return <p>{average}</p>
	}

	// TODO: move JSX logic into its own component

	return (
		<div>
			<h1>Students</h1>
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
		</div>
	)
}
