"use client"

import {Box} from '@/app/lib/mui-material';
// import { DataGridPremium, GridColDef } from '@/app/lib/mui-data-grid-premium';
import {DataGrid, GridColDef, GridValueGetterParams} from "@/app/lib/mui-data-grid"
import Link from 'next/link'

import {
  useSelector,
  selectTable,
  selectTableLoadStatus
} from '@/lib/redux'

const columns: GridColDef[] = [
    {
      field: 'team_name',
      headerName: 'Club',
      width: 100,
      renderCell: (params) => (
        <Link href={`/teams/${params.id}`}>{params.value}</Link>
      )
    },
    {
      field: 'played',
      headerName: 'MP',
      type: 'number',
      width: 50,
    },
    {
      field: 'points',
      headerName: 'Pts',
      type: 'number',
      width: 50,
    },
    {
      field: 'wins',
      headerName: 'W',
      type: 'number',
      width: 50,
    },
    {
      field: 'draws',
      headerName: 'D',
      type: 'number',
      width: 50,
    },
    {
      field: 'losses',
      headerName: 'L',
      type: 'number',
      width: 50,
    },
    {
      field: 'goal_difference',
      headerName: 'DG',
      type: 'number',
      width: 50,
    },
    {
      field: 'goals_for',
      headerName: 'GF',
      type: 'number',
      width: 50,
    },
    {
      field: 'goals_against',
      headerName: 'GC',
      type: 'number',
      width: 50,
    }
  ];

export default function StandingsTable() {
  
  const teams_data = useSelector(selectTable)
  const team_load_status = useSelector(selectTableLoadStatus)

  if(team_load_status == "loading"){
    return (
      <Box>
        <p>Loading...</p>      
      </Box>
    )
  }

    return (
            <DataGrid
            rows={teams_data}
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
            pageSizeOptions={[20]}
            />

    )
  }

  