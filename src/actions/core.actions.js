import _PureApi from './../util/PureApiHandle'
// import uuidv4 from 'uuid/v4'

// import { RegisterActions } from './'

const TYPES = {
	INVALIDATE_CORE: 'INVALIDATE_CORE',
	FETCH_CHARACTERS_REQUEST: 'FETCH_CHARACTERS_REQUEST',
	FETCH_CHARACTERS_SUCCESS: 'FETCH_CHARACTERS_SUCCESS',
	FETCH_CHARACTERS_FAILURE: 'FETCH_CHARACTERS_FAILURE'
}

function invalidateCore() {
	return {
		type: TYPES.INVALIDATE_CORE
	}
}

function requestCore() {
	return {
		type: TYPES.FETCH_CHARACTERS_REQUEST,
		isFetching: true
	}
}

function receiveCore(json) {
  return {
    type: TYPES.FETCH_CHARACTERS_SUCCESS,
    list: json,
    receivedAt: Date.now()
  }
}

// function fetchCore() {
// 	return dispatch => {
// 		dispatch(requestCore())
// 		return gbFetch('')
// 	}
// }

export const CoreActions = {
	invalidateCore: invalidateCore,
	requestCore: requestCore,
	receiveCore: receiveCore,
	TYPES: TYPES
}