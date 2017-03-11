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
}

form.addEventListener('submit', renderAsRow);
