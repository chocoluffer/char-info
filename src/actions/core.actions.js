import gbFetch from './../util/gbFetch'
// import uuidv4 from 'uuid/v4'

// import { RegisterActions } from './'

const TYPES = {
	INVALIDATE_CORE,
	FETCH_CHARACTERS_REQUEST,
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_FAILURE
}

function invalidate() {
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
    core: json,
    receivedAt: Date.now()
  }
}

// function fetchCore() {
// 	return dispatch => {
// 		dispatch(requestCore())
// 		return gbFetch('')
// 	}
// }

export const CustomersActions = {
	swapStatus: swapStatus,
	setVerifiedAge: setVerifiedAge,
	resetVerification: resetVerification,
	TYPES: TYPES
}