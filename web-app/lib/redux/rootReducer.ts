/* Instruments */
import { counterSlice, playerSlice, teamSlice, tableSlice, fixtureSlice, dataSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  player: playerSlice.reducer,
  team: teamSlice.reducer,
  table: tableSlice.reducer,
  fixture: fixtureSlice.reducer,
  data: dataSlice.reducer,
}
