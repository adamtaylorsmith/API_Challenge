const baseURL1 = 'https://ghibliapi.herokuapp.com/films';
const baseURL2 = 'https://ghibliapi.herokuapp.com/species';
const titleOptions = document.querySelector('select');
const filmTitle = document.querySelector('.header');
const filmDescription = document.querySelector('.description');
const filmDirector = document.querySelector('.director');
const filmRelease = document.querySelector('.date');
const filmPoster = document.querySelector('.poster');


async function catchTitle() {
  let response = await fetch(baseURL1);
  let blob = await response.json();
  let titles = blob.map(film => `${film.title}`);

  for (i=0; i<titles.length; i++) {
      let titleLI = document.createElement('option');
      titleLI.innerText = titles[i];
      titleOptions.appendChild(titleLI);
  };
};  
catchTitle();  


async function displayInfo() {

  let homePage = document.querySelector('.homePage');
  homePage.style.display = "none";

  while (filmTitle.firstChild) {
    filmTitle.removeChild(filmTitle.firstChild) }
  while (filmDescription.firstChild) {
    filmDescription.removeChild(filmDescription.firstChild) }
  while (filmDirector.firstChild) {
    filmDirector.removeChild(filmDirector.firstChild) }
  while (filmRelease.firstChild) {
    filmRelease.removeChild(filmRelease.firstChild) }
  while (filmPoster.firstChild) {
    filmPoster.removeChild(filmPoster.firstChild) }; 
  // Is there a way to improve on 5 whiles in a row?
 
  let response = await fetch(baseURL1);
  let blob = await response.json();

  let titles = blob.map(film => `${film.title}`);
  let descriptions = blob.map(film => `${film.description}`);
  let directors = blob.map(film => `${film.director}`);
  let dates = blob.map(film => `${film.release_date}`);

  let titleName = document.createElement('h1');
  titleName.innerText = titleOptions.value;
  filmTitle.appendChild(titleName);

  for (i=0; i<titles.length; i++) {
    if (titleOptions.value == titles[i]) {

      let descriptInfo = document.createElement('p');
      descriptInfo.innerText = descriptions[i];
      filmDescription.appendChild(descriptInfo);

      let directorInfo = document.createElement('h3');
      directorInfo.innerText = directors[i];
      filmDirector.innerText = "Directed by:";
      filmDirector.appendChild(directorInfo);

      let dateInfo = document.createElement('h3');
      dateInfo.innerText = dates[i];
      filmRelease.innerText = "Released in:";
      filmRelease.appendChild(dateInfo);

      let showPoster = document.createElement('img');
      showPoster.src = "assets/" + [i] + ".jpg";
      filmPoster.appendChild(showPoster);
    }
  };
}