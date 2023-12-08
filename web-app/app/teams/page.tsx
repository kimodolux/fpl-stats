"use client"

import { useEffect, useState } from 'react';
import { TeamStanding } from '../../types/TeamStanding';
import StandingsTable from '@/components/tables/StandingsTable';

export default function Page() {
  const [data, setData] = useState<TeamStanding[] | null>(null)

  useEffect(() => {
    fetch('/table/api').then((res) => res.json())
    .then((returned_data) => {
      setData(returned_data.data[0])
    })
  }, [])
    

    return (
      <StandingsTable points_data={data}/>
    )
  }

  