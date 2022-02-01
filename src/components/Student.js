/** components | Student
 * @description: A single student
 * @elements: id, fullName, email, company, skill, average(of grades), test scores(grades), picture(pic)
 */

import {useState} from 'react'

export const Student = ({student}) => {
	const [isShowTestScores, setShowTestScores] = useState(false)

	const testScores = student.grades.map((grade, i) => {
		const testNumber = i + 1
		const test = (
			<li key={`${student.name}: test ${testNumber}`} className='flex flex-row self-start justify-between w-3/5'>
				<p>Test {testNumber}:</p>
				<p>{grade}%</p>
			</li>
		)
		return <ul className='flex flex-row'>{test}</ul>
	})

	const handleToggle = () => {
		setShowTestScores(!isShowTestScores)
	}

	return (
		<li className='flex py-2 px-4'>
			<img className='rounded-full border-black border w-32 h-32' src={student.pic} alt={student.firstName} />
			<article className='px-5'>
				<h2 className='font-bold uppercase text-4xl'>{student.name}</h2>
				<div className='py-2 px-5'>
					<p>Email: {student.email}</p>
					<p>Company: {student.company}</p>
					<p>Skill: {student.skill}</p>
					<div className='flex'>
						<p>Average: {student.average}%</p>
					</div>
					{isShowTestScores && testScores}
				</div>
			</article>
			<article className='flex justify-end align-start  w-full relative'>
				<button
					className='text-8xl text-gray-200 self-start hover:text-black outline-none focus-within:text-black'
					onClick={handleToggle}>
					{isShowTestScores ? '-' : '+'}
				</button>
			</article>
		</li>
	)
}
