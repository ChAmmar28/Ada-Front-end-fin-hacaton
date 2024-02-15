import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
interface initState {
   token: string
   isLoading: boolean
   error: any
}

const initialState: initState = {
   token: '',
   isLoading: false,
   error: {},
}
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
interface LoginResponse {
   success: boolean
   data?: any
}
export const login = createAsyncThunk<
   LoginResponse,
   { email: string; password: string }
>('LogIn', async ({ email, password }) => {
   try {
      console.log(email)
      console.log(password)
      const requestData = {
         email: email,
         password: password,
      }
      const url = 'https://it-intern-hub.freemyip.com/account/login/'
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
})

// export const logIn = async (
//    email: any,
//    password: any
// ): Promise<{ success: boolean; data?: any }> => {
//    try {
//       console.log(email)
//       console.log(password)
//       const requestData = {
//          email: email,
//          password: password,
//       }
//       const url = 'https://it-intern-hub.freemyip.com/account/login/'

//       const response = await axios.post(url, requestData, {
//          headers: {
//             'Content-Type': 'application/json',
//          },
//       })

//       console.log(response)

//       return { success: true, data: response.data }
//    } catch (error) {
//       console.error('Error:', error)
//       return { success: false, data: error }
//    }
// }

const logIn = createSlice({
   name: 'LogIn',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(login.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(login.fulfilled, (state, action) => {
         state.isLoading = false
         state.token = action.payload.data.token
      })
      builder.addCase(login.rejected, (state, action) => {
         state.error = action.error
         state.isLoading = false
      })
   },
})

export type LogInState = ReturnType<typeof logIn.reducer>
export default logIn.reducer
