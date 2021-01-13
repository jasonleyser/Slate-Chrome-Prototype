var upload_queue = [];

function start_slate() {
  document.getElementById('main').style.display = "block";
  var all_images = document.getElementsByTagName("img");
  var imgSrcs = [];
  var position = 0;
  for (var i = 0; i < all_images.length; i++) {
      position++;
      var id = create_id();
      imgSrcs.push({ id: id, src: all_images[i].src, alt: all_images[i].alt, page_position: position });
  }

  console.log(imgSrcs);

  imgSrcs.forEach(function(item) {
    var div = document.createElement("div");
    div.className = "img_container item";
    var img = document.createElement("img");
    img.src = item.src;
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
  imgSrcs = [];
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
