window.onload = function () {
  // Ask for geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById('location').innerHTML = `📍 You're here: <br>Latitude: ${lat}<br>Longitude: ${lon}`;
    }, function (error) {
      document.getElementById('location').innerHTML = `❌ Location access denied`;
    });
  } else {
    document.getElementById('location').innerHTML = `❌ Geolocation not supported`;
  }

  // Ask for camera access
  const video = document.getElementById('video');
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (err) {
      console.log("Camera error: ", err);
      document.getElementById('camera-status').innerText = '❌ Camera access denied';
    });
};
