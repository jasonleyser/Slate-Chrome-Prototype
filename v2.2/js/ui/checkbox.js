function Checkbox({ name, value, type, element }) {
  var container = document.createElement("div");
  container.className = 'checkbox-container';

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = value;
  checkbox.id = name;
  checkbox.className = 'checkbox';

  var label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.innerHTML = type;
  label.className = 'label';

  const div = document.getElementById(element);
  container.append(checkbox, label)
  div.append(container);
}

function Slider({ name, title, value, min, max, step, element }) {
  var slider = document.createElement('input');
  slider.setAttribute("type", "range");
  slider.min = min;
  slider.max = max;
  slider.value = value;
  slider.className = 'slider';
  slider.step = step;

  var label = document.createElement("label");
  label.htmlFor = slider;
  label.innerHTML = title;

  const div = document.getElementById(element);
  div.append(label, slider);
}


function ApiInput({ name, key, id }) {
  var row = document.getElementById('api_inputs');
  var main_div = document.createElement("div");
  main_div.className = "api-key";
  main_div.dataset.api_id = id;

  var key_div = document.createElement("div");
  key_div.className = "col-lg-8";
  var key_input = document.createElement("input");
  key_input.className = "text-input";
  key_input.setAttribute("type", "password");
  key_input.dataset.api_id = id;
  if(key) {
    key_input.value = key;
  }
  key_input.placeholder = 'API Key';


  var name_div = document.createElement("div");
  name_div.className = "col-lg-4";
  var name_input = document.createElement("input");
  name_input.className = "text-input";
  name_input.setAttribute('type', 'text');
  name_input.dataset.api_id = id;
  if(name) {
    name_input.value = name;
  }
  name_input.placeholder = 'Name';

  key_div.appendChild(key_input);
  name_div.appendChild(name_input);

  row.append(key_div, name_div);
}
