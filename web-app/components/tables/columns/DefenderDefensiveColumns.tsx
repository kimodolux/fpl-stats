import {GridColDef} from "@/app/lib/mui-data-grid"
import Link from 'next/link'

export const DefenderDefensiveColumns: GridColDef[] = [
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
      
      field: 'goals_conceded_per_90',
      headerName: 'GC/90',
      width: 30,
      type: 'number'
    },
    {
      field: 'clean_sheets_per_90',
      headerName: 'CS/90',
      width: 30,
      type: 'number'
    },
    {
      field: 'total_points',
      headerName: 'Total Points',
      width: 20,
      type: 'number'
    }
  ];