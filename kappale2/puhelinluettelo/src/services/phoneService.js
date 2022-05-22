import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const create = (newObject) => {
    const req = axios.post(baseUrl, newObject)
    return req.then(res => res.data)
}

const del = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }


export default { getAll, create, del }