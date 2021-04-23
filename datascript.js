const url = "https://opendata.brussel.be/api/records/1.0/search/?dataset=comic-book-route&q=&rows=61";
let records;
const main = document.querySelector('main');

fetch(url).then(function(response) {
    response.json().then(function(json) {
      records = json.records;
      console.log(json);
      addContent(records[1].fields);
    });
  });

 


  function addContent(comicwall){
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');
    const image = document.createElement('img');

    // give the <section> a classname equal to the product "type" property so it will display the correct icon
    section.setAttribute('class', comicwall.auteur_s);

    
    heading.textContent = comicwall.personnage_s;

    // Give the <p> textContent equal to the product "price" property, with a $ sign in front
    // toFixed(2) is used to fix the price at 2 decimal places, so for example 1.40 is displayed
    // as 1.40, not 1.4.
    para.textContent = 'auteur: ' + comicwall.auteur_s;

    // Set the src of the <img> element to the ObjectURL, and the alt to the product "name" property
    //image.src = objectURL;
    //image.alt = product.name;

    // append the elements to the DOM as appropriate, to add the product to the UI
    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
    //section.appendChild(image);
  }