/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
import { fetchTeamsAsync } from './thunks'
import { Team } from '@/types/Team'

const initialState: TeamsSliceState = {
  teams: [],
  status: 'idle',
}

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamsAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTeamsAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.teams = action.payload
      })
  },
})

/* Types */
export interface TeamsSliceState {
  teams: Team[]
  status: 'idle' | 'loading' | 'failed'
}
