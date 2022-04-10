const API_KEY = 'sk-nYI0IPT0GlGRxAe0jK8CX1gqwnNhaOzX2eRgZnGr'
const BASE_URL ='http://localhost:8080/api'

const apiCall = async (v) => {
  const response = await fetch(`${BASE_URL}/${v}`)
  .then(res => res.json())

  return response
}

export default apiCall;
