import {Box} from '../../lib/mui-material';

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
    return data
  }
  
  
  
  export default async function Page({ params }: { params: { player_id: string } }) {
    const data = await getData(params.player_id)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: "4em" }}>
              <Box sx={{ p: 1,m: 1, bgcolor: '#808080', borderRadius: 1,}}>
                <p>Price</p>
                <h4>$5.4</h4>
                <p>50 out of 100</p>
              </Box>
              <Box sx={{ p: 1,m: 1, bgcolor: '#808080', borderRadius: 1,}}>Points per Match</Box>
              <Box sx={{ p: 1,m: 1, bgcolor: '#808080', borderRadius: 1,}}>Form</Box>
              <Box sx={{ p: 1,m: 1, bgcolor: '#808080', borderRadius: 1,}}>Last gameweek points</Box>
              <Box sx={{ p: 1,m: 1, bgcolor: '#808080', borderRadius: 1,}}>Total Pts</Box>
              <Box sx={{ p: 1,m: 1, bgcolor: '#808080', borderRadius: 1,}}>Total Bonus</Box>
          </Box>
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
  