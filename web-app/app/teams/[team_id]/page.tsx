"use client"

import {Box} from '../../lib/mui-material';
import { useEffect, useState } from 'react';
import { Player } from '../../../types/Player';
import { Team } from '../../../types/Team';
import PlayerTable from '@/components/tables/PlayerTable';

import {
  useSelector,
  useDispatch,
  selectTeams,
  selectTeamsLoadStatus,
  selectPlayers,
  selectPlayersLoadStatus,
  fetchTeamsAsync,
  fetchPlayersAsync
} from '@/lib/redux'
  
  export default function Page({ params }: { params: { team_id: string } }) {
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(fetchTeamsAsync())
        dispatch(fetchPlayersAsync())
    }, [])
    let {team_id} = params

    const teams_data = useSelector(selectTeams)
    const team_load_status = useSelector(selectTeamsLoadStatus)

    const players_data = useSelector(selectPlayers)
    const players_load_status = useSelector(selectPlayersLoadStatus)

    const [team_data, setTeamData] = useState<Team | undefined>(undefined)
    const [player_data, setPlayerData] = useState<Player[] | undefined>(undefined)

    useEffect(() => {
      let team = teams_data.find((t: Team) => (t.id == +team_id))
      setTeamData(team)
      
      let teams_players = players_data.filter((p: Player) => (p.team == +team_id))
      setPlayerData(teams_players)
    }, [teams_data, players_data])

    if(!team_data || !player_data){
      if(team_load_status == "loading" || players_load_status == "loading"){
        <Box>
            <p>Loading...</p>      
          </Box>
      }
    }
    
    if(!team_data || !player_data){
      return (
        <h3>An error has occured, please reload</h3>
      )
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
        <h2>{team_data.name}</h2>
          <h3>Team Stats</h3>
            <h4>Position: {team_data.position}</h4>
            <h4>Points : {team_data.points}</h4>
            {/* <h4>Goals : {team_data.goals}</h4>
            <h4>Asissts : {team_data.assists}</h4>
            <h4>xG : {team_data.goals}</h4>
            <h4>xA : {team_data.goals}</h4>
            <h4>xGC : {team_data.goals}</h4> */}
            <h3>Fixtures</h3>
            
            <h3>Results</h3>

          <h3>Players</h3>
          <PlayerTable player_data={player_data}/>
        </div>
      </main>
    )
  }
  