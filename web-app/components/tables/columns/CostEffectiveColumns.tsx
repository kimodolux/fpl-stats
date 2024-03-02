import {GridColDef} from "@/app/lib/mui-data-grid"
import Link from 'next/link'

export const CostEffectiveColumns: GridColDef[] = [
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
      field: 'now_cost',
      headerName: 'Cost',
      width: 20,
      type: 'number',
    },
    {
      field: 'total_points',
      headerName: 'TP',
      width: 20,
      type: 'number',
    },
    {
      field: 'tp_divided_by_points',
      headerName: 'TP/Cost',
      width: 80,
      type: 'number'
    }
  ];