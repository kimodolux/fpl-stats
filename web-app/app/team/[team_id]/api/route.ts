import {BigQuery} from "@google-cloud/bigquery";
import { NextResponse } from "next/server";

const keyFilename = './gcs-creds/credentials.json';
const bigquery = new BigQuery({keyFilename});

  async function query(team_id: number) {

    const query_points = `SELECT *
      FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.points_table\`
      WHERE team_id = ${team_id}
      LIMIT 1`;
    
    const query_team = `SELECT *
      FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.team-1\`
      WHERE team_id = ${team_id}
      LIMIT 1`;

    const query_players = `SELECT *
      FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.elements-1\`
      WHERE team_code = ${team_id}
      LIMIT 1`;
 
    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query_team,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'asia-southeast1',
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const rows = await job.getQueryResults();

    return rows
  }
 
export async function GET(
  req: Request,
) {
  let data = await query(req);
  return NextResponse.json({ data } )
}

