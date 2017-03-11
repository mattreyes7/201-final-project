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
  nameData.textContent = "Location";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Time Frame";
  trElement.appendChild(nameData);

  nameData = document.createElement('td');
  nameData.textContent = "Contact";
  trElement.appendChild(nameData);

  var checkbox = document.createElement("INPUT");
  checkbox.type = "checkbox";
  trElement.appendChild(checkbox);
};

renderHeader();


//rendering table rows function:
  this.renderAsRow = function(){

  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = jobNumber;
  trElement.appendChild(nameData);
  table.appendChild(trElement);


  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = this.name;
  trElement.appendChild(nameData);

  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = this.location;
  trElement.appendChild(nameData);

  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = this.timeFrame;
  trElement.appendChild(nameData);

  trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = this.Contact;
  trElement.appendChild(nameData);
};

var clientArray = [];

function Client(name, contact, descript, loc){
  this.name = name;
  this.email = email;
  this.descript = descript;
  this.loc = loc;
  clientArray.push(this);
}

// function handleForm(e){
//   e.preventDefault();
//   console.log(e);
//
//   var name = e.target.name.value;
//   var email = e.target.email.value;
//   var descript = e.target.descript.value;
//   var loc = e.target.loc.value;
//
//   console.log(name, loc);
//
//   var newClient = new Client(name, email, descript, loc);
//
//   e.target.name.value = null;
//   e.target.email.value = null;
//   e.target.descript.value = null;
//   e.target.loc.value = null;
//}

form.addEventListener('submit', renderAsRow);

