function initialize() {
  // Check if on device to prevent zooming annoyingness
  var isDraggable = window.outerWidth > 480 ? true : false;

  // Map Location and controls [ZERO SUSHI]
  var zeroSushiLocation = new google.maps.LatLng(51.761032,-0.5651738);

  var mapOptions = {
    center: zeroSushiLocation,
    zoom: 15,
    minZoom: 8,
    draggable: isDraggable,
    streetViewControl: false,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Marker Image & Size & Animation
  var zeroMarker = {
    url: 'images/map/map_marker.png',
    scaledSize: new google.maps.Size(50, 50)
  };

  var marker = new google.maps.Marker({
      map: map,
      title: 'Zero Sushi',
      position: zeroSushiLocation,
      icon: zeroMarker,
      animation: google.maps.Animation.DROP
  });

  // Click / Tap listener
  google.maps.event.addListener(marker, 'click', toggleBounce);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCEArifIfUhRVe7DLVXeaK_f8bb9ZfJCu8' +
      '&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
