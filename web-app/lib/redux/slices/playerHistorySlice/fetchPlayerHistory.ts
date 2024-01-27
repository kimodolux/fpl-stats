import { PlayerHistory } from "@/types/PlayerHistory"

export const fetchHistory = async (player_id: number): Promise<PlayerHistory[] | undefined> => {
  const response = await fetch(`http://localhost:3000/player-history/${player_id}/api`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if(response){
    try {
      const result = await response.json()
      return result.data[0]
  } catch (e) {
      console.log(e);
      return undefined
  }
  }
  else{
    console.log("Error fetching response");
    return undefined
  }
}
