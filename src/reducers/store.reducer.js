import { StoreActions } from './../actions'
const { SET_STORE_INFO, INVALIDATE_PINS, FETCH_PINS_REQUEST, FETCH_PINS_SUCCESS, INVALIDATE_STORE } = StoreActions.TYPES

export default function StoreReducer(
  state = {
    isFetching: false,
    didInvalidate: false,
    deviceIdentifier: null,
    locationId: null,
    verifyAge: null,
    pins: []
  },
  action
) {
	switch(action.type) {
		case INVALIDATE_PINS:
			return Object.assign({}, state, {
				didInvalidate: true
			})
		case FETCH_PINS_REQUEST:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case FETCH_PINS_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				pins: action.pins,
				payments: action.payments,
				verifyAge: action.verifyAge,
				lastUpdated: action.receivedAt
			})
		case SET_STORE_INFO:
			return Object.assign({}, state, {
				didInvalidate: false,
				deviceIdentifier: action.identifier,
				locationId: action.location
			})
		case INVALIDATE_STORE:
			return Object.assign({}, state, {
				didInvalidate: true
			})
		default:
			return state
	}
}