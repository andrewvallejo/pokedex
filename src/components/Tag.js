/** components |  Tag
* @description: A component that displays a tag
*/

export const Tag = ({characters}) => {
	return (
		<li className='rounded flex justify-center px-8 py-2  mr-1  bg-gray-100'>
			<p>{characters}</p>
		</li>
	)
}
