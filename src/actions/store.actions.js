import gbFetch from './../util/gbFetch'

const TYPES = {
	FETCH_PINS_REQUEST: 'FETCH_PINS_REQUEST',
	FETCH_PINS_SUCCESS: 'FETCH_PINS_SUCCESS',
	FETCH_PINS_FAILURE: 'FETCH_PINS_FAILURE',
	INVALIDATE_PINS: 'INVALIDATE_PINS',
	SET_STORE_INFO: 'SET_STORE_INFO',
	INVALIDATE_STORE: 'INVALIDATE_STORE',
}

function invalidatePins() {
	return {
		type: TYPES.INVALIDATE_PINS
	}
}

function requestPins() {
	return {
		type: TYPES.FETCH_PINS_REQUEST
	}
}

// function receievePins(json) {
function receievePins(json, json1) {
	// console.log(json)
	return {
		type: TYPES.FETCH_PINS_SUCCESS,
		pins: json.location.users,
		payments: json1.payment_methods,
		verifyAge: json.location.verify_age,
		receivedAt: Date.now()
	}
}

function fetchPins(path) {
	// console.log('Fetching pins')
	return dispatch => {
		dispatch(requestPins())
		return Promise.all([gbFetch(path).then(response => response.json()), gbFetch('/payment_methods').then(response => response.json())])
		// .then(response => {
			// console.log(response[0]().json())
			// console.log(response)
			// return response
			// return response.map(res => res.json())
		// })
		.then(result => {
			// console.log(result)
			dispatch(receievePins(result[0], result[1]))
		})
		// return gbFetch(path)
		// .then(response => response.json())
		// .then(json => { 
		// 	dispatch(receievePins(json))
		// });
	}
}

function shouldFetchPins(state) {
	const pins = state.store
	if (!pins) {
		return true
	} else if (pins.isFetching) {
		return false
	} else {
		return pins.didInvalidate
	}
}

function fetchPinsIfNeeded(path) {
	// console.log('Should I fetch')
	return (dispatch, getState) => {
		if(shouldFetchPins(getState())) {
			// console.log('I should')
			return dispatch(fetchPins(path))
		}
	}
}

function setStoreInfo(json) {
	return {
		type: TYPES.SET_STORE_INFO,
		identifier: json.device.identifier,
		location: json.device.location_id
	}
}

function invalidateStore() {
	return {
		type: TYPES.INVALIDATE_STORE
	}
}

export const StoreActions = {
	fetchPinsIfNeeded: fetchPinsIfNeeded,
	invalidatePins: invalidatePins,
	setStoreInfo: setStoreInfo,
	invalidateStore: invalidateStore,
	TYPES: TYPES
}
