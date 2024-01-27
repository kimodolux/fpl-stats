/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchPlayers } from './fetchPlayers'
import { fetchPlayerCount } from './fetchPlayerCount'

export const fetchPlayersAsync = createAppAsyncThunk(
  'player/fetchPlayers',
  async () => {
    const response = await fetchPlayers()
    return response
  }
)

export const fetchPlayersCountAsync = createAppAsyncThunk(
  'player/fetchPlayerCount',
  async () => {
    const response = await fetchPlayerCount()
    return response
  }
)