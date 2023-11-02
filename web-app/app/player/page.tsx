"use client"

import { useEffect, useState } from 'react';
import {Box} from '../lib/mui';
import {DataGrid, GridColDef, GridValueGetterParams} from "../lib/mui-data-grid"
import Link from 'next/link'
import { Player } from '../../types/Player';
import { getTeamById } from '@/utils/team';

const columns: GridColDef[] = [
    {
      field: 'second_name',
      headerName: 'Name',
      width: 150,
      renderCell: (params) => (
        <Link href={`/player/${params.id}`}>{params.value}</Link>
      )
    },
    {
      field: 'team_name',
      headerName: 'Team Name',
      width: 150
    },
    {
      field: 'form',
      headerName: 'Form',
      width: 150,
      type: 'number',
    },
    {
      field: 'now_cost',
      headerName: 'Cost',
      width: 150,
      type: 'number',
    },
    {
      
      field: 'goals_scored',
      headerName: 'Goals',
      width: 150,
      type: 'number'
    },
    {
      field: 'assists',
      headerName: 'Assists',
      width: 150,
      type: 'number'
    },
    {
      field: 'total_points',
      headerName: 'Total Points',
      width: 150,
      type: 'number'
    },
    
  ];

  // TODO: add server side pagination

export default function Page() {
  const [data, setData] = useState<Player[] | null>(null)

  useEffect(() => {
    fetch('/player/api').then((res) => res.json())
    .then((returned_data) => {
      let player_data = returned_data.data[0]
      player_data.forEach((player: Player) => {
        player.team_name = getTeamById(player.team)
        player.now_cost =player.now_cost / 10
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
        <Box>
            <DataGrid
            rows={data}
            getRowId={row => row.id}
            columns={columns}
            initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 20 },
                  },
                  sorting: {
                    sortModel: [{ field: 'form', sort: 'desc' }],
                  },
            }}
            pageSizeOptions={[20]}
            />
        </Box>
    )
  }

  