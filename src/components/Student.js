/** components | Student
 * @description: A single student
 * @elements: id, fullName, email, company, skill, average(of grades), test scores(grades), picture(pic)
 */

import {useState} from 'react'

export const Student = ({student}) => {
	const [isShowTestScores, setShowTestScores] = useState(false)

	const testScores = student.grades.map((grade, i) => {
		const testNumber = i + 1
		return (
			<li key={`${student.name}: test ${testNumber}`} className='flex flex-row self-start justify-between w-3/5'>
				<p>Test {testNumber}:</p>
				<p>{grade}%</p>
			</li>
		)
	})

	const handleToggle = () => {
		setShowTestScores(!isShowTestScores)
	}

	return (
		<li className='flex py-2 px-4'>
			<img className='rounded-full self-center border w-32 h-32' src={student.pic} alt={student.firstName} />
			<article className='px-5 w-full'>
				<h2 className='font-bold uppercase text-4xl'>{student.name}</h2>
				<div className='py-2 px-5'>
					<p>Email: {student.email}</p>
					<p>Company: {student.company}</p>
					<p>Skill: {student.skill}</p>
					<p className='flex'>Average: {student.average}%</p>
					{isShowTestScores && <ul className='flex flex-col pt-2'>{testScores}</ul>}
				</div>
			</article>
			<article className='flex justify-end align-start w-full '>
				<button className='text-8xl text-gray-200 self-start hover:text-black' onClick={handleToggle}>
					{isShowTestScores ? '-' : '+'}
				</button>
			</article>
		</li>
	)
}
