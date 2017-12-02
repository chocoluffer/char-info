import constants from './../../constants';

const baseApi = 'https://us.api.battle.net/wow/';

export default function _PureApi(path, method = "GET", data) {

  return fetch(baseApi + path, {
    method: method,
    headers: {
      'X-Originating-Ip': '52.119.125.70', // TODO: Fetch current IP
    },
    data: data ? data : null,
  })
  .then(response => {
    if(response.ok == true) {
      return response.json()
    } else {
      let outcome = {
         "ok": response.ok,
         "status": response.status,
         "statusText": response.statusText
      }
      return outcome
    }
  })
}
