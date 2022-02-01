/** search | searchSlice | slice
	 * @description: A slice of the redux store that contains the search term and the field to search by.
	 * @redux: search/searchSlice
	 * @state: searchTerm, searchField
	 * @reducers: searchTerm, searchField
 */

import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchTerm: '',
		searchField: 'name'
	},
	reducers: {
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload
		},
		setSearchField: (state, action) => {
			state.searchField = action.payload
		}
	}
})

export const {actions, reducer} = searchSlice

export const {setSearchTerm, setSearchField} = actions

export default reducer
