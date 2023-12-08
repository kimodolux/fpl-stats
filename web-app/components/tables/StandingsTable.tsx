"use client"

import {Box} from '../../app/lib/mui-material';
import {DataGrid, GridColDef, GridValueGetterParams} from "../../app/lib/mui-data-grid"
import Link from 'next/link'
import { TeamStanding } from '../../types/TeamStanding';

const columns: GridColDef[] = [
    {
      field: 'team_name',
      headerName: 'Team name',
      width: 150,
      renderCell: (params) => (
        <Link href={`/teams/${params.id}`}>{params.value}</Link>
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

export default function StandingsTable(props: {points_data: TeamStanding[] | null}) {
    let {points_data} = props
  if(!points_data){
    return (
      <Box>
        <p>Loading...</p>      
      </Box>
    )
  }

    return (
        <Box>
            <DataGrid
            rows={points_data}
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

  