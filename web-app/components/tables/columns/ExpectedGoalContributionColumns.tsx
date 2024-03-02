import {GridColDef} from "@/app/lib/mui-data-grid"
import Link from 'next/link'

export const ExpectedGoalContributionColumns: GridColDef[] = [
    {
      field: 'web_name',
      headerName: 'Name',
      width: 80,
      renderCell: (params) => (
        <Link href={`/players/${params.id}`}>{params.value}</Link>
      )
    },
    {
      field: 'team_name',
      headerName: 'Team Name',
      width: 80
    },
    {
      field: 'now_cost',
      headerName: 'Cost',
      width: 20,
      type: 'number',
    },
    {
      field: 'expected_goals',
      headerName: 'xG',
      width: 20,
      type: 'number',
    },
    {
      field: 'expected_assists',
      headerName: 'xA',
      width: 20,
      type: 'number',
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
      type: 'number',
    }
  ];