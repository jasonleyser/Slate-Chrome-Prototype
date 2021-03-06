var keys = [];

function start() {

  keys.push({ name: 'Work', key: '444442342424234234234444442342424234234234' });
  keys.push({ name: 'Personal', key: '444442342424234234234444442342424234234234' });
  keys.push({ name: '', key: '' });

  keys.forEach(function(key) {
    console.log(key);
    create_api_input({ name: key.name, key: key.key })
  });
}

function add_key(name, key) {
  keys.push({ name: name, key: key });
  create_api_input({ name: name, key: key })
  console.log(keys)
}

function create_api_input({ name, key }) {
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

function min_size_range (value) {
  var num = document.getElementById('min_size_num');

  if(value == 0) {
    num.innerHTML = 'None';
  }else if (value == 2000) {
    num.innerHTML = '+2000mb';
  }else{
    num.innerHTML = value + "mb"
  }

}
