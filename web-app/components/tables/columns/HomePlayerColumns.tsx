import {GridColDef} from "@/app/lib/mui-data-grid"
import Link from 'next/link'

export const HomePlayerColumns: GridColDef[] = [
    {
      field: 'web_name',
      headerName: 'Name',
      width: 100,
      renderCell: (params) => (
        <Link href={`/players/${params.id}`}>{params.value}</Link>
      )
    },
    {
      field: 'team_name',
      headerName: 'Team Name',
      width: 100
    },
    {
      field: 'form',
      headerName: 'Form',
      width: 20,
      type: 'number',
    },
    {
      field: 'now_cost',
      headerName: 'Cost',
      width: 20,
      type: 'number',
    },
    {
      
      field: 'goals_scored',
      headerName: 'Goals',
      width: 20,
      type: 'number'
    },
    {
      field: 'assists',
      headerName: 'Assists',
      width: 20,
      type: 'number'
    },
    {
      field: 'total_points',
      headerName: 'Total Points',
      width: 20,
      type: 'number'
    }
  ];