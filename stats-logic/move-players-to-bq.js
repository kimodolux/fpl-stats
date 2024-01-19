import { Storage } from "@google-cloud/storage"
import { BigQuery } from "@google-cloud/bigquery"

const keyFilename = './gcs-creds/credentials.json';
const bigquery = new BigQuery({ keyFilename });
const storage = new Storage({ keyFilename });

const bucketName = 'fpl-sts-bucket-1';

async function loadCSVFromGCSToBQ(player_id, file_type) {
    const filename = `players/player-${player_id}-${file_type}.json`;
    const datasetId = 'fpl_stats_2_asia_se1';
    const tableId = `player-${file_type}-1`;
  
    const metadata = {
      sourceFormat: 'NEWLINE_DELIMITED_JSON',
      autodetect: true,
      writeDisposition: "WRITE_APPEND",
      location: 'asia-southeast1',
    };
  
    // Load data from a Google Cloud Storage file into the table
    const [job] = await bigquery
      .dataset(datasetId)
      .table(tableId)
      .load(storage.bucket(bucketName).file(filename), metadata);
  
    // load() waits for the job to finish
    console.log(`Job ${job.id} completed.`);
    await new Promise(r => setTimeout(r, 200));
    // Check the job's status for errors
    const errors = job.status.errors;
    if (errors && errors.length > 0) {
      throw errors;
    }
  }

  async function recrusiveRetry(player_id, file_type, retries=0){
    try{
      return await loadCSVFromGCSToBQ(player_id, file_type)
    }
    catch(err){
      console.error(`Error loading player ${player_id}, waiting ${Math.pow(2, retries)} seconds before retry:`, err);
      await new Promise(r => setTimeout(r, Math.pow(2, retries) * 1000));
      await recrusiveRetry(player_id, file_type, retries + 1)
    }
  }
  
  async function loadPlayersIntoBQ(file_type){
    for(let i = 1; i <= 774; i++){
      if(i!=612){
        await recrusiveRetry(i, file_type)
        console.log(`Transfered ${file_type} player id: ${i}`)
        await new Promise(r => setTimeout(r, 1000));
      }
    }
    // await recrusiveRetry(1)
  }
   
  await loadPlayersIntoBQ("history")
