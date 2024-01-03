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

async function uploadPlayers() {
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
  await storage.bucket(bucketName).upload("temp/players.json", {
    destination: "players.json",
  });

  console.log(`File 'players.json' uploaded successfully.`);

    let gameweek_data = Array(38)
    if(players_array){
      await players_array.forEach(async player => {
            // const res = await fetch(`https://fantasy.premierleague.com/api/element-summary/${player.id}/`, {
            //     headers: {
            //       'Content-Type': 'application/json',
            //     },
            //   })
            const data = await fetchURL(`https://fantasy.premierleague.com/api/element-summary/${player.id}/`)
            
            // let data = await res.json()
            let player_history = data.history
            player_history.forEach(async gameweek => {
              // push the gameweek data into an array
              // the array is 0 indexed while the data is 1 indexed, requiring a subtraction of 1
              gameweek_data[gameweek.round-1] = {
                player_id: player.id,
                ...gameweek
              }
            })
            // await new Promise(r => setTimeout(r, 1000));
        })
    }

    gameweek_data.forEach(async (gameweek, index) => {
      let players_gameweek_ndJson = gameweek.map(JSON.stringify).join('\n');
      // name the gameweeks starting at 1, needing a addition of 1 to the index
      fs.writeFile(`gameweek-${index+1}.json`, players_gameweek_ndJson, function(err) {
        if (err) {
            console.log(err);
        }
        else{
          console.log("File written successfully\n");
        }
      });

      // Upload the file to the specified bucket
      await storage.bucket(bucketName).upload(`gameweek-${index+1}.json`, {
        destination: `gameweek-${index+1}.json`,
      });

      console.log(`File gameweek-${index+1}.json uploaded successfully.`);
      })
}

uploadPlayers()
  .catch((err) => {
    console.error('Error uploading file:', err);
  });