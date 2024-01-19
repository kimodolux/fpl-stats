import { Storage } from "@google-cloud/storage"
import fetch from "node-fetch";
import fs from "fs";

// Replace with your Google Cloud Storage credentials file path
const keyFilename = './gcs-creds/credentials.json';

// Replace with your Google Cloud Storage bucket name
const bucketName = 'fpl-sts-bucket-1';

// Create a new instance of the Storage class
const storage = new Storage({ keyFilename });


async function fetchURL(url){
  return fetch(url, {headers: {'Content-Type': 'application/json'}}).then(res => {
      if(!res.ok) {
        return res.text().then(text => { throw new Error(text) })
       }
      else {
      return res.json();
     }    
    })
    .catch(err => {
       console.log('caught it!',err);
    });
}

async function writePlayersToFile() {
    const bootstrap_res = await fetch(`https://fantasy.premierleague.com/api/bootstrap-static/`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let bootstrap_data = await bootstrap_res.json()
    const players_array = bootstrap_data.elements

    let players_ndJson = players_array.map(JSON.stringify).join('\n');
    
    fs.writeFile("temp/players.json", players_ndJson, function(err) {
      if (err) {
          console.log(err);
      }
      else{
        console.log("File written successfully\n");
      }
    });

  // Upload the file to the specified bucket


  console.log(`File 'players.json' uploaded successfully.`);

    if(players_array){
      await players_array.sort((a,b) => {return a.element - b.element}).forEach(async player => {
        // do it in batches to avoid issues
        if(player.id >= 100 && player.id < 111){
            const data = await fetchURL(`https://fantasy.premierleague.com/api/element-summary/${player.id}`)
            let players_history_ndJson = data.history.map(JSON.stringify).join('\n');
            if(players_history_ndJson){
              fs.writeFile(`temp/players/player-${player.id}-history.json`, players_history_ndJson, function(err) {
                if (err) {
                    console.log(err);
                }
              });
            }
            else{
              console.log(`${player.id} - error with file for history`)
            }

            let players_fixture_ndJson = data.fixtures.map(JSON.stringify).join('\n');
            if(players_fixture_ndJson){
              fs.writeFile(`temp/players/player-${player.id}-fixtures.json`, players_fixture_ndJson, function(err) {
                if (err) {
                    console.log(err);
                }
              });
            }
            else{
              console.log(`${player.id} - error with file for fixture`)
            }
            
            console.log(`Player ${player.id}`)
            await new Promise(r => setTimeout(r, 500));
          }
        })
    }     
}

async function uploadPlayers() {
  for(let i = 1; i <= 774; i++){
    // no records for
    if(i != 612){
    // Upload the file to the specified bucket
    await storage.bucket(bucketName).upload(`temp/players/player-${i}-fixtures.json`, {
      destination: `players/player-${i}-fixtures.json`,
    });
    // Upload the file to the specified bucket
    await storage.bucket(bucketName).upload(`temp/players/player-${i}-history.json`, {
      destination: `players/player-${i}-history.json`,
    });
    console.log(`Files for player ${i} uploaded successfully.`);
    }
  }
}

// writePlayersToFile()
//   .catch((err) => {
//     console.error('Error writing file:', err);
//   });

uploadPlayers()
  .catch((err) => {
    console.error('Error uploading file:', err);
  });