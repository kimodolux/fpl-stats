"use client"

import { useEffect, useState } from 'react';
import {Box} from '../lib/mui-material';
import { Fixture } from "@/types/Fixture"
import { getTeamById } from '@/utils/lookup';

import {
  useSelector,
  selectFixtures,
  selectFixturesLoadStatus
} from '@/lib/redux'

  // TODO: add server side pagination

let gameweeks = [1,2,3,4,5,6,7,8,9.10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,,32,33,34,35,36,37,38]
  
export default function Page() {
  const fixtures_data = useSelector(selectFixtures)
  const fixtures_data_load_status = useSelector(selectFixturesLoadStatus)

  const [fixtures, setFixtures] = useState<Fixture[] | null>(null)

  useEffect(() => {
    setFixtures([...fixtures_data])
}, [fixtures_data])


  if(!fixtures || fixtures_data_load_status == "loading"){
    return (
      <Box>
        <p>Loading...</p>      
      </Box>
    )
  }
  //TODO add in tbd gameweek matches 
    return (
      <>
        <h1>Fixtures</h1>
        <h4>To be decided games</h4>
        {fixtures.filter((f: Fixture) => !f.event).map((f: Fixture) => {
          return <p key={f.id}>{getTeamById(f.team_h)} vs. {getTeamById(f.team_a)}</p>
        })}
        {gameweeks.map(gw => {
          return (
            <Box key={gw}>
              <h4>Gameweek {gw}</h4>
              {fixtures.filter((f: Fixture) => f.event == gw).map((f: Fixture) => {
                  return (
                    <p key={f.id}>{getTeamById(f.team_h)} vs. {getTeamById(f.team_a)}</p>
                  )
              })}
            </Box>  
          )
        })}
      </>
    )
  }

  