import { createSlice } from '@reduxjs/toolkit'

export interface MapState {
    extent: number[];
}

const initialState: MapState = {
    extent: []
}

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        changeExtent: (state, action) => {
            debugger // xx
            state.extent = action.payload
        }
    },
})

export const { changeExtent } = mapSlice.actions

export default mapSlice.reducer