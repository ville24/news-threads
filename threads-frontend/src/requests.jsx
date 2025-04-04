import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL

export const getNewsSources = async () => {

  const response = await axios.get(baseUrl + 'api/conf?type=newsSource')
  return response.data.newsSources

}

export const getNewsRSS = async (query) => {

  const response = await axios.get(baseUrl + 'api/rss/' + query.queryKey[1])
  return response.data.items

}
