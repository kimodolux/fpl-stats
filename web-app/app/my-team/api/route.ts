import {BigQuery} from "@google-cloud/bigquery";
import { NextResponse, NextRequest } from "next/server";

const keyFilename = './gcs-creds/credentials.json';
const bigquery = new BigQuery({keyFilename});

export async function GET(
  req: NextRequest,
) {
  const searchParams = req.nextUrl.searchParams
  const manager_id = searchParams.get('manager')
  const gameweek = searchParams.get('gameweek')
  let response = await fetch(`https://fantasy.premierleague.com/api/entry/${manager_id}/event/${gameweek}/picks/`);
  let data = await response.json()
  try{
    return NextResponse.json({ data } )
  }
  finally{

  }
}

