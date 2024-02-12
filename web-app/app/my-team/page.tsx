"use client"

import {Box} from '@/app/lib/mui-material';
import { useEffect, useState } from 'react';
import { Player } from '@/types/Player';
import { Team } from '@/types/Team';
import { WeeklyPick } from '@/types/WeeklyPick';


import { getTeamById } from '@/utils/lookup';

  
  export default function Page() {
  
    useEffect(() => {
        async function fetchMyTeam() {
            let response = await fetch("/my-team/api/")
            let json = await response.json()
            console.log(json)
            setManagerData(json.data)
          }
          fetchMyTeam()
       
    }, [])


    const [manager_data, setManagerData] = useState<WeeklyPick | undefined>(undefined)
    const [player_data, setPlayerData] = useState<Player[] | undefined>(undefined)

    useEffect(() => {

    }, [manager_data])


    if(!manager_data){
        <Box>
          <p>Loading...</p>      
        </Box>
    }




    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
        {manager_data?.picks?.map((p: any) => {
            return (
                <p>Spot {p.position}: {p.element}</p>
            )
        })}
        </div>
      </main>
    )
  }
  