import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'realtimedata',
    initialState: {
        data: []
    },
    reducers: {
        append: (state, action) => {
            state.data += action.payload
        }
    }
})

