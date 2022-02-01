/** components | Student
 * @description: A single student
 * @elements: id, fullName, email, company, skill, average(of grades), test scores(grades), picture(pic)
 */

export const Student = ({student}) => {
	const testScores = student.grades.map((grade, i) => {
		const testNumber = i + 1
		return (
			<li
				key={`${student.name}: test ${testNumber}`}
				className='flex flex-row self-start justify-between w-2/5 -space-x-4'>
				<p>Test {testNumber}</p>
				<p>{grade}%</p>
			</li>
		)
	})

	return (
		<li className='flex flex-wrap py-2 px-4 '>
			<img className='rounded-full border-black border w-32 h-32' src={student.pic} alt={student.firstName} />
			<div className='px-5'>
				<h2 className='font-bold uppercase text-4xl '>{student.name}</h2>
				<div className='py-2 px-5'>
					<p>Email: {student.email}</p>
					<p>Company: {student.company}</p>
					<p>Skill: {student.skill}</p>
					<div className='flex'>
						Average:<span>{student.average}</span>%
					</div>
				</div>
				<ul className='py-2 px-5'>{testScores}</ul>
			</div>
		</li>
	)
}
