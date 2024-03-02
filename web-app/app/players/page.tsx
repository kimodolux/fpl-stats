"use client"

import { useEffect, useState } from 'react';
import {Box} from '@/app/lib/mui-material';
import { Player } from '@/types/Player';
import { getTeamById } from '@/utils/lookup';
import PlayerTable from '@/components/tables/PlayerTable';
import {AllPlayerColumns} from "@/components/tables/columns/AllPlayerColumns";

import {
  useSelector,
  selectPlayers,
  selectPlayersLoadStatus
} from '@/lib/redux'

  // TODO: add server side pagination
  
export default function Page() {
  const [tableData, setTableData] = useState<Player[] | undefined>(undefined)

  const players_data = useSelector(selectPlayers)
  const players_load_status = useSelector(selectPlayersLoadStatus)

  useEffect(() => {
      let player_data = [...players_data].map((player: Player) => {
       return {...player, team_name: getTeamById(player.team), now_cost: player.now_cost / 10}
      })
      setTableData(player_data)
  }, [players_data])
    
  if(players_load_status == "loading"){
    return (
      <Box>
        <p>Loading...</p>      
      </Box>
    )
  }

    return (
      <PlayerTable player_data={tableData} column_data={AllPlayerColumns} sort_by="total_points"/>
    )
  }

  