"use client"
import Link from 'next/link'
import {Box, Tabs, Tab, Typography} from '@/app/lib/mui-material';
import PlayerTable from '@/components/tables/PlayerTable';
import {HomePlayerColumns} from "@/components/tables/columns/HomePlayerColumns"
import StandingsTable from '@/components/tables/StandingsTable';
import { useEffect, useState } from 'react';
import { Player } from '@/types/Player';
import { getTeamById } from '@/utils/lookup';


import {
  useSelector,
  selectPlayers,
  selectPlayersLoadStatus
} from '@/lib/redux'
  
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

    return (
      <main className="">
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'flex-start'}}>
          <Box sx={{ p: 1,m: 1 }}>
            <Link href={"/players"}>
              <h2>Players</h2>
            </Link>
              <div>
                <PlayerTable player_data={tableData} column_data={HomePlayerColumns} sort_by="total_points"/>
              </div>
          </Box>
          <Box sx={{ p: 1,m: 1 }}>
            <Link href={"/teams"}>
                <h2>Teams</h2>
            </Link>
              <StandingsTable />
            </Box>

          </Box>
      </main>
    )
  }
  