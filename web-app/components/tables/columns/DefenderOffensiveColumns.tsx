import {GridColDef} from "@/app/lib/mui-data-grid"
import Link from 'next/link'

export const DefenderOffensiveColumns: GridColDef[] = [
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
      headerName: 'G',
      width: 20,
      type: 'number'
    },
    {
      field: 'assists',
      headerName: 'A',
      width: 20,
      type: 'number'
    },
    {
      field: 'expected_goal_involvements',
      headerName: 'xGI',
      width: 80,
      type: 'number',
    },
    {
      field: 'total_points',
      headerName: 'TP',
      width: 20,
      type: 'number'
    }
  ];