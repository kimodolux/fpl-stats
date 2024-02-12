import {GridColDef} from "@/app/lib/mui-data-grid"
import Link from 'next/link'

export const TeamPlayerColumns: GridColDef[] = [
    {
      field: 'web_name',
      headerName: 'Name',
      width: 150,
      renderCell: (params) => (
        <Link href={`/players/${params.id}`}>{params.value}</Link>
      )
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
    }
  ];