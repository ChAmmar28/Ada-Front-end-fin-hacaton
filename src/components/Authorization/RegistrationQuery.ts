import axios from 'axios'

export const registerPost = async (
   email: string,
   firstName: string,
   lastName: string,
   password: string,
   confPassword: string
): Promise<{ success: boolean; data?: any }> => {
   try {
      const requestData = {
         email,
         first_name: firstName,
         last_name: lastName,
         password,
         password_confirmation: confPassword,
      }
      console.log(requestData)

      const url = 'https://it-intern-hub.freemyip.com/account/register/'

      const response = await axios.post(url, requestData, {
         headers: {
            'Content-Type': 'application/json',
         },
      })

      console.log(response.data)
      return { success: true, data: response.data }
   } catch (error) {
      console.error('Error:', error)
      return { success: false, data: error }
   }
}

export const activateAccount = async (code: any) => {
   try {
      const url = 'https://it-intern-hub.freemyip.com/account/activate/'
      console.log(code)
      const response = await axios.post(
         url,
         { code: code },
         {
            headers: {
               'Content-Type': 'application/json',
            },
         }
      )

      console.log(response.data)
   } catch (error) {
      console.error('Error:', error)
   }
}

export const logIn = async (
   email: any,
   password: any
): Promise<{ success: boolean; data?: any }> => {
   try {
      const url = 'https://it-intern-hub.freemyip.com/account/login/'

      const response = await axios.post(
         url,
         { email: email, password: password },
         {
            headers: {
               'Content-Type': 'application/json',
            },
         }
      )

      console.log(response.data)
      return { success: true, data: response.data }
   } catch (error) {
      console.error('Error:', error)
      return { success: false, data: error }
   }
}
