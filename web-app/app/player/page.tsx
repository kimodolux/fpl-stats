import Link from 'next/link'
import {getTeamById} from "../../utils/team"

async function getData() {
    let url = `https://fantasy.premierleague.com/api/bootstrap-static/`
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
    };
    let response =  await fetch(url, options)
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    let data = await response.json()
    let keys = Object.keys(data)
    return data
}
  
  export default async function Page() {
    const data = await getData()
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          <h3>Players</h3>
          {data.elements.map((player: any) => {
              return (
                <div key={player.id}>
                    <Link href={`/player/${player.id}`}>
                       <p>Id: {player.id}</p>
                        <p>Name: {player.first_name + " " + player.second_name}</p>
                        <p>Team: {getTeamById(player.team)}</p>
                        <p>Total Points: {player.total_points}</p>
                    </Link>

                  <br/>
                </div>
              )
          })}
        </div>
      </main>
    )
  }
  