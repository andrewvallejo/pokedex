/** components | Student
 * @description: A single student
 * @elements: id, fullName, email, company, skill, average(of grades), test scores(grades), picture(pic)
 */

import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Tag} from '../../components/Tag'
import {TestScores} from '../../components/TestScores'
import {setStudentTags} from './studentSlice'

export const Student = ({student}) => {
	const [isShowTestScores, setShowTestScores] = useState(false)

	const [tags, setTags] = useState([])
	const [tag, setTag] = useState('')

	const studentTags = student.tags
	const studentId = student.id
	const dispatch = useDispatch()

	useEffect(
		() => {
			if (!tags || tags.length === 0) {
				setTags(studentTags)
			}
		},
		[studentTags, tags]
	)

	const handleChange = (e) => {
		setTag(e.target.value)
	}

	const handleToggle = () => {
		setShowTestScores(!isShowTestScores)
	}

	const handleAddTag = (event) => {
		const checkForDuplicate = tags.find((t) => t === tag)
		event.preventDefault()
		if (tag && !checkForDuplicate) {
			const tagList = [...tags, tag]
			setTags(tagList)
			setTag('')
			dispatch(setStudentTags({studentId, tagList}))
		}
	}

	return (
		<li className='flex flex-col py-4 px-4 w-full snap-bottom'>
			<div className='flex flex-row w-full flex-wrap relative'>
				{student.pic ? (
					<img
						className='rounded-full border w-40 h-40 md:w-32 md:h-32 align-self-center mx-auto my-2 md:mx-0 md:my-0'
						src={student.pic}
						alt={student.firstName}
					/>
				) : (
					<div className='rounded-full animate-pulse border background-gray-100 w-40 h-40 md:w-32 md:h-32 align-self-center mx-auto my-2 md:mx-0 md:my-0' />
				)}
				<div>
					<div className='px-5 flex-col'>
						<h2 className='px-3 md:px-0 font-bold uppercase text-2xl md:text-4xl'>{student.name}</h2>
						<div className='py-2 px-5'>
							<h3>Email: {student.email}</h3>
							<h3>Company: {student.company}</h3>
							<h3>Skill: {student.skill}</h3>
							<h3 className='flex'>Average: {student.average}%</h3>
							{studentTags && (
								<ul className='flex'>{tags.map((tag) => <Tag key={tag} characters={tag} />)}</ul>
							)}
							<form onSubmit={handleAddTag}>
								<input
									className='max-w-1/2 h-12 p-1 text-md border-b-2 border-b-gray-100 focus:outline-none focus:border-b-black'
									type='text'
									placeholder='Add a tag'
									value={tag}
									onChange={handleChange}
								/>
							</form>
							<ul className='flex flex-col pt-2'>
								{isShowTestScores && <TestScores name={student.name} grades={student.grades} />}
							</ul>
						</div>
					</div>
				</div>
				<div className='flex flex-1 flex-row-reverse'>
					<button
						className='absolute -top-10 md:top-0 text-[10rem] md:text-8xl text-gray-200 hover:text-black'
						onClick={handleToggle}>
						{isShowTestScores ? '-' : '+'}
					</button>
				</div>
			</div>
		</li>
	)
}
