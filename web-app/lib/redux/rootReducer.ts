/* Instruments */
import { counterSlice } from './slices'
import { playerSlice } from './slices'
import { teamSlice } from './slices'
import { tableSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  player: playerSlice.reducer,
  team: teamSlice.reducer,
  table: tableSlice.reducer,
}
