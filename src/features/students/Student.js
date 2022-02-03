/** components | Student
 * @description: A single student
 * @elements: id, fullName, email, company, skill, average(of grades), test scores(grades), picture(pic)
 */

import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
// import {Tag} from '../../components/Tag'
import {TestScores} from '../../components/TestScores'
import {setStudentTags} from './studentSlice'

export const Student = ({student}) => {
	const [isShowTestScores, setShowTestScores] = useState(false)

	const [tagList, setTagList] = useState([])
	const [tag, setTag] = useState('')
	const studentTags = student.tags
	const dispatch = useDispatch()

	useEffect(
		() => {
			if (studentTags) {
				setTagList(studentTags)
			}
		},
		[studentTags]
	)

	const handleChange = (e) => {
		setTag(e.target.value)
	}

	const handleToggle = () => {
		setShowTestScores(!isShowTestScores)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(setStudentTags({studentId: student.id, newTags: [...tagList, tag]}))
		setTag('')
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
					{isShowTestScores && (
						<ul className='flex flex-col pt-2'>
							<TestScores name={student.name} grades={student.grades} />{' '}
						</ul>
					)}
					<article>
						<form
							className='flex flex-col w-1/2 justify-center items-center border-b  focus-within:border-b-black focus-visible:ring-2'
							onSubmit={handleSubmit}>
							<input
								className='w-full h-12 p-1 text-md focus:outline-none'
								type='text'
								placeholder='Add a tag'
								value={tag}
								onChange={handleChange}
							/>
						</form>
					</article>
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
