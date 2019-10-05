import { combineReducers } from 'redux'
import cards from './cards'
import columns from './columns'

export default combineReducers({
	cards,
	columns
});