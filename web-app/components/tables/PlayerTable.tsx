"use client"

import {Box} from '../../app/lib/mui-material';
import {DataGrid, GridColDef, GridValueGetterParams} from "../../app/lib/mui-data-grid"
import Link from 'next/link'
import { Player } from '../../types/Player';

const columns: GridColDef[] = [
    {
      field: 'web_name',
      headerName: 'Name',
      width: 150,
      renderCell: (params) => (
        <Link href={`/players/${params.id}`}>{params.value}</Link>
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

export default function PlayerTable(props: {player_data: Player[] | null}) {
    let {player_data} = props
    
  if(!player_data){
    return (
      <Box>
        <p>Loading...</p>      
      </Box>
    )
  }

    return (
        <Box>
            <DataGrid
            rows={player_data}
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

  