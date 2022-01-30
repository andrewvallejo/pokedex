import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {StudentPage} from './components/StudentPage'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<StudentPage />} />
		</Routes>
	)
}
