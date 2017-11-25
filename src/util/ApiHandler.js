import constants from './../../constants';

const baseApi = 'https://us.api.battle.net/wow/';

// function _formulateQuery(path) {
// 	return baseApi + 
// }

export default function _handleApi(path, method, data, cb, parameter) {
	const query = baseApi + path;
	
	fetch(query, {
		method: method,
		headers: {
			'X-Originating-Ip': '52.119.125.70',
		},
		data: data,
	})
	.then(response => {
 		if(response.ok == false) {
 			let outcome = {
 				"ok": response.ok,
 				"status": response.status,
 				"statusText": response.statusText
 			}
 			return outcome
 		} else {
 			return response.json()
 		}
  	})
  	.then(json => {
  		console.log('Returned from handling API - headed to callback');
  		cb(json, parameter)
  	})
}
