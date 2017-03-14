var clientArray = [];
// var table = document.getElementById('postBoard');
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
  // localStorage.userName = JSON.stringify(userName);
  // localStorage.password = JSON.stringify(password);
  users.push([userName, password]);
  var lsUsers = JSON.stringify(users);
  localStorage.setItem('lsUsers', lsUsers);
  document.getElementById('greet').textContent = 'Hello, ' +  userName + '!';
  // localStorage.getItem('userName', JSON.parse(userName));
  // localStorage.getItem('password', JSON.parse(password));
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

  clientArray.push(newClient);

  //localStorage.setItem('lsClientArray', clientArray);
  console.log(newClient);

  localStorage.setItem('lsClient', JSON.stringify(newClient));

  location.href='postboard.html'

  // event.target.name.value = null;
  // event.target.email.value = null;
  // event.target.descript.value = null;
  // event.target.loc.value = null;
  // event.target.time.value = null;
}

var form  = document.getElementById('addForm');
form.addEventListener('submit', handleForm);
