"use client"

import {Box, Tabs, Tab, Typography} from '@/app/lib/mui-material';
import { useEffect, useState } from 'react';
import { Player } from '@/types/Player';
import { Fixture } from '@/types/Fixture';
import { PlayerHistory } from '@/types/PlayerHistory';
import { HistoryFixtureTabs } from '@/components/HistoryFixtureTabs';
import {getPositionByType, getTeamById} from "@/utils/lookup"

import {
  useSelector,
  useDispatch,
  selectPlayers,
  selectPlayersLoadStatus,
  selectFWDPlayers,
  selectMIDPlayers,
  selectDEFPlayers,
  selectGLKPlayers,
  selectPlayerHistory,
  selectPlayerHistoryLoadStatus,
  selectFixtures,
  selectFixturesLoadStatus,
  fetchPlayerHistoryAsync
} from '@/lib/redux'

    
export default function Page({ params }: { params: { player_id: string } }) {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchPlayerHistoryAsync(+player_id))
    }, [])
    let {player_id} = params

    const players_data= useSelector(selectPlayers)
    const players_status = useSelector(selectPlayersLoadStatus)
    const forward_count= useSelector(selectFWDPlayers)
    const midfielder_count= useSelector(selectMIDPlayers)
    const defender_count= useSelector(selectDEFPlayers)
    const goalkeeper_count= useSelector(selectGLKPlayers)
    const player_history_data = useSelector((state) => selectPlayerHistory(state, +player_id))
    const players_history_status = useSelector(selectPlayerHistoryLoadStatus)
    const fixtures_data= useSelector(selectFixtures)
    const fixtures_status = useSelector(selectFixturesLoadStatus)

    // const [playerData, setPlayerData] = useState<Player | undefined>(undefined)
    // const [fixtureData, setFixtureData] = useState<Fixture[] | undefined>(undefined)
      
    if(!players_data || !player_history_data  || !fixtures_data){
      return (
        <Box>
          <p>Loading...</p>      
        </Box>
      )
    }
    let player_data = players_data.find((p: Player) => (p.id == +player_id))

    if(!player_data){
      return (
        <Box>
          <p>Error occured, please reload</p>      
        </Box>
      )
    }

    let getPositionCount = (element_type: number) => {
      switch(element_type){
        case 1:
          return goalkeeper_count
        case 2: 
          return defender_count
        case 3:
          return midfielder_count
        case 4:
          return forward_count
        default:
          return 0
      }
    }

    const { 
      now_cost, now_cost_rank, selected_by_percent, selected_rank, points_per_game,
      points_per_game_rank, form, form_rank, total_points, bonus, web_name, element_type, team 
    } = player_data
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
                <p style={{margin: 0}}><b>{now_cost_rank}</b> of {getPositionCount(element_type)}</p>
              </Box>
              <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Selected</h4>
                <h2 style={{margin: 0}}>{selected_by_percent}%</h2>
                <p style={{margin: 0}}><b>{selected_rank}</b> out of {getPositionCount(element_type)}</p>
              </Box>
              <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Points per Match</h4>
                <h2 style={{margin: 0}}>{points_per_game}</h2>
                <p style={{margin: 0}}><b>{points_per_game_rank}</b> of {getPositionCount(element_type)}</p>
              </Box>
              <Box sx={{ p: 1,m: 1, display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <h4 style={{margin: 0}}>Form</h4>
                <h2 style={{margin: 0}}>{form}</h2>
                <p style={{margin: 0}}><b>{form_rank}</b> of {getPositionCount(element_type)}</p>
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
            <HistoryFixtureTabs history={player_history_data} fixtures={fixtures_data}/>
        </div>
      </main>
    )
  }
  