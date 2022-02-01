// create a slice for the search feature

import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchTerm: '',
		searchField: 'name',
		searchResults: []
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
