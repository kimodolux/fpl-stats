import {BigQuery} from "@google-cloud/bigquery";
import { NextResponse } from "next/server";

const keyFilename = './gcs-creds/credentials.json';
const bigquery = new BigQuery({keyFilename});

const queryGks= `SELECT COUNT(*)
FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.players-1\`
WHERE element_type = 1;
`;

const queryDefs= `SELECT COUNT(*)
FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.players-1\`
WHERE element_type = 2;
`;

const queryMids= `SELECT COUNT(*)
FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.players-1\`
WHERE element_type = 3;
`;

const queryFwds= `SELECT COUNT(*)
FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.players-1\`
WHERE element_type = 4;
`;

  async function query(sql: string) {
    const options = {
      query: sql,
      location: 'asia-southeast1',
    };
    const [job] = await bigquery.createQueryJob(options);

    const rows = await job.getQueryResults();
    return rows
  }
 
export async function GET(
  req: Request,
) {
  let gk_data = await query(queryGks);
  let def_data = await query(queryDefs);
  let mid_data = await query(queryMids);
  let fwd_data = await query(queryFwds);

  try{
    return NextResponse.json({ 
        gk_count: gk_data[0][0]["f0_"],
        def_count: def_data[0][0]["f0_"],
        mid_count: mid_data[0][0]["f0_"],
        fwd_count: fwd_data[0][0]["f0_"]
    })
  }
  finally{

  }
}

