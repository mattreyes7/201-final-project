



































































































// Creating a Post-Board Table
//creating a table header function:
var nameData;
var jobNumber;
function renderHeader(){

  var table = document.getElementById('postBoard');
  var trElement = document.createElement('thead');
  table.appendChild(trElement);

  nameData = document.createElement('td');
  nameData.textContent = "#";
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
};

renderHeader();


//rendering table rows function:
  this.renderAsRow = function(){

  var trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = jobNumber;


  var trElement = document.createElement('tr');
  nameData = document.createElement('td');
  nameData.textContent = this.name;
  
};
// creating a footer function:
function renderFooter(){
  trElement = document.createElement('tfoot');
  nameData = document.createElement('td');
  nameData.textContent = 'Total';
  trElement.appendChild(nameData);
  standsTable.appendChild(trElement);
  var totalByHour;
  for (i = 0; i<8; i++){
    nameData = document.createElement('td');
    nameData.textContent = columnsTotal[i];
    console.log(nameData.textContent);
    totalByHour +=columnsTotal[i];
    trElement.appendChild(nameData);
    standsTable.appendChild(trElement);
  }
};
