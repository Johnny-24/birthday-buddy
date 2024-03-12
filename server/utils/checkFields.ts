export const checkPassword = (password: string) => {
  if (password.length < 6) {
    return {
      success: false,
      message: 'Введите минимум 6 символов'
    }
  }
  return {
    uccess: false
  }
}
