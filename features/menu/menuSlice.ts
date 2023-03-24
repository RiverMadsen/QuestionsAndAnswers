import { createSlice } from '@reduxjs/toolkit'

export interface AppState {
    types: string[];
    selected?: string;
}

const initialState: AppState = {
    types: []
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        updateTypes: (state, action) => {
            // ebugger // xx
            state.types = action.payload
        },
        updateSelected: (state, action) => {
            state.selected = action.payload
        }
    },
})

export const { updateTypes, updateSelected} = menuSlice.actions

export default menuSlice.reducer