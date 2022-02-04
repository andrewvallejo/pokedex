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
		<li className='flex flex-col py-4 px-4 w-full'>
			<div className='flex flex-row-reverse justify-between'>
				<button className='text-8xl text-gray-200 self-start  hover:text-black' onClick={handleToggle}>
					{isShowTestScores ? '-' : '+'}
				</button>
				<article className='flex  max-w-fit max-h-full'>
					<img className='rounded-full border w-32 h-32 sticky' src={student.pic} alt={student.firstName} />
					<div className='px-5 flex-col'>
						<h2 className='font-bold uppercase text-4xl'>{student.name}</h2>
						<div className='py-2 px-5'>
							<h3>Email: {student.email}</h3>
							<h3>Company: {student.company}</h3>
							<h3>Skill: {student.skill}</h3>
							<h3 className='flex'>Average: {student.average}%</h3>
							{studentTags && (
								<ul className='flex'>{tags.map((tag) => <Tag key={tag} characters={tag} />)}</ul>
							)}
							<form className='focus-within:border-b-black focus-visible:ring-2' onSubmit={handleAddTag}>
								<input
									className='max-w-1/2 h-12 p-1 text-md  border-b focus:outline-none'
									type='text'
									placeholder='Add a tag'
									value={tag}
									onChange={handleChange}
								/>
							</form>

							{isShowTestScores && (
								<ul className='flex flex-col pt-2'>
									<TestScores name={student.name} grades={student.grades} />{' '}
								</ul>
							)}
						</div>
					</div>
				</article>
			</div>
		</li>
	)
}
