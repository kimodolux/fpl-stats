"use client"

import { useEffect, useState } from 'react';
import {Box} from '../lib/mui-material';
import { Player } from '../../types/Player';
import { getTeamById } from '@/utils/team';
import PlayerTable from '@/components/tables/PlayerTable';

  // TODO: add server side pagination

export default function Page() {
  const [data, setData] = useState<Player[] | null>(null)

  useEffect(() => {
    fetch('/players/api').then((res) => res.json())
    .then((returned_data) => {
      let player_data = returned_data.data[0]
      player_data.forEach((player: Player) => {
        player.team_name = getTeamById(player.team)
        player.now_cost = player.now_cost / 10
      })
      setData(player_data)
    })
  }, [])
    
  if(!data){
    return (
      <Box>
        <p>Loading...</p>      
      </Box>
    )
  }

    return (
      <PlayerTable player_data={data}/>
    )
  }

  