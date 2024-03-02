"use client"

import {Box} from '@/app/lib/mui-material';
import {DataGrid, GridColDef } from "@/app/lib/mui-data-grid"
import { Player } from '@/types/Player';

  // TODO: add server side pagination

export default function PlayerTable(props: {player_data: Player[] | undefined, column_data: GridColDef[], sort_by?: string}) {
    let {player_data, column_data, sort_by} = props
    
  if(!player_data){
    return (
      <Box>
        <p>Loading...</p>      
      </Box>
    )
  }

    return (
            <DataGrid
            rows={player_data}
            getRowId={row => row.id}
            columns={column_data}
            initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                  },
                  sorting: {
                    sortModel: [{ field: sort_by || 'form', sort: 'desc' }],
                  },
            }}
            pageSizeOptions={[10]}
            />
    )
  }

  