'use strict'
var clientArray = [];

var table = document.getElementById('postBoard');

var users = [];

function Client(name, email, descript, loc, time){
  this.name = name;
  this.email = email;
  this.descript = descript;
  this.loc = loc;
  this.time = time;
}

// storing log in info
document.getElementById('loginSubmit').addEventListener('click', userLs);

function userLs(event){
  event.preventDefault();
  var userName = document.getElementById('userName').value;
  var password = document.getElementById('password').value;
  document.getElementById('greet').textContent = 'Hello, ' +  userName + '!';
  users.push([userName, password]);
  localStorage.setItem('lsUsers', JSON.stringify(users));
}
function handleForm(event){
  event.preventDefault();
  console.log('handle form');
  var name = event.target.name.value;
  var email = event.target.email.value;
  var descript = event.target.descript.value;
  var loc = event.target.loc.value;
  var time = event.target.time.value;
  var newClient = new Client(name, email, descript, loc, time);
  //restoring old entries to the aray of clients
  if (localStorage.lsClientArray) {
    var oldClients = JSON.parse(localStorage.getItem('lsClientArray'));
    //console.log('oldClients:' +oldClients)
    clientArray = oldClients;
    //console.log(clientArray);
  }
  clientArray.push(newClient);
  //saving clients to the local storage
  localStorage.setItem('lsClientArray', JSON.stringify(clientArray));
  // sending user to the postboard page

  location.href='postboard.html'

}
var form  = document.getElementById('addForm');
form.addEventListener('submit', handleForm);
