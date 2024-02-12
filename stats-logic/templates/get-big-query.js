import {BigQuery} from "@google-cloud/bigquery";

const keyFilename = './gcs-creds/credentials.json';
const bigquery = new BigQuery({keyFilename});
  // [END bigquery_client_default_credentials]
  async function query() {

    const query = `SELECT *
      FROM \`fpl-stats-6e68c.fpl_stats_2_asia_se1.team-1\`
      LIMIT 20`;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'asia-southeast1',
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const rows = await job.getQueryResults();
    // Print the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));

  }

  query();