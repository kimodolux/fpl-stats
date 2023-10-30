async function getData(playerId: string) {
    let url = `https://fantasy.premierleague.com/api/element-summary/${playerId}/`
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
  
  
  
  export default async function Page({ params }: { params: { player_id: string } }) {
    const data = await getData(params.player_id)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          <h3>Stats</h3>
            <p>Total points</p>
            <p>Games played</p>
            <p>Minutes</p>
            <p>Goals</p>
            <p>xG</p>
            <p>xA</p>
          <h3>Fixtures</h3>
          {data.fixtures.map((fixture: any, index: number) => {
            if(index <= 1){
              return (
                <div key={fixture.id}>
                  <p>Id: {fixture.id}</p>
                  <p>Home Team: {fixture.team_h}</p>
                  <p>Away Team: {fixture.team_a}</p>
                  <p>Score: {fixture.team_h_score}:{fixture.team_a_score}</p>
                  <p>Kickoff time: {fixture.teamkickoff_time_h_score}</p>
                  <br/>
                </div>
              )
            }
          })}
          
          <h3>History</h3>
          {data.history_past.map((player_details: any, index: number) => {
            if(index <= 1){
              return (
                <div key={player_details.season_name}>
                  <p>Season: {player_details.season_name}</p>
                  <p>Total Points: {player_details.total_points}</p>
                  <p>Goals: {player_details.goals_scored}</p>
                  <p>Assists: {player_details.assists}</p>
                  <p>xG: {player_details.expected_goals}</p>
                  <p>xA: {player_details.expected_assists}</p>
                  <br />
                </div>
              )
            }
          })}
        </div>
      </main>
    )
  }
  