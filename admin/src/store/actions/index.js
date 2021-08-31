export const AlertAction = (show, alertType, message) => {
  return {
    type: 'ALERT',
    show,
    alertType,
    message
  }
}

export const UserAction = (logged, email, name) => {
  return {
    type: 'USER',
    logged,
    email,
    name
  }
}
