const url = "https://opendata.brussel.be/api/records/1.0/search/?dataset=comic-book-route&q=&rows=61";
let records;
const main = document.querySelector('main');

// use fetch api to get data from an url
// after a while (by using the 'then' notation) we call upon a function that 
// jsonifies the response
// after this has been done, it can take a while, we call upon yet another function
// this last function uses the json data and gives the commands that effectively make the content
// appear on screen.
fetch(url).then(function(response) {
    response.json().then(function(json) {
      records = json.records;
      addAllComicWalls(records);

    });
  });

  function addAllComicWalls(records){
    //loop over all records
    records.forEach(record => 
        addComicwall(record.fields)
    );

  }

  function addComicwall(comicwall){
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const authorParagraph = document.createElement('p');
    const yearParagraph = document.createElement('p');
    const image = document.createElement('img');
    
    heading.textContent = comicwall.personnage_s;

    authorParagraph.textContent = 'Auteur: ' + comicwall.auteur_s;

    yearParagraph.textContent = 'Jaar van creatie: ' + comicwall.annee;

    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(authorParagraph);
    section.appendChild(yearParagraph);
    //section.appendChild(image);
  }