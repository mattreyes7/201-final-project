// 'use strict'

var table = document.getElementById('postBoard');
var nameData;

var jobNumber = 1;
var trElement;

// assigning localstorage array to the new variable to use in rendering rows

var clientArray = JSON.parse(localStorage.getItem('lsClientArray'));
//console.log(clientArray);

function renderHeader(){

  trElement = document.createElement('thead');
  table.appendChild(trElement);

  nameData = document.createElement('td');
  nameData.textContent = " Job #";
  trElement.appendChild(nameData);


  nameData = document.createElement('td');
  nameData.textContent = "Name";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "E-mail";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Job Description";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Location";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Time Frame";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Accept job";
  trElement.appendChild(nameData);

};

renderHeader();

//rendering table rows function:
function renderAsRow(client){
  for (var i = 0; i<clientArray.length; i++){


    trElement = document.createElement('tr');

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
   })

    table.appendChild(trElement);

  }
}


renderAsRow(clientArray);



//redirecting to maps
document.getElementById('goMaps').addEventListener('click', goToMaps);

function goToMaps(){
  location.href='job-location.html'
}

console.log(clientArray);
