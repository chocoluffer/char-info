import constants from './../../constants';

const baseApi = 'https://us.api.battle.net/wow/';

export default function _PureApi(path, method = "GET", data) {

  fetch(baseApi + path, {
    method: method,
    headers: {
      'X-Originating-Ip': '52.119.125.70', // TODO: Fetch current IP
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
}

// body: option.body ? JSON.stringify(option.body) : null,
