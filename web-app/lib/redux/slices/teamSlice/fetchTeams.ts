import { Team } from "@/types/Team"

export const fetchTeams = async (): Promise<Team[]> => {
  const response = await fetch('http://localhost:3000/teams/api', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if(response){
    try {
      const result = await response.json()
      return result.data[0]
  } catch (e) {
      console.log(e);
      return []  as Team[]
  }
  }
  else{
    console.log("Error fetching response");
    return [] as Team[]
  }
}
