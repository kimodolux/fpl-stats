import { Player } from "@/types/Player"

export const fetchPlayers = async (): Promise<Player[]> => {
  const response = await fetch('http://localhost:3000/players/api', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  if(response){
    try {
      const result = await response.json()
      return result.data[0]
  } catch (e) {
      console.log(e);
      return []  as Player[]
  }
  }
  else{
    console.log("Error fetching response");
    return [] as Player[]
  }
}
