import _PureApi from './../util/PureApiHandle'
// import uuidv4 from 'uuid/v4'

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
		type: TYPES.FETCH_CHARACTERS_REQUEST
	}
}

function filterCharacters(json) {
	console.log('filter')
	console.log(json.characters)
	return json.characters
}

function receiveCore(json) {
  return {
    type: TYPES.FETCH_CHARACTERS_SUCCESS,
    list: json,
    receivedAt: Date.now()
  }
}

function fetchCore() {
	return dispatch => {
		dispatch(requestCore())
		return _PureApi('user/characters?access_token=fdmymbtcbtadmqsyuqy5nzzd')
		.then(json => {
			const filteredCore = filterCharacters(json)
			dispatch(receiveCore(filteredCore))
		});
	}
}

function shouldFetchCore(state) {
	const core = state.core
	if (!core) {
		return true
	} else if (core.isFetching) {
		return false
	} else {
		return core.didInvalidate
	}
}

function fetchCoreIfNeeded() {
	return (dispatch, getState) => {
		if(shouldFetchCore(getState())) {
			return dispatch(fetchCore())
		}
	}
}

export const CoreActions = {
	invalidateCore: invalidateCore,
	fetchCoreIfNeeded: fetchCoreIfNeeded,
	TYPES: TYPES
}