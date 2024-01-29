import {BigQuery} from "@google-cloud/bigquery";
import { NextResponse } from "next/server";

const keyFilename = './gcs-creds/credentials.json';
const bigquery = new BigQuery({keyFilename});

  async function query(team_id: string) {

    const query = `SELECT *
      FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.fixtures-1\`
      WHERE team_id = ${team_id}
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
  req: Request,
  { params }: { params: { team_id: string } }
) {
  let data = await query(params.team_id);
  try{
    return NextResponse.json({ data } )
  }
  finally{

  }
}

