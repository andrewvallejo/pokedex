/** components | Student
 * @description: A single student
 * @elements: id, fullName, email, company, skill, average, grades, picture(pic)
 */

export const Student = ({student}) => {
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
			</div>
		</li>
	)
}
