import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Token, User } from "../../types/mainTypes"
import clientCall from "../../utils/axios"
import { ControllerForm, PositionType, StatusTypes } from "../../types/redux"

interface State {
	data:{
		status : StatusTypes,
		users : User[],
		
	},
	token: string,
	tokenStatus : StatusTypes
	page:number,
	positions : PositionType[],
	positionsStatus : StatusTypes
}


const initialState:State = {
	data : {
		status : StatusTypes.PENDING,
		users : [],
	},
	token : '',
	tokenStatus : StatusTypes.PENDING,
	page : 1,
	positions:[],
	positionsStatus : StatusTypes.PENDING
}

const mainSlice = createSlice({
	name: 'mainReducer',
	initialState,
	reducers: {
		incrementPage : (state) => {
			state.page++
		},
		setToken : (state, action:PayloadAction<string>) => {
state.token = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsersData.pending, (state) => {
			state.data = initialState.data
		}),
		builder.addCase(fetchUsersData.fulfilled, (state, action:PayloadAction<User[]>) => {
			state.data.status = StatusTypes.FULFILLED;
			state.data.users = action.payload;
			

		}),
		builder.addCase(fetchUsersData.rejected, (state) => {
			state.data.status = StatusTypes.REJECTED;
			state.data = initialState.data
		}),

		builder.addCase(postForm.pending, (state) => {
		state.tokenStatus = StatusTypes.PENDING
			state.token = initialState.token
		}),
		builder.addCase(postForm.fulfilled, (state, action:PayloadAction<string>) => {
			state.tokenStatus = StatusTypes.FULFILLED;
			state.token = action.payload;
			

		}),
		builder.addCase(postForm.rejected, (state) => {
			state.tokenStatus = StatusTypes.REJECTED;
			state.token = initialState.token
		})

		//positions
		builder.addCase(fetchPositions.pending, (state) => {
			state.positionsStatus = StatusTypes.PENDING
				state.positions = initialState.positions
			}),
			builder.addCase(fetchPositions.fulfilled, (state , action) => {
				state.positionsStatus = StatusTypes.FULFILLED;
				state.positions = action.payload;
			}),
			builder.addCase(fetchPositions.rejected, (state) => {
				state.positionsStatus = StatusTypes.REJECTED;
				state.positions = initialState.positions
			})


	},
  })


export const fetchPositions = createAsyncThunk<PositionType[]>('fetchPositions', async () => {
	const positionRes = await clientCall.get('positions').then((res) => {
		return res.data.positions
	}).catch((error) => {
		return error
	})
	console.log(positionRes);
	return positionRes
})


export const fetchUsersData = createAsyncThunk<User[], number>('fetchUsersData', async (page) => {
	const res = await clientCall.get(`users?page=1&count=${6 * page}`)
	return res.data.users
  })

  export const postForm = createAsyncThunk<string, ControllerForm>('postForm', async (controller) => {
	const {data, setSuccess, setError} = controller
	
	const res = await clientCall.get<Promise<Token>, Token>('token')

	const dataForm = {...data, photo : data.photo[0]}
	
	await clientCall.post('users', dataForm, {headers: {
		'Content-Type': 'multipart/form-data',
		Token: res.data.token,
	}}).then( () => {
		setSuccess(true)
	}).catch(({response}) => {
		switch (response.status) {
			case 409:
				setError(response.data.message)				
				break;
			default:
				break;
		}
		
	});

	return res.data.token
  })



export const { incrementPage } = mainSlice.actions

export default mainSlice.reducer