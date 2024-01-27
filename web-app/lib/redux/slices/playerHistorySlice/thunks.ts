/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchHistory } from './fetchPlayerHistory'
import { playerHistorySlice } from './playerHistorySlice'
import type { ReduxThunkAction } from '@/lib/redux'

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchPlayerHistoryAsync = createAppAsyncThunk(
  'playerHistory/fetchFixtures',
  async (player_id: number) => {
    const response = await fetchHistory(player_id)

    // The value we return becomes the `fulfilled` action payload
    return response
  }
)

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementPlayerIfOddAsync =
//   (amount: number): ReduxThunkAction =>
//   (dispatch, getState) => {
//     const currentValue = selectPlayerCount(getState())

//     if (currentValue % 2 === 1) {
//       dispatch(playerSlice.actions.incrementByAmount(amount))
//     }
//   }
