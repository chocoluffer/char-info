import { CoreActions } from './../actions'
const { INVALIDATE_CORE, FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE, DISPLAY_SPECIFIC_CHARACTER } = CoreActions.TYPES

export default function CoreReducer(
  state = {
    isFetching: false,
    didInvalidate: false,
    displayCharacter: {
    	flag: false,
    	character: { "name": "placeholder", "realm": "placeholder" }
    },
   	fullList: [],
    activeList: []
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
				fullList: action.rawList,
				activeList: action.processedList
			})
		case FETCH_CHARACTERS_FAILURE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: true
			})
		case DISPLAY_SPECIFIC_CHARACTER:
			return Object.assign({}, state, {
				displayCharacter: Object.assign({}, state.displayCharacter, {
					flag: true,
					character: action.toon
				})
			})
		default:
			return state
	}
}