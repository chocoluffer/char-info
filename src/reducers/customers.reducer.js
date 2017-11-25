import { CustomersActions } from './../actions'
const { SWAP_BTNS_OUTCOME, SET_VERIFIED_AGE, RESET_VERIFICATION } = CustomersActions.TYPES

export default function CustomersReducer(
  state = {
    isFetching: false,
    didInvalidate: false,
    activeCustomer: null,
    verifyAge: {
    	age: null,
    	flag: false,
    	showBtns: true,
    	showOutcome: false
    },
    customers: []
  },
  action
) {
	switch(action.type) {
		case SWAP_BTNS_OUTCOME:
			return Object.assign({}, state, {
				verifyAge: Object.assign({}, state.verifyAge, {
		        	showBtns: action.btns,
		        	showOutcome: action.outcome
		        })
			})
		case SET_VERIFIED_AGE:
			return Object.assign({}, state, {
		    	verifyAge: Object.assign({}, state.verifyAge, {
		        	flag: true,
		        	age: action.age
		        })
		    })
		case RESET_VERIFICATION:
			return Object.assign({}, state, {
				verifyAge: Object.assign({}, state.verifyAge, {
					flag: false,
					age: null
				})
			})
		default:
			return state
	}
}