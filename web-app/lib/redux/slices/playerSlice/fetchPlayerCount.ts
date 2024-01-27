import { PlayerCount } from "@/types/PlayerCount"

export const fetchPlayerCount = async (): Promise<PlayerCount | undefined> => {
  const response = await fetch('http://localhost:3000/players/count/api', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if(response){
    try {
      const result = await response.json()
      let count = {
        gk_count: result.gk_count,
        def_count: result.def_count,
        mid_count: result.mid_count,
        fwd_count: result.fwd_count
      }
      return count
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
