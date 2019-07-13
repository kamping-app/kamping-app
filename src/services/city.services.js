import Axios from 'axios'

const RESOURCE_NAME = `/cities`

const getAll = () => Axios.get(RESOURCE_NAME)
const get = id => Axios.get(`${RESOURCE_NAME}/${id}`)
const create = data => Axios.post(RESOURCE_NAME, data)
const update = (id, data) => Axios.put(`${RESOURCE_NAME}/${id}`, data)
const destroy = id => Axios.delete(`${RESOURCE_NAME}/${id}`)

export default {
  getAll,
  get,
  create,
  update,
  destroy
}
