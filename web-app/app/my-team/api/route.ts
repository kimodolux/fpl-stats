import {BigQuery} from "@google-cloud/bigquery";
import { NextResponse } from "next/server";

const keyFilename = './gcs-creds/credentials.json';
const bigquery = new BigQuery({keyFilename});

export async function GET(
  req: Request,
) {
  let manager_id = "1792479"
  let gameweek = "24"
  let response = await fetch(`https://fantasy.premierleague.com/api/entry/${manager_id}/event/${gameweek}/picks/`);
  let data = await response.json()
  try{
    return NextResponse.json({ data } )
  }
  finally{

  }
}

