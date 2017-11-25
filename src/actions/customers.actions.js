import gbFetch from './../util/gbFetch'
import uuidv4 from 'uuid/v4'

import { RegisterActions } from './'

const TYPES = {
	SWAP_BTNS_OUTCOME: 'SWAP_BTNS_OUTCOME',
	SET_VERIFIED_AGE: 'SET_VERIFIED_AGE',
	RESET_VERIFICATION: 'RESET_VERIFICATION'
}

function swapStatus(btns, outcome) {
	return {
		type: TYPES.SWAP_BTNS_OUTCOME,
		btns: btns,
		outcome: outcome
	}
}

function setVerifiedAge(verifAge) {
	return {
		type: TYPES.SET_VERIFIED_AGE,
		age: verifAge,
	}
}

function resetVerification() {
	return {
		type: TYPES.RESET_VERIFICATION
	}
}

export const CustomersActions = {
	swapStatus: swapStatus,
	setVerifiedAge: setVerifiedAge,
	resetVerification: resetVerification,
	TYPES: TYPES
}