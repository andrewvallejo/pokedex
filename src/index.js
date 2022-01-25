import './style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import {App} from './App'
import {store} from './app/store'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
		,
	</Provider>,
	document.getElementById('root')
)
