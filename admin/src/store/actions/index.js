export const AlertAction = (show, alertType, message) => {
  return {
    type: 'ALERT',
    show,
    alertType,
    message
  }
}
