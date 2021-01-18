var all_files = [];
var upload_queue = [];

var filters = {
  min_width: 25,
  min_height: 25
};

function start_slate() {
  document.getElementById('main').style.display = "block";

  var min_width_slider = document.getElementById("min_width_slider");
  var min_width_output = document.getElementById("min_width_output");

  min_width_output.value = 25 + "px";
  min_width_slider.value = 25;


  min_width_slider.oninput = function() {
    var val = document.getElementById("min_width_slider").value //gets the oninput value
    document.getElementById('min_width_output').innerHTML = val + "px" //displays this value to the html page
  };

  var blur = document.getElementById('blur_layer');
  blur.addEventListener('click', function (event) {
      stop_slate();
  });

  var all_images = document.getElementsByTagName("img");
  var all_audio = document.getElementsByTagName("audio");

  var all_elements = document.getElementsByTagName("*");
  console.log('ALLLL', all_elements);


  console.log(all_audio)
  var imgSrcs = [];
  var position = 0;

  for (var i = 0; i < all_images.length; i++) {
      position++;
      var id = create_id();
      imgSrcs.push({
        id: id,
        src: all_images[i].src,
        alt: all_images[i].alt,
        type: 'jpg',
        page_position: position,
        width: all_images[i].width,
        height: Math.floor(Math.random() * 2000)
      });
  }

  for (var i = 0; i < all_audio.length; i++) {
      console.log(all_audio[i].src)
      imgSrcs.push({
        id: id,
        src: all_audio[i].src,
        alt: all_audio[i].alt,
        type: 'mp3',
        page_position: position,
        width: null,
        height: null
      });
  }

  console.log(imgSrcs);
  show_images(imgSrcs);
  all_files = imgSrcs;

  var select_all = document.getElementById('select_all');
  select_all.onclick = function() {
    select_all(imgSrcs)
  };

}


function show_images(images_array) {
  var img_array = []
  img_array = images_array;
  document.getElementById("image_grid").innerHTML = "";
  document.getElementById("num_results").innerHTML = img_array.length;

  img_array.forEach(function(item) {
    var div = document.createElement("div");
    div.className = "img_container item";
    var img = document.createElement("img");
    img.src = item.src;
    if(item.type == 'mp3'){
      img.src = 'https://www.tgcstore.net/images/audio-thumbnail.jpg';
    }
    img.className = "list_img";
    img.id = "img-" + item.id;

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.value = item.src;
    checkbox.id = "check-" + item.id;
    checkbox.className = "img_checkbox"

    img.onclick = function() {
      select_image(item)
      checkbox.checked = true;
    };

    checkbox.onclick = function() {
      select_image(item)
    };

    div.setAttribute('click', function() {
      document.getElementById('check-' + item.id).checked = true;
      document.getElementById('num_selected').innerHTML = files;
    })

    div.appendChild(checkbox);
    div.appendChild(img);
    document.getElementById("image_grid").appendChild(div);
  });

}


function stop_slate() {
  all_files = [];
  document.getElementById('main').style.display = "none";
}

function select_image(img) {
  console.log(img)
  document.getElementById("img-" + img.id).addClass = "selected";
  upload_queue.push({ id: img.id, src: img.src });
  document.getElementById('num_selected').innerHTML = upload_queue.length;
  console.log(upload_queue);
}

function create_id() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

function select_all(images) {
  console.log('all images!!!', images);
}

function filer_results() {
  filters.min_width = document.getElementById("min_width_slider").value;
  const result = all_files.filter(file => file.width > filters.min_width);
  show_images(result);
  console.log('result!!:', result);
}
