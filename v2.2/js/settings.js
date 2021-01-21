//get_all_keys will use chrome db to replace const = api []
//import { getAllKeys } from '/modules/api/main.js';
const all_api_keys = [
  { id: '1', key: "133434", name: "Capricorn" },
  { id: '2', key: "133434", name: "Capricorn" },
];

//getData will use chrome db to replace const = api []
//import { getData } from '/modules/db/data.js';
const data = {
  mode: 'dark',
  min_size: 'md',
  types: ['audio', 'video', 'img'],
}

function CreateApiInputs() {
  console.log(all_api_keys);
  all_api_keys.forEach(function(api) {
    const input = new ApiInput({ name: api.name, key: api.key });
  });
}

function AddApiInput() {
  const input = new ApiInput({ name: '', key: '' });
}

function InsertApiKey({ key, name }) {
  const id = new GenerateID();
	this.key = key;
	this.name = name;
	api.push({ id: id, key: this.key, name: this.name });
}

function ApiInput({ name, key }) {
  var row = document.getElementById('api_inputs');
  var main_div = document.createElement("div");
  main_div.className = "api-key";

  var key_div = document.createElement("div");
  key_div.className = "col-lg-8";
  var key_input = document.createElement("input");
  key_input.className = "text-input";
  key_input.setAttribute("type", "password");
  key_input.value = key;
  //key_input.placeholder = "Key";


  var name_div = document.createElement("div");
  name_div.className = "col-lg-4";
  var name_input = document.createElement("input");
  name_input.className = "text-input";
  name_input.setAttribute('type', 'text');
  name_input.value = name;
  //name_input.placeholder = "Name";


  key_div.appendChild(key_input);
  name_div.appendChild(name_input);

  row.appendChild(key_div);
  row.appendChild(name_div);
}
