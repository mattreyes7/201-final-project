// 'use strict'

var table = document.getElementById('postBoard');
var nameData;

var jobNumber = 1;
var trElement;
var cityName;
var cityMarker;
// assigning localstorage array to the new variable to use in rendering rows
var clientArray = JSON.parse(localStorage.getItem('lsClientArray'));

//console.log(clientArray);

var citiesCoordinates = [
  {name:'seattle', lat:47.6062, lng:-122.3321},
  {name:'redmond', lat:47.6740, lng:-122.1215},
  {name:'bellevue', lat:47.6101, lng:-122.2015},
  {name:'sammamish', lat:47.6163, lng:-122.0356},
  {name:'kirkland', lat: 47.6769,  lng:-122.2060},
  {name:'mercer island', lat: 7.5707, lng:-122.2221},
  {name: 'bothel', lat: 7.7610, lng:-122.2056},
  {name: 'new castle', lat: 47.5390, lng:-122.1557},
  {name:'renton', lat: 47.4829, lng:-122.2171},
  {name: 'issaquah', lat: 47.5301, lng: -122.0326},
  {name: 'carnation', lat:47.6479, lng:-121.914}
];
var cityNamesArray = ['seattle', 'redmond', 'bellevue', 'sammamish', 'kirkland', 'mercer island',
'bothel', 'new castle', 'renton', 'issaquah', 'carnation' ];

//console.log(clientArray);
function renderHeader() {
  trElement = document.createElement('thead');
  table.appendChild(trElement);

  nameData = document.createElement('td');
  nameData.textContent = ' Job #';
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = 'Name';
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = 'E-mail';
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = 'Job Description';
  trElement.appendChild(nameData);

  nameData = document.createElement('td');

  nameData.textContent = "City";

  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = 'Time Frame';
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = 'Accept job';
  trElement.appendChild(nameData);

};

renderHeader();

//rendering table rows function:
function renderAsRow(client) {
  for (var i = 0; i < clientArray.length; i++) {

    trElement = document.createElement('tr');


    trElement.setAttribute('class', 'available');
    nameData = document.createElement('td');
    nameData.textContent = jobNumber;

    trElement.appendChild(nameData);


    jobNumber++;

    nameData = document.createElement('td');
    nameData.textContent = client[i].name;
    trElement.appendChild(nameData);


    nameData = document.createElement('td');
    nameData.textContent = client[i].email;
    trElement.appendChild(nameData);


    nameData = document.createElement('td');
    nameData.textContent = client[i].descript;
    trElement.appendChild(nameData);


    nameData = document.createElement('td');
    nameData.textContent = client[i].loc;
    cityName = client[i].loc.toLowerCase();
    console.log(cityName);
    trElement.appendChild(nameData);

    nameData = document.createElement('td');
    nameData.textContent = client[i].time;
    trElement.appendChild(nameData);

    var checkbox = document.createElement('INPUT');
    checkbox.type = "checkbox";

    trElement.appendChild(checkbox);


    // dimming checjbox on click
    checkbox.addEventListener('click', function() {


      if (this.checked){

        this.parentElement.setAttribute('class', 'unavailable');
      } else {
        this.parentElement.setAttribute('class', 'available');
      }

      notifyPoster(this);
      console.log(checkbox.checked);
    })

    function notifyPoster(event) {
      if (event.checked) {
        alert('Thank you! A message has been sent to the poster of the favor.');
      } else {
        alert('Please make another selection.');
      }
    }

    table.appendChild(trElement);
    locateJob(cityName);
  }
}

renderAsRow(clientArray);

function locateJob(cityName){
  var index =cityNamesArray.indexOf(cityName);
  console.log(index);
  if (index ===-1) {
    cityMarker = 11;
  } else {
    cityMarker = index;
  }
  initMap();
  return '';
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat:47.6062, lng:-122.3321}
  });
//for (i=0; i<citiesCoordinates.length;i++){
  var marker = new google.maps.Marker({
    position: {lat: citiesCoordinates[cityMarker].lat, lng: citiesCoordinates[cityMarker].lng},
    map: map
  });
 }

  //position: {lat: citiesCoordinates[cityMarker].lat, lng: citiesCoordinates[cityMarker].lng},
