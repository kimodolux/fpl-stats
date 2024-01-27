/* Instruments */
import type { ReduxState } from '@/lib/redux'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPlayers = (state: ReduxState) => state.player.players
export const selectPlayersLoadStatus = (state: ReduxState) => state.player.status
export const selectPlayersLoaded = (state: ReduxState) => state.player.players_loaded
export const selectGLKPlayers = (state: ReduxState) => state.player.gk_count
export const selectDEFPlayers = (state: ReduxState) => state.player.def_count
export const selectMIDPlayers = (state: ReduxState) => state.player.mid_count
export const selectFWDPlayers = (state: ReduxState) => state.player.fwd_count