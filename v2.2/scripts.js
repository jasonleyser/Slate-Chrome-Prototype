
var all_files = [];
var upload_queue = [];

var filters = {
  min_width: 25,
  min_height: 25
};

function start_slate() {
  document.getElementById('main').style.display = "inline";

  var all_images = document.querySelectorAll('img,audio,video')

  var imgSrcs = [];
  var position = 0;

  for (var i = 0; i < all_images.length; i++) {
      position++;
      var id = create_id();
      var ext = all_images[i].currentSrc.split('.').pop()
      var type;

      if (ext === 'mp4' || ext === 'ogg') {
        type = 'video';
      }else if (ext === 'mp3') {
        type = 'audio';
      }else{
        type = 'image';
      }

      imgSrcs.push({
        id: id,
        src: all_images[i].currentSrc,
        alt: all_images[i].alt,
        type: type,
        page_position: position,
        width: all_images[i].width,
        height: Math.floor(Math.random() * 2000)
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
  //document.getElementById("num_results").innerHTML = img_array.length;

  img_array.forEach(function(item) {
    var div = document.createElement("div");
    div.className = "img_container item";
    var img = document.createElement("img");
    if(item.type == 'audio'){
      img.src = 'https://www.tgcstore.net/images/audio-thumbnail.jpg';
    }
    if(item.type == 'video'){
      img.src = 'https://kucumberskinlounge.com/app/themes/kucumber-skin-lounge/dist/images/default-thumb.jpg';
    }
    if(item.type == 'image'){
      img.src = item.src;
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
  upload_queue.push({
    id: img.id,
    src: img.src,
    title: img.alt || 'none'
  });
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

function getFileType(url) {
   if (url) {
      var m = url.toString().match(/.*\/(.+?)\./);
      if (m && m.length > 1) {
         return m[1];
      }
   }
   return "";
}
