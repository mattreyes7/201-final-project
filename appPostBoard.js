var table = document.getElementById('postBoard');
var nameData;
var jobNumber = 2;
var users = [];
// debugger;
var newClient = JSON.parse(localStorage.getItem('lsClient'));

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
  renderAsRow = function(Client){

  // localStorage.getItem('lsClient', JSON.parse(newClient));
  trElement = document.createElement('tr');

  nameData = document.createElement('td');
  nameData.textContent = jobNumber;
  trElement.appendChild(nameData);

  jobNumber++;


  nameData = document.createElement('td');
  nameData.textContent = Client.name;
  trElement.appendChild(nameData);


  nameData = document.createElement('td');
  nameData.textContent = Client.email;
  trElement.appendChild(nameData);


  nameData = document.createElement('td');
  nameData.textContent = Client.descript;
  trElement.appendChild(nameData);


  nameData = document.createElement('td');
  nameData.textContent = Client.loc;
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = Client.time;
  trElement.appendChild(nameData);

  var checkbox = document.createElement("INPUT");
  checkbox.type = "checkbox";
  trElement.appendChild(checkbox);

  table.appendChild(trElement);
  checkbox.addEventListener("click", function() {
     alert('Good Luck!!');
   })
 };

  console.log(newClient);
  renderAsRow(newClient);
