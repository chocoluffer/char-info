import { CoreActions } from './../actions'
const { INVALIDATE_CORE, FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } = CoreActions.TYPES

export default function CoreReducer(
  state = {
    isFetching: false,
    didInvalidate: false,
    coreList: []
  },
  action
) {
	switch(action.type) {
		case INVALIDATE_CORE:
			return Object.assign({}, state, {
				didInvalidate: true
			})
		case FETCH_CHARACTERS_REQUEST:
			return Object.assign({}, state, {
				isFetching: true
			})
		case FETCH_CHARACTERS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				coreList: action.list
			})
		case FETCH_CHARACTERS_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: true
			})
		default:
			return state
	}
}