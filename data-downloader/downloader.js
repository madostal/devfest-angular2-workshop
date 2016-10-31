const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const previewSessionIds = [400, 700, 800];

const resultToJson = function(res) {
  return res.json();
};

Promise.all([
  fetch('https://devfest.cz/data/sessions.json').then(resultToJson),
  fetch('https://devfest.cz/data/speakers.json').then(resultToJson)
])
  .catch(error => console.error('Došlo k chybě při získávání dat', error))
  .then(([sessions, speakers]) => {
    let sessionArray = [];

    Object.keys(sessions)
      .forEach(id => {
        let session = sessions[id];

        if (!session.speakers) {
          return; // we want only regular lectures
        }

        session.speakers = session.speakers
          .map(speakerId => {
            return speakers[speakerId];
          });

        sessionArray.push(session)

      });

    return sessionArray;

  })
  .then(function(data) {
    fs.writeFile(path.dirname(__dirname) + '/src/data/sessions.json',
      JSON.stringify(data),
      (err) => {
        if (err) throw err;
        console.log('sessions.json has been saved!');
      });

    return data;
  })
  .then(function(data) {
    const previewData = data.filter(session => previewSessionIds.indexOf(session.id) !== -1);

    fs.writeFile(path.dirname(__dirname) + '/src/data/sessions-preview.json',
      JSON.stringify(previewData),
      (err) => {
        if (err) throw err;
        console.log('sessions-preview.json has been saved!');
      });

    return previewData;
  })
  .catch(error => console.error('Došlo k chybě při zpracování dat', error));


