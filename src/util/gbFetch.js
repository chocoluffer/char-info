import constants from './../../constants'

export default function gbFetch(path, method = "GET", option = {}) {

  return fetch(constants.baseApi + path, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': 'en-US;q=1',
      'X-GB-Client': 'herer-web',
      'Authorization': 'Token ' + constants.userToken,
      'X-GB-DeviceId': option.deviceId || null,
      'X-GB-CompanyId': option.locationId || null
    },
    body: option.body ? JSON.stringify(option.body) : null,
  })
  .then(checkStatus)
}

function checkStatus(response) {
  // console.log('checking status', response)
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    // console.log(response)
    // console.log(response.json().then(text))
    response.json().then(text => console.log(text))
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function gbPager(path, collection) {

  const limit = 1000
  let items = []

  return gbFetch(path + `?by_active=true&limit=${limit}`)
  .then(response => response.json())
  .then(result => {
    items = items.concat(result[collection])
    if (result.meta && result.meta.total > limit) {

      let pager = gbFetch(path + `?by_active=true&limit=${limit}&offset=${limit}`)
      .then(response => response.json())
      .then(result => {
        items = items.concat(result[collection])
      })
      
      let count = Math.ceil(result.meta.total / limit)
      for (let i = 2; i < count; i++) {
        pager = pager.then(() => gbFetch(path + `?by_active=true&limit=${limit}&offset=${limit * i}`))
        .then(response => response.json())
        .then(result => {
          items = items.concat(result[collection])
        })
      }

      return pager.then(() => {
        return items
      })
    }
    return items
  })

}
