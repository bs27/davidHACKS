let video;
let snap;
let countdown;

document.addEventListener('DOMContentLoaded', () => {
    video = document.getElementById('video');
    snap = document.getElementById('snap');
    countdown = document.getElementById('countdown');
});

// Get access to the camera and display it in the video element

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
    
}
// Take a photo after a 5 second countdown
let secondsLeft = 5;
const countdownInterval = setInterval(() => {
    secondsLeft--;
    countdown.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
    clearInterval(countdownInterval);
    takePhoto();
    }
}, 1000);
    

// Capture an image from the video and display it in a new window
function takePhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgUrl = canvas.toDataURL();
    const photoCanvas = document.getElementById('video'); // Change to your own canvas ID
    photoCanvas.srcObject = video.srcObject;
    setTimeout(function() {
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(function(track) {
          track.stop();
        });
        video.srcObject = null;

        let offerdiv = document.createElement("div");
        offerdiv.innerHTML = `<h1 style="text-align:center;">Offer: $15</h1>`;
        document.getElementById('price').appendChild(offerdiv)
      }, 0);
  }
  
  


function decline(){
    window.location.href = "http://127.0.0.1:8000/welcome/thanks";
}

function accept(){
    window.location.href = "http://127.0.0.1:8000/welcome/acceptoffer";
}
