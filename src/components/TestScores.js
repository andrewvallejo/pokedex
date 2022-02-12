/** components |  TestScores
* @description: A component that displays the test scores of a student
*/

export const TestScores = ({name, grades}) =>
	grades.map((grade, i) => {
		const testNumber = i + 1
		return (
			<li
				key={`${name}: test ${testNumber}`}
				className='flex flex-row self-start justify-between w-44'
				data-cy='testscores'>
				<p>Test {testNumber}:</p>
				<p>{grade}%</p>
			</li>
		)
	})
