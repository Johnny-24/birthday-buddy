// import bcrypt from 'bcryptjs'
// import { checkPassword } from '~/server/utils/checkFields'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  // обработать ошибки
  const passwordError = checkPassword(password)
  if (!passwordError.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'minimum 6 symbols',
    })
  }




//   //
//   //
//   // console.log('checkPassword1', checkPassword)

//   //   throw createError({
//   //     statusCode: 400,
//   //     statusMessage: 'Minimum 6 symbols',
//   //     message: 'Все хуево'
//   //   })


//   // // проверка на существующего пользователя


//   // const hashPassword = bcrypt.hashSync(password, 7)

//   // const user = {
//   //   email,
//   //   password: hashPassword,
//   //   roles: ['USER']
//   // }

//   // console.log('user', user)


  return {
    success: true,
    message: 'Пользователь успешно зарегистрирован'
  }
})