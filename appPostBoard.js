var table = document.getElementById('postBoard');
var nameData;
var jobNumber = 2;
var users = [];

var clientArray = JSON.parse(localStorage.getItem('lsClientArray'));
//console.log(clientArray);

function renderHeader(){

  var table = document.getElementById('postBoard');
  var trElement = document.createElement('thead');
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
renderAsRow = function(client){
for (i = 0; i<clientArray.length; i++){

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

    var checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    trElement.appendChild(checkbox);
    table.appendChild(trElement);


checkbox.addEventListener('click', function() {
     if (this.checked){
       this.parentElement.setAttribute('class', 'unavailable');
     } else {
       this.parentElement.setAttribute('class', 'available');
     }
   });
};
};


renderAsRow(clientArray);
console.log(clientArray);
