// const videoElement = document.getElementsByClassName('input_video')[0];
// const canvasElement = document.getElementsByClassName('output_canvas')[0];
// const canvasCtx = canvasElement.getContext('2d');
// const text = document.getElementById("text");
// const canvas = document.querySelector("#c");
// const qbox = document.getElementById("Questions");
// const unit = document.getElementById("unitImage");
// const ten = document.getElementById("tenImage");
// const pracid = 2;
// var qobj;
// const verifyans = document.getElementById("verifyans");
// var check = true;
// canvas.style.width = '100%';
// canvas.width = canvas.offsetWidth;
// canvas.height = window.innerHeight / 1.5;
// generate_random();
// var check_count = 0;

// function getCount(landmarks, isRightHand) {
//     var thumb = false;
//     var index = false;
//     var middle = false;
//     var fore = false;
//     var pinky = false;
//     var count = 0;


//     if (isRightHand) {
//         if (landmarks[3].y > landmarks[4].y && landmarks[3].x <= landmarks[4].x) {
//             thumb = true;
//         }
//     }
//     else if (!isRightHand) {
//         if (landmarks[3].y > landmarks[4].y && landmarks[3].x >= landmarks[4].x) {
//             thumb = true;
//         }
//     }
//     if (landmarks[6].y > landmarks[8].y) {
//         index = true;
//     }
//     if (landmarks[10].y > landmarks[12].y) {
//         middle = true;
//     }
//     if (landmarks[14].y > landmarks[16].y) {
//         fore = true;
//     }
//     if (landmarks[19].y > landmarks[20].y) {
//         pinky = true;
//     }


//     if (index == true && middle == false && fore == false && pinky == false) {
//         count = 1;
//         if (thumb == true) { count = count + 5; }

//     }

//     if (index == true && middle == true && fore == false && pinky == false) {
//         count = 2;
//         if (thumb == true) { count = count + 5; }
//     }

//     if (index == true && middle == true && fore == true && pinky == false) {
//         count = 3;
//         if (thumb == true) { count = count + 5; }
//     }

//     if (index == true && middle == true && fore == true && pinky == true) {
//         count = 4;
//         if (thumb == true) { count = count + 5; }
//     }
//     if (thumb == true && index == false && middle == false && fore == false && pinky == false) {
//         count = 5;
//     }

//     if (isRightHand) {
//         return count;
//     }
//     else if (!isRightHand) {
//         return count * 10;
//     }

// }

// function generate_random() {
//     if (pracid == 1) {
//         var x = Math.floor(Math.random() * 99);
//         qobj = { qs: (x.toString()), ans: x}
//     }
//     if (pracid == 2) {
//         var x = Math.floor(Math.random() * 9);
//         var y = Math.floor(Math.random() * 9-x);

//         qobj = { qs: (x.toString() + " + " + y.toString()), ans: x + y }
//     }
//     if (pracid == 3) {
//         var x = Math.floor(Math.random() * 9);
//         var y = Math.floor(Math.random() * 9-x);
//         var k = x + y;
//         var z = Math.floor(Math.random() * 9-k);
//         qobj = { qs: (x.toString() + " + " + y.toString() + "-" +z.toString()), ans: x + y - z }
//     }
//     if (pracid == 4) {
//         var x = Math.floor(Math.random() * 99);
//         var y = Math.floor((Math.random() * 99-x));
//         qobj = { qs: (x.toString() + " + " + y.toString()), ans: x + y }
//     }
//     if (pracid == 5) {
//         var x = Math.floor(Math.random() * 99);
//         var y = Math.floor(Math.random() * 99 - x);
//         var k = x + y;
//         var z = Math.floor(Math.random() * 99-k);
//         qobj = { qs: (x.toString() + " + " + y.toString() + "-" + z.toString()), ans: x + y - z }
//     }
// }

// function showHint() {
//     document.getElementById("overlay").style.display = "block";
//     if (qobj.ans > 9) {
//         // ten.src = "/Content/Images/finger-counting-pics/" + parseInt(qobj.ans / 10).toString() + ".png";
//         // unit.src = "/Content/Images/finger-counting-pics/" + ((qobj.ans) % 10).toString() + ".png";
//     }
//     else {

//         // unit.src = "/Content/Images/finger-counting-pics/" + qobj.ans.toString() + ".png";
//     }
// }
// function off() {
//     document.getElementById("overlay").style.display = "none";
// }
// function onResults(results) {
//     if (check) {
//         qbox.textContent = qobj.qs;
//         check = false;
//         var element = document.getElementById("loaddiv");
//         element.classList.add("hidden");
//     }

//     videoElement.width = 0;
//     canvasCtx.save();
//     canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
//     canvasCtx.drawImage(
//         results.image, 0, 0, canvasElement.width, canvasElement.height);

//     var count = 0;
//     var count_ten = 0;
//     if (results.multiHandLandmarks && results.multiHandedness) {

//         for (let i = 0; i < results.multiHandLandmarks.length; i++) {
//             const classification = results.multiHandedness[i];
//             const isRightHand = classification.label === 'Left';
//             const landmarks = results.multiHandLandmarks[i];


//             if (isRightHand) {
//                 count = getCount(landmarks, isRightHand);

//             }

//             if (!isRightHand) {
//                 count_ten = getCount(landmarks, isRightHand);
//             }

//             drawConnectors(
//                 canvasCtx, landmarks, HAND_CONNECTIONS,
//                 { color: isRightHand ? '#00FF00' : '#FF0000' }),
//                 drawLandmarks(canvasCtx, landmarks, {
//                     color: isRightHand ? '#00FF00' : '#FF0000',
//                     fillColor: isRightHand ? '#FF0000' : '#00FF00',
//                     radius: (x) => {
//                         return lerp(x.from.z, -0.15, .1, 10, 1);
//                     }
//                 });
//         }
//     }

//     var detectValue = count_ten + count;
//     console.log(detectValue);

//     if (detectValue == qobj.ans) {
//         check_count++;
//         if (check_count >= 10) {
//             verifyans.textContent = "Correct";
//             check_count = 0;

//             unit.src = "";
//             ten.src = "";
//             generate_random();
//             qbox.textContent = qobj.qs;
//         }
//     }
//     var c = count_ten + count;
//     text.innerHTML = c.toString();
//     canvasCtx.restore();
// }

// const hands = new Hands({
//     locateFile: (file) => {
//         return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
//     }
// });
// hands.setOptions({
//     maxNumHands: 2,
//     minDetectionConfidence: 0.5,
//     minTrackingConfidence: 0.5
// });
// hands.onResults(onResults);

// const camera = new Camera(videoElement, {
//     onFrame: async () => {
//         await hands.send({ image: videoElement });
//     },
//     width: 1280,
//     height: 720
// });
// camera.start();

const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const out = document.getElementById("output");
canvasElement.style.width = '70%';
canvasElement.width = canvasElement.offsetWidth;
canvasElement.height = window.innerHeight / 1.5;
videoElement.style.width = '70%';
videoElement.width = videoElement.offsetWidth;
videoElement.height = window.innerHeight / 1.5;
function getCount(landmarks, isRightHand) {
        var thumb = false;
        var index = false;
        var middle = false;
        var fore = false;
        var pinky = false;
        var count = 0;
    
    
        if (isRightHand) {
            if (landmarks[3].y > landmarks[4].y && landmarks[3].x <= landmarks[4].x) {
                thumb = true;
            }
        }
        else if (!isRightHand) {
            if (landmarks[3].y > landmarks[4].y && landmarks[3].x >= landmarks[4].x) {
                thumb = true;
            }
        }
        if (landmarks[6].y > landmarks[8].y) {
            index = true;
        }
        if (landmarks[10].y > landmarks[12].y) {
            middle = true;
        }
        if (landmarks[14].y > landmarks[16].y) {
            fore = true;
        }
        if (landmarks[19].y > landmarks[20].y) {
            pinky = true;
        }
    
    
        if (index == true && middle == false && fore == false && pinky == false) {
            count = 1;
            if (thumb == true) { count = count + 5; }
    
        }
    
        if (index == true && middle == true && fore == false && pinky == false) {
            count = 2;
            if (thumb == true) { count = count + 5; }
        }
    
        if (index == true && middle == true && fore == true && pinky == false) {
            count = 3;
            if (thumb == true) { count = count + 5; }
        }
    
        if (index == true && middle == true && fore == true && pinky == true) {
            count = 4;
            if (thumb == true) { count = count + 5; }
        }
        if (thumb == true && index == false && middle == false && fore == false && pinky == false) {
            count = 5;
        }
    
        if (isRightHand) {
            console.log(count);
            return count;
        }
        else if (!isRightHand) {
            console.log(count);
            return count * 10;
        }
    
    }

function onResults(results) {
  videoElement.style.display = "none";
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks) {
      var count = 0;
    for (var i=0; i < results.multiHandLandmarks.length;i++) {
      var landmarks = results.multiHandLandmarks[i];
      var handedness = results.multiHandedness[i];
      var flag = handedness.label == "Left" ? true : false;
      count += getCount(landmarks,flag)
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
    }
    out.innerHTML = count;
    
  }
  canvasCtx.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width: 1280,
  height: 720
});
camera.start();
