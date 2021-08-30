import axios from 'axios'

export const LoginService = async (data) => {
  try {
    const login = await axios({
      url: `${process.env.REACT_APP_API_URL}/user/login`,
      data: data,
      method: 'POST'
    })
    return login
  } catch (err) {
    return err.response
  }
}
