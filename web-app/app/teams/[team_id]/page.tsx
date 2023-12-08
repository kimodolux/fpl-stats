"use client"

import Link from 'next/link'
import {Box} from '../../lib/mui-material';
import {getTeamById} from "../../../utils/team"
import { useEffect, useState } from 'react';
import { Player } from '../../../types/Player';
import { Team } from '../../../types/Team';
import PlayerTable from '@/components/tables/PlayerTable';
  
  export default function Page({ params }: { params: { team_id: string } }) {
    let {team_id} = params

    const [team_data, setTeamData] = useState<Team | null>(null)
    const [player_data, setPlayerData] = useState<Player[] | null>(null)

    useEffect(() => {
      fetch(`/teams/${team_id}/team-api`).then((res) => res.json())
      .then((returned_data) => {
        setTeamData(returned_data.data[0][0])
      })
      fetch(`/teams/${team_id}/players-api`).then((res) => res.json())
      .then((returned_data) => {
        setPlayerData(returned_data.data[0])
      })
    }, [])

    if(!team_data || !player_data){
        return (
          <Box>
            <p>Loading...</p>      
          </Box>
        )
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
        <h2>Team</h2>
          <h3>Team Stats</h3>
            <h4>Position: {team_data.position}</h4>
            <h4>Points : {team_data.points}</h4>
            <h4>Goals : {team_data.goals}</h4>
            <h4>Asissts : {team_data.assists}</h4>
            <h4>Goals : {team_data.goals}</h4>
            <h4>Goals : {team_data.goals}</h4>

          <h3>Players</h3>
          <PlayerTable player_data={player_data}/>
        </div>
      </main>
    )
  }
  