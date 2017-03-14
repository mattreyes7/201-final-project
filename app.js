var clientArray = [];
var table = document.getElementById('postBoard');
function Client(name, email, descript, loc, time){

  this.name = name;
  this.email = email;
  this.descript = descript;
  this.loc = loc;
  this.time = time;

}

// Creating a Post-Board Table
//creating a table header function:
var nameData;
var jobNumber = 1;
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



  function handleForm(event){
  event.preventDefault();
  console.log('handle form');
  var name = event.target.name.value;
  var email = event.target.email.value;
  var descript = event.target.descript.value;
  var loc = event.target.loc.value;
  var time = event.target.time.value;
  var newClient = new Client(name, email, descript, loc, time);
  clientArray.push(newClient);
  console.log(newClient);

  renderAsRow(newClient);
  // event.target.name.value = null;
  // event.target.email.value = null;
  // event.target.descript.value = null;
  // event.target.loc.value = null;
  // event.target.time.value = null;
}

var form  = document.getElementById('addForm');
form.addEventListener('submit', handleForm);
