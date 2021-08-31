import axios from 'axios'

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

export const updateHero = async (data) => {
  try {
    const hero = await axios({
      url: `${process.env.REACT_APP_API_URL}/hero/update`,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      data: data,
      method: 'PUT'
    })
    return hero
  } catch (err) {
    return err.response
  }
}
