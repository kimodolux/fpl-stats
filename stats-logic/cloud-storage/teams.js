import { Storage } from "@google-cloud/storage"
import fetch from "node-fetch";
import fs from "fs";

// Replace with your Google Cloud Storage credentials file path
const keyFilename = './gcs-creds/credentials.json';

// Replace with your Google Cloud Storage bucket name
const bucketName = 'fpl-sts-bucket-1';

// Create a new instance of the Storage class
const storage = new Storage({ keyFilename });

async function uploadFiles() {

  // // #BOOTSTRAP
  // const bootstrap_res = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       })

  // let bootstrap_data = await bootstrap_res.json()

  // // bigquery needs json in new line delimated, not comma delimted
  // // take out all arrays, make new line delimted, put back in
  // let events = bootstrap_data.events
  // let phases = bootstrap_data.phases
  // let teams = bootstrap_data.teams
  // let elements = bootstrap_data.elements
  // let element_stats = bootstrap_data.element_stats
  // let element_types = bootstrap_data.element_types

  // let nd_json_events = events.map(JSON.stringify).join('\n');
  // let nd_json_phases = phases.map(JSON.stringify).join('\n');
  // let nd_json_teams = teams.map(JSON.stringify).join('\n');
  // let nd_json_elements = elements.map(JSON.stringify).join('\n');
  // let nd_json_element_stats = element_stats.map(JSON.stringify).join('\n');
  // let nd_json_element_types = element_types.map(JSON.stringify).join('\n');


  // // #EVENTS
  // await fs.writeFile("temp/events.json", nd_json_events, function(err) {
  //   if (err) {
  //       console.log(err);
  //   }
  //   else{
  //     console.log("File written successfully\n");
  //   }
  // });

  // await storage.bucket(bucketName).upload("temp/events.json", {
  //   destination: "events.json",
  // });

  // console.log(`File 'events.json' uploaded successfully.`);

  // // #PHASES
  // await fs.writeFile("temp/phases.json", nd_json_phases, function(err) {
  //   if (err) {
  //       console.log(err);
  //   }
  //   else{
  //     console.log("File written successfully\n");
  //   }
  // });

  // await storage.bucket(bucketName).upload("temp/phases.json", {
  //   destination: "phases.json",
  // });

  // console.log(`File 'phases.json' uploaded successfully.`);

  // // #TEAMS
  // await fs.writeFile("temp/teams.json", nd_json_teams, function(err) {
  //   if (err) {
  //       console.log(err);
  //   }
  //   else{
  //     console.log("File written successfully\n");
  //   }
  // });

  // await storage.bucket(bucketName).upload("temp/teams.json", {
  //   destination: "teams.json",
  // });

  // console.log(`File 'teams.json' uploaded successfully.`);

  // // #ELEMENTS
  // await fs.writeFile("temp/elements.json", nd_json_elements, function(err) {
  //   if (err) {
  //       console.log(err);
  //   }
  //   else{
  //     console.log("File written successfully\n");
  //   }
  // });

  // await storage.bucket(bucketName).upload("temp/elements.json", {
  //   destination: "elements.json",
  // });

  // console.log(`File 'elements.json' uploaded successfully.`);

  //   // #ELEMENT STATS
  //   await fs.writeFile("temp/element_stats.json", nd_json_element_stats, function(err) {
  //     if (err) {
  //         console.log(err);
  //     }
  //     else{
  //       console.log("File written successfully\n");
  //     }
  //   });
  
  //   await storage.bucket(bucketName).upload("temp/element_stats.json", {
  //     destination: "element_stats.json",
  //   });
  
  //   console.log(`File 'element_stats.json' uploaded successfully.`);

  // // #ELEMENT TYPES
  // await fs.writeFile("temp/element_types.json", nd_json_element_types, function(err) {
  //   if (err) {
  //       console.log(err);
  //   }
  //   else{
  //     console.log("File written successfully\n");
  //   }
  // });

  // await storage.bucket(bucketName).upload("temp/element_types.json", {
  //   destination: "element_types.json",
  // });

  // console.log(`File 'element_types.json' uploaded successfully.`);


  // #FIXTURES
  const res = await fetch('https://fantasy.premierleague.com/api/fixtures/', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
let fixtures_data = await res.json()

let nd_json_fixtures = fixtures_data.map(JSON.stringify).join('\n');
fs.writeFile("temp/fixtures.json", nd_json_fixtures, function(err) {
  if (err) {
    console.log(err);
  }
  else{
    console.log("File written successfully\n");
  }
});

await storage.bucket(bucketName).upload("temp/fixtures.json", {
  destination: "fixtures.json",
});

  console.log(`File 'fixtures.json' uploaded successfully.`);
}

uploadFiles()
  .catch((err) => {
    console.error('Error uploading file:', err);
  });