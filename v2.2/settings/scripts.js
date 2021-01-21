function start() {

  const FILE_TYPES = [
    { name: "accept-images", value: true, type: 'Images', element: 'accepted-types' },
    { name: "accept-videos", value: true, type: 'Videos', element: 'accepted-types' },
    { name: "accept-audio", value: true, type: 'Audio', element: 'accepted-types' },
  ];

  const IMAGE_DIMENSIONS = [
    { name: "accept-img-icon", value: false, type: 'Icon', element: 'accepted-dimensions' },
    { name: "accept-img-small", value: false, type: 'Small', element: 'accepted-dimensions' },
    { name: "accept-img-med", value: true, type: 'Medium', element: 'accepted-dimensions' },
    { name: "accept-img-lg", value: true, type: 'Large', element: 'accepted-dimensions' },
  ];

  const FILE_SIZES = {
    min: 0,
    max: 2000,
    value: 500
  };

  const STYLE = {
    mode: 'dark'
  };

  //API SETTINGS
  //get all API keys
  var api_db = new LDB.Collection('api_keys');
  const API_KEYS = api_db.items;
  console.log(API_KEYS);
  if(API_KEYS.length == 0) {
    const input = new ApiInput({ name: '', key: '' });
    return;
  }

  API_KEYS.forEach(function(api) {
    const input = new ApiInput({ name: api.name, key: api.key });
  });

}

function AddKey({ name, key }) {
  var api_db = new LDB.Collection('api_keys');
  var blank = { name: '', key: '' };

  api_db.save(blank, function(_item){
    const input = new ApiInput({ name: name, key: key, id: _item._id });
  });
}

function switch_mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var nav = document.getElementById('navbar');
  nav.classList.toggle("dark-mode");
}
