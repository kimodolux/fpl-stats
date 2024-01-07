/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: DataSliceState = {
  lastDataFetchDate: undefined
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLastDataFetch: (state) => {
      state.lastDataFetchDate = new Date().getTime()
    }
  }
})

/* Types */
export interface DataSliceState {
  lastDataFetchDate: number | undefined
}
