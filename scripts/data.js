// Select the DOM element to update
const leagueNameElement = document.getElementById('league-name');


league = fetch('./_data/league.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON from the response
    })
    .then(data => {
        // Use the JSON data
        leagueNameElement.innerText = data.name;
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
        leagueNameElement.innerText = 'Failed to load league name.';
    });
/*
rosters = fetch('./_data/rosters.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON from the response
    })
    .then(data => {
        // Use the JSON data
        leagueNameElement.innerText = data.name;
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
        leagueNameElement.innerText = 'Failed to load league name.';
    });
    */