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
import { DefenderDefensiveColumns } from '@/components/tables/columns/DefenderDefensiveColumns';
import { DefenderOffensiveColumns } from '@/components/tables/columns/DefenderOffensiveColumns';
import { CostEffectiveColumns } from '@/components/tables/columns/CostEffectiveColumns';
import { ExpectedGoalContributionColumns } from '@/components/tables/columns/ExpectedGoalContributionColumns';
  
  export default function Page() {
  const [playerData, setPlayerData] = useState<Player[] | undefined>(undefined)
  const [goalkeeperData, setGoalkeeperData] = useState<Player[] | undefined>(undefined)
  const [defenderData, setDefenderData] = useState<Player[] | undefined>(undefined)
  const [midfielderData, setMidfielderData] = useState<Player[] | undefined>(undefined)
  const [forwardData, setForwardData] = useState<Player[] | undefined>(undefined)


  const players_data = useSelector(selectPlayers)
  const players_load_status = useSelector(selectPlayersLoadStatus)

  useEffect(() => {
    let player_data = [...players_data].map((player: Player) => {
        return {...player, team_name: getTeamById(player.team), now_cost: player.now_cost / 10, tp_divided_by_points: player.total_points/ player.now_cost}
    })
    setPlayerData(player_data)
    console.log(player_data)
    setGoalkeeperData(player_data.filter((p: Player) => p.element_type == 1))
    setDefenderData(player_data.filter((p: Player) => p.element_type == 2))
    setMidfielderData(player_data.filter((p: Player) => p.element_type == 3))
    setForwardData(player_data.filter((p: Player) => p.element_type == 4))
    
}, [players_data])

    return (
      <main className="">
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'flex-start'}}>
          <Box sx={{ p: 1,m: 1 }}>
              <h2>Top Forwards</h2>
              <div>
                <PlayerTable player_data={forwardData} column_data={HomePlayerColumns} sort_by="total_points"/>
              </div>
          </Box>
          <Box sx={{ p: 1,m: 1 }}>
              <h2>Top Midfielers</h2>
              <div>
                <PlayerTable player_data={midfielderData} column_data={HomePlayerColumns} sort_by="total_points"/>
              </div>
          </Box>
          <Box sx={{ p: 1,m: 1 }}>
              <h2>Top Defenders</h2>
              <div>
                <PlayerTable player_data={defenderData} column_data={HomePlayerColumns} sort_by="total_points"/>
              </div>
          </Box>
          <Box sx={{ p: 1,m: 1 }}>
              <h2>Top Goalkeepers</h2>
              <div>
                <PlayerTable player_data={goalkeeperData} column_data={HomePlayerColumns} sort_by="total_points"/>
              </div>
          </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'flex-start'}}>
          <Box sx={{ p: 1,m: 1 }}>
              <h2>Top Players by cost effectivness</h2>
              <div>
                <PlayerTable player_data={playerData} column_data={CostEffectiveColumns} sort_by="tp_divided_by_points"/>
              </div>
          </Box>
          <Box sx={{ p: 1,m: 1 }}>
              <h2>Top Defenders by offensive stats</h2>
              <div>
                <PlayerTable player_data={defenderData} column_data={DefenderOffensiveColumns} sort_by="expected_goal_involvements"/>
              </div>
          </Box>
          <Box sx={{ p: 1,m: 1 }}>
              <h2>Top Defenders by defensive stats</h2>
              <div>
                <PlayerTable player_data={defenderData} column_data={DefenderDefensiveColumns} sort_by="expected_goals_conceded"/>
              </div>
          </Box>
          <Box sx={{ p: 1,m: 1 }}>
              <h2>Top players by expected goal contribution</h2>
              <div>
                <PlayerTable player_data={playerData} column_data={ExpectedGoalContributionColumns} sort_by="expected_goal_involvements"/>
              </div>
          </Box>
          </Box>
      </main>
    )
  }
  