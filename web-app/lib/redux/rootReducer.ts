/* Instruments */
import { counterSlice, playerSlice, teamSlice, tableSlice, fixtureSlice, dataSlice, playerHistorySlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  player: playerSlice.reducer,
  team: teamSlice.reducer,
  table: tableSlice.reducer,
  fixture: fixtureSlice.reducer,
  data: dataSlice.reducer,
  playerHistory: playerHistorySlice.reducer
}
