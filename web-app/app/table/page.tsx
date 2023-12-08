"use client"

import { useEffect, useState } from 'react';
import {Box} from '../lib/mui-material';
import {DataGrid, GridColDef, GridValueGetterParams} from "../lib/mui-data-grid"
import Link from 'next/link'

const columns: GridColDef[] = [
    {
      field: 'team_name',
      headerName: 'Team name',
      width: 150,
      renderCell: (params) => (
        <Link href={`/teams/${params.value}`}>{params.value}</Link>
      )
    },
    {
      field: 'played',
      headerName: 'Played',
      type: 'number',
      width: 110,
    },
    {
      field: 'points',
      headerName: 'Points',
      type: 'number',
      width: 110,
    },
    {
      field: 'wins',
      headerName: 'Wins',
      type: 'number',
      width: 110,
    },
    {
      field: 'draws',
      headerName: 'Draws',
      type: 'number',
      width: 110,
    },
    {
      field: 'losses',
      headerName: 'Losses',
      type: 'number',
      width: 110,
    },
    {
      field: 'goal_difference',
      headerName: 'Goal Difference',
      type: 'number',
      width: 150,
    },
    {
      field: 'goals_for',
      headerName: 'Goals for',
      type: 'number',
      width: 150,
    },
    {
      field: 'goals_against',
      headerName: 'Goals against',
      type: 'number',
      width: 150,
    }
  ];

  type Table = {
    team_id: number,
    team_name: string,
    played: number,
    points: number,
    wins: number,
    draws: number,
    losses: number,
    goal_difference: number,
    goals_for: number,
    goals_against: number
  }

export default function Page() {
  const [data, setData] = useState<Table[] | null>(null)

  useEffect(() => {
    fetch('/table/api').then((res) => res.json())
    .then((returned_data) => {
      setData(returned_data.data[0])
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
            getRowId={row => row.team_id}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 20 },
                },
                sorting: {
                  sortModel: [{ field: 'points', sort: 'desc' }],
                },
            }}
            pageSizeOptions={[5, 10]}
            />
        </Box>
    )
  }

  