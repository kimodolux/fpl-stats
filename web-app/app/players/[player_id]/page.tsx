"use client"

import {Box} from '../../lib/mui-material';
import { useEffect, useState } from 'react';
import { Player } from '../../../types/Player';
import { Fixture } from '../../../types/Fixture';
import { Gameweek } from '../../../types/Gameweek';
import {getPositionByType, getTeamById} from "../../../utils/lookup"
    
export default function Page({ params }: { params: { player_id: string } }) {
    const [playerData, setPlayerData] = useState<Player | null>(null)
    const [fixtureData, setFixtureData] = useState<Fixture[] | null>(null)
    const [gameweekData, seteventData] = useState<Gameweek[] | null>(null)

    useEffect(() => {
      fetch('/players/api').then((res) => res.json())
      .then((returned_data) => {
        let players_data = returned_data.data[0]
        let player = players_data.find((p: Player) => p.id = +params.player_id)
        setPlayerData(player)
      })
    }, [])
      
    if(!playerData){
      return (
        <Box>
          <p>Loading...</p>      
        </Box>
      )
    }

    const { 
      now_cost, now_cost_rank, selected_by_percent, selected_rank, points_per_game,
      points_per_game_rank, form, form_rank, total_points, bonus, web_name, element_type, team 
    } = playerData
    return (
      <main>
        <div>
          <h2>{web_name}</h2>
          <h3>{getPositionByType(element_type)}</h3>
          <h4>{getTeamById(team)}</h4>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around",  p: 1,m: 1, marginLeft: "20%", marginRight: "20%", border: 1, borderColor: "#808080", borderRadius: 1}}>
            <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Price</h4>
                <h2 style={{margin: 0}}>£{now_cost/10}</h2>
                <p style={{margin: 0}}><b>{now_cost_rank}</b> of 100</p>
              </Box>
              <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Selected</h4>
                <h2 style={{margin: 0}}>{selected_by_percent}%</h2>
                <p style={{margin: 0}}><b>{selected_rank}</b> out of 100</p>
              </Box>
              <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Points per Match</h4>
                <h2 style={{margin: 0}}>{points_per_game}</h2>
                <p style={{margin: 0}}><b>{points_per_game_rank}</b> of 100</p>
              </Box>
              <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Form</h4>
                <h2 style={{margin: 0}}>{form}</h2>
                <p style={{margin: 0}}><b>{form_rank}</b> of 100</p>
              </Box>
              <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Total Pts</h4>
                <h2 style={{margin: 0}}>{total_points}</h2>
              </Box>
              <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Total Bonus Points</h4>
                <h2 style={{margin: 0}}>{bonus}</h2>
              </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly",  p: 1,m: 1}}>
            <Box>
              <h2>Next 3</h2>
            </Box>
            <Box>
              <h2>Last 3</h2>
            </Box>
            
          </Box>
          
          
          <h2>This Season</h2>
          <h3>Fixtures</h3>
          {/* {data.fixtures.map((fixture: any, index: number) => {
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
          })} */}
        </div>
      </main>
    )
  }
  