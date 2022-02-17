import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		searchTerms: {
			name: {
				query: ''
			},
			tags: {
				query: ''
			}
		}
	},
	reducers: {
		setSearchTerm: (state, action) => {
			const {field, value} = action.payload
			state.searchTerms[field].query = value
		}
	}
})

export const {actions, reducer} = searchSlice

export const {setSearchTerm} = actions

export default reducer
