import { TeamStanding } from "@/types/TeamStanding"

export const fetchTable = async (): Promise<TeamStanding[]> => {
  const response = await fetch('http://localhost:3000/table/api', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if(response){
    try {
      const result = await response.json()
      return result.data[0]
  } catch (e) {
      console.log(e);
      return []  as TeamStanding[]
  }
  }
  else{
    console.log("Error fetching response");
    return [] as TeamStanding[]
  }
}
