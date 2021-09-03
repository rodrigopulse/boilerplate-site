import axios from 'axios'

export const addUpdateHero = async (data, method) => {
  try {
    const hero = await axios({
      url: `${process.env.REACT_APP_API_URL}/hero/${
        method === 'POST' ? 'add' : 'update'
      }`,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: data,
      method: method
    })
    return hero
  } catch (err) {
    return err.response
  }
}

export const getHero = async () => {
  try {
    const hero = await axios({
      url: `${process.env.REACT_APP_API_URL}/hero/get`,
      method: 'GET'
    })
    return hero
  } catch (err) {
    return err.response
  }
}
