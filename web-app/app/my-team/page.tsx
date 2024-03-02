"use client"

import {Box} from '@/app/lib/mui-material';
import { useEffect, useState } from 'react';
import { Player } from '@/types/Player';
import { PlayerPick, WeeklyPick } from '@/types/WeeklyPick';


import { getPositionShortNameByType, getTeamBadgeById, getTeamById } from '@/utils/lookup';
import { JerseyBadge } from '@/components/JerseyBadge';
import { PlayerHistory } from '@/types/PlayerHistory';

  
  export default function Page() {
  
    useEffect(() => {
        async function fetchMyTeam() {
            let manager_id = '1792479' // my manager id
            let gameweek = '18'
            let team_response = await fetch(`/my-team/api?manager=${manager_id}&gameweek=${gameweek}`)
            let team_json = await team_response.json()
            setManagerData(team_json.data)
            let players_response = await fetch(`/my-team/api/get-player-details?gameweek=${gameweek}&players=` + JSON.stringify(team_json.data.picks.map((t: PlayerPick) => t.element)))
            let players_json = await players_response.json()
            setPlayerData(players_json.data[0])
          }
          fetchMyTeam()
       
    }, [])


    const [manager_data, setManagerData] = useState<WeeklyPick | undefined>(undefined)
    const [player_data, setPlayerData] = useState<(Player & PlayerHistory)[] | undefined>(undefined)

    useEffect(() => {

    }, [manager_data])


    if(!manager_data || !player_data){
        return(
        <Box>
          <p>Loading...</p>      
        </Box>
        )
        
    }

    if(player_data.length < 15){
        console.log("less than 15 records in player_data")
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Box sx={{backgroundColor: "#00c04b", paddingTop: "2em"}}>
        <div>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                    {manager_data?.picks?.filter((pp: PlayerPick) => pp.position == 1).map((pp: PlayerPick) => {
                        let player = player_data?.find((p: Player) => p.id == pp.element) as any
                        if(player){
                            return (
                                <Box key={player.id}>
                                    <JerseyBadge badgeOptions={getTeamBadgeById(player.team)}/>
                                    <Box sx={{textAlign: "center"}}>
                                        <Box>
                                            <p>{player?.web_name}</p>
                                        </Box>
                                        <Box>
                                            <p>{player?.round_score}</p>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        }
                    })}
                </Box>   
        </div>
        <div>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                {manager_data?.picks?.filter((pp: PlayerPick) => pp.position < 12).map((pp: PlayerPick) => {
                    let player = player_data?.find((p: Player) => p.id == pp.element) as any
                    if(player?.element_type == 2){
                        return (
                            <Box key={player.id}>
                                <JerseyBadge badgeOptions={getTeamBadgeById(player.team)}/>
                                <Box sx={{textAlign: "center"}}>
                                    <Box>
                                        <p>{player?.web_name}</p>
                                    </Box>
                                    <Box>
                                    <p>{player?.round_score}</p>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }
                })}
                </Box>   
        </div>
        <div>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                {manager_data?.picks?.filter((pp: PlayerPick) => pp.position < 12).map((pp: PlayerPick) => {
                    let player = player_data?.find((p: Player) => p.id == pp.element) as any
                    if(player?.element_type == 3){
                        return (
                            <Box key={player.id}>
                                <JerseyBadge badgeOptions={getTeamBadgeById(player.team)}/>
                                <Box sx={{textAlign: "center"}}>
                                    <Box>
                                        <p>{player?.web_name}</p>
                                    </Box>
                                    <Box>
                                    <p>{player?.round_score}</p>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }
                })}
                </Box>
        </div>
        <div>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                {manager_data?.picks?.filter((pp: PlayerPick) => pp.position < 12).map((pp: PlayerPick) => {
                    let player = player_data?.find((p: Player) => p.id == pp.element) as any
                    if(player?.element_type == 4){
                        return (
                            <Box key={player.id}>
                                <JerseyBadge badgeOptions={getTeamBadgeById(player.team)}/>
                                <Box sx={{textAlign: "center"}}>
                                    <Box>
                                        <p>{player?.web_name}</p>
                                    </Box>
                                    <Box>
                                    <p>{player?.round_score}</p>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    }
                })}
                </Box>
        </div>
        <div>
            <Box sx={{ margin: '1em', padding: '1em', border: 1}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
                {manager_data?.picks?.filter((pp: PlayerPick) => pp.position >= 12).map((pp: PlayerPick) => {
                let player = player_data?.find((p: Player) => p.id == pp.element) as any
                if(player){
                    return (
                        <Box key={player.id}>
                            <p>{[13,14,15].includes(pp.position) ? pp.position - 12 + "." : ""} {getPositionShortNameByType(player.element_type)}</p>
                            <JerseyBadge badgeOptions={getTeamBadgeById(player.team)}/>
                                <Box sx={{textAlign: "center"}}>
                                    <Box>
                                        <p>{player?.web_name}</p>
                                        </Box>
                                        <Box>
                                        <p>{player?.round_score}</p>
                                        </Box>
                                    </Box>
                                </Box>
                    )
                }
                })}
                </Box>
            </Box>
        </div>
        </Box>
      </main>
    )
  }
  