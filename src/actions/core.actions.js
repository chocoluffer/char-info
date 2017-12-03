import _PureApi from './../util/PureApiHandle'
// import uuidv4 from 'uuid/v4'

const TYPES = {
	INVALIDATE_CORE: 'INVALIDATE_CORE',
	FETCH_CHARACTERS_REQUEST: 'FETCH_CHARACTERS_REQUEST',
	FETCH_CHARACTERS_SUCCESS: 'FETCH_CHARACTERS_SUCCESS',
	FETCH_CHARACTERS_FAILURE: 'FETCH_CHARACTERS_FAILURE',
	DISPLAY_SPECIFIC_CHARACTER: 'DISPLAY_SPECIFIC_CHARACTER'
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
	let currentToons = [];
	for(let i = 0; i < json.characters.length; i++) {
		if(json.characters[i].lastModified != 0) {
			currentToons.push(json.characters[i]);
		}
	}
	// console.log(currentToons)
	return currentToons
}

function receiveCore(rawList, filteredList) {
  return {
    type: TYPES.FETCH_CHARACTERS_SUCCESS,
    rawList: rawList,
    processedList: filteredList,
    receivedAt: Date.now()
  }
}

function fetchCore() {
	return dispatch => {
		dispatch(requestCore())
		return _PureApi('user/characters?access_token=fdmymbtcbtadmqsyuqy5nzzd')
		.then(json => {
			const filteredCore = filterCharacters(json)
			dispatch(receiveCore(json.characters, filteredCore))
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

function displaySpecific(character) {
	return {
		type: TYPES.DISPLAY_SPECIFIC_CHARACTER,
		toon: character
	}
}

export const CoreActions = {
	invalidateCore: invalidateCore,
	fetchCoreIfNeeded: fetchCoreIfNeeded,
	displaySpecific: displaySpecific,
	TYPES: TYPES
}