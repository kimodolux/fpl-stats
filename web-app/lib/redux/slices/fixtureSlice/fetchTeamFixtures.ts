import { Fixture } from "@/types/Fixture"

export const fetchFixtures = async (team_id: string): Promise<Fixture[]> => {
  const response = await fetch(`http://localhost:3000/fixtures/${team_id}api`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if(response){
    try {
      const result = await response.json()
      return result.data[0]
  } catch (e) {
      console.log(e);
      return []  as Fixture[]
  }
  }
  else{
    console.log("Error fetching response");
    return [] as Fixture[]
  }
}
