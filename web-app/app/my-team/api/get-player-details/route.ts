import {BigQuery} from "@google-cloud/bigquery";
import { NextResponse, NextRequest } from "next/server";

const keyFilename = './gcs-creds/credentials.json';
const bigquery = new BigQuery({keyFilename});

async function query(player_ids: string[], gameweek: string){
    const query = `SELECT 
      player.id,
      player.web_name,
      player.team,
      player.element_type,
      history.total_points as round_score
      FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.players-1\` AS player
      LEFT JOIN \`fpl-stats-6e68c.fpl_stats_2_asia_se1.player-history-1\` AS history
      ON player.id = history.element
      WHERE id IN (${player_ids.join(',')}) AND round = ${gameweek};
    `;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'asia-southeast1',
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);

    // Wait for the query to finish
    const rows = await job.getQueryResults();

    return rows
  }

export async function GET(
  req: NextRequest
) {
  const searchParams = req.nextUrl.searchParams
  const players_string = searchParams.get('players')
  const gameweek = searchParams.get('gameweek')
  if(players_string && gameweek){
    const players = JSON.parse(players_string)
    let data = await query(players, gameweek);
    try{
        return NextResponse.json({ data } )
      }
      finally{
    
      }
  }
  return
  
  
}

