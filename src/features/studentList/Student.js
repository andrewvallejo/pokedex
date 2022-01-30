export const Student = ({student, average}) => {
	return (
		<li className='flex flex-wrap py-2 px-4 '>
			<img className='rounded-full border-black border w-32 h-32' src={student.pic} alt={student.firstName} />
			<div className='px-5'>
				<h2 className='font-bold uppercase text-4xl '>
					{student.firstName} {student.lastName}
				</h2>
				<div className='py-2 px-5'>
					<p>Email: {student.email}</p>
					<p>Company: {student.company}</p>
					<p>Skill: {student.skill}</p>
					<p className='flex'>
						Average: <span> {average}</span> %
					</p>
				</div>
			</div>
		</li>
	)
}
