import { Storage } from "@google-cloud/storage"
import fetch from "node-fetch";
import fs from "fs";

// Replace with your Google Cloud Storage credentials file path
const keyFilename = './gcs-creds/credentials.json';

// Replace with your Google Cloud Storage bucket name
const bucketName = 'fpl-sts-bucket-1';

// Create a new instance of the Storage class
const storage = new Storage({ keyFilename });

async function uploadPlayers() {
    const bootstrap_res = await fetch(`https://fantasy.premierleague.com/api/element-summary/${element_id}/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let bootstrap_data = await bootstrap_res.json()
    const player_array = bootstrap_data.elements

    let players_data = []
    if(players_number){
        const players_length = player_array.length()
        for(player_id in players_length){
            const res = await fetch(`https://fantasy.premierleague.com/api/element-summary/${player_id}/`, {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
            let data = await res.json()
            players_data.push(data)
            await new Promise(r => setTimeout(r, 1000));
        }
    }

    let ndJson = data.map(JSON.stringify).join('\n');
    await fs.writeFile("players.json", ndJson, function(err) {
      if (err) {
          console.log(err);
      }
      else{
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("players.json", "utf8"));
      }
    });

  // Upload the file to the specified bucket
  await storage.bucket(bucketName).upload("players.json", {
    destination: "players.json",
  });

  console.log(`File 'players.json' uploaded successfully.`);
}

uploadPlayers()
  .catch((err) => {
    console.error('Error uploading file:', err);
  });