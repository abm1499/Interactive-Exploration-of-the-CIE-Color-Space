let font,
  fontsize = 320; // https://p5js.org/examples/typography-letters.html
let sf = 2000;
let xRotDeg = 165;
let yRotDeg = 140;

function preload() {
  font = loadFont("fonts/Roboto-Bold.ttf");
}

let mcCurve = [
  //  0 nm   1 R       2 G       3 B         4 x       5 y
  [410, 0.04351, 0.00121, 0.2074, 0.17258, 0.0048],
  [415, 0.07763, 0.00218, 0.3713, 0.17209, 0.00483],
  [420, 0.13438, 0.004, 0.6456, 0.17141, 0.0051],
  [425, 0.21477, 0.0073, 1.03905, 0.1703, 0.00579],
  [430, 0.2839, 0.0116, 1.3856, 0.16888, 0.0069],
  [435, 0.3285, 0.01684, 1.62296, 0.1669, 0.00856],
  [440, 0.34828, 0.023, 1.74706, 0.16441, 0.01086],
  [445, 0.34806, 0.0298, 1.7826, 0.1611, 0.01379],
  [450, 0.3362, 0.038, 1.77211, 0.15664, 0.0177],
  [455, 0.3187, 0.048, 1.7441, 0.15099, 0.02274],
  [460, 0.2908, 0.06, 1.6692, 0.14396, 0.0297],
  [465, 0.2511, 0.0739, 1.5281, 0.1355, 0.03988],
  [470, 0.19536, 0.09098, 1.28764, 0.12412, 0.0578],
  [475, 0.1421, 0.1126, 1.0419, 0.10959, 0.08684],
  [480, 0.09564, 0.13902, 0.81295, 0.09129, 0.1327],
  [485, 0.05795, 0.1693, 0.6162, 0.06871, 0.20072],
  [490, 0.03201, 0.20802, 0.46518, 0.04539, 0.29498],
  [495, 0.0147, 0.2586, 0.3533, 0.02346, 0.4127],
  [500, 0.0049, 0.323, 0.272, 0.00817, 0.53842],
  [505, 0.0024, 0.4073, 0.2123, 0.00386, 0.65482],
  [510, 0.0093, 0.503, 0.1582, 0.01387, 0.75019],
  [515, 0.0291, 0.6082, 0.1117, 0.03885, 0.81202],
  [520, 0.06327, 0.71, 0.07825, 0.0743, 0.8338],
  [525, 0.1096, 0.7932, 0.05725, 0.11416, 0.82621],
  [530, 0.1655, 0.862, 0.04216, 0.15472, 0.80586],
  [535, 0.22575, 0.91485, 0.02984, 0.19288, 0.78163],
  [540, 0.2904, 0.954, 0.0203, 0.22962, 0.75433],
  [545, 0.3597, 0.9803, 0.0134, 0.26578, 0.72432],
  [550, 0.43345, 0.99495, 0.00875, 0.3016, 0.69231],
  [555, 0.51205, 1.0, 0.00575, 0.33736, 0.65885],
  [560, 0.5945, 0.995, 0.0039, 0.3731, 0.62445],
  [565, 0.6784, 0.9786, 0.00275, 0.40874, 0.58961],
  [570, 0.7621, 0.952, 0.0021, 0.44406, 0.55471],
  [575, 0.8425, 0.9154, 0.0018, 0.47877, 0.5202],
  [580, 0.9163, 0.87, 0.00165, 0.51249, 0.48659],
  [585, 0.9786, 0.8163, 0.0014, 0.54479, 0.45443],
  [590, 1.0263, 0.757, 0.0011, 0.57515, 0.42423],
  [595, 1.0567, 0.6949, 0.001, 0.60293, 0.3965],
  [600, 1.0622, 0.631, 0.0008, 0.62704, 0.37249],
  [605, 1.0456, 0.5668, 0.0006, 0.64823, 0.35139],
  [610, 1.0026, 0.503, 0.00034, 0.66576, 0.33401],
  [615, 0.9384, 0.4412, 0.00024, 0.68008, 0.31975],
  [620, 0.85445, 0.381, 0.00019, 0.6915, 0.30834],
  [625, 0.7514, 0.321, 0.0001, 0.70061, 0.2993],
  [630, 0.6424, 0.265, 0.00005, 0.70792, 0.29203],
  [635, 0.5419, 0.217, 0.00003, 0.71403, 0.28593],
  [640, 0.4479, 0.175, 0.00002, 0.71903, 0.28093],
  [645, 0.3608, 0.1382, 0.00001, 0.72303, 0.27695],
  [650, 0.2835, 0.107, 0.0, 0.72599, 0.27401],
  [655, 0.2187, 0.0816, 0.0, 0.72827, 0.27173],
  [660, 0.1649, 0.061, 0.0, 0.72997, 0.27003],
  [665, 0.1212, 0.04458, 0.0, 0.73109, 0.26891],
  [670, 0.0874, 0.032, 0.0, 0.73199, 0.26801],
  [675, 0.0636, 0.0232, 0.0, 0.73272, 0.26728],
  [680, 0.04677, 0.017, 0.0, 0.73342, 0.26658],
  [685, 0.0329, 0.01192, 0.0, 0.73405, 0.26595],
  [690, 0.0227, 0.00821, 0.0, 0.73439, 0.26561],
  [695, 0.01584, 0.005723, 0.0, 0.73459, 0.26541],
];
// Define default values
let defaultRGB = {
  rx2: 0.726,
  ry2: 0.266,
  rz2: 0.54,
  gx2: 0.155,
  gy2: 0.72,
  gz2: 0.2,
  bx2: 0.15,
  by2: 0.15,
  bz2: 1,
  kx2: 0.0,
  ky2: 0.0,
  kz2: 0.0,
};

function vtx(x, y, z) {
  // makes RHS from LHS or vice versa
  vertex(z, y, x);
}

function undoRot() {
  // make imposter by undoing rotation of the model -> text will be drawn parallel to xY plane
  rotateY(radians(-yRotDeg));
  rotateX(radians(-xRotDeg));
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 1);
  textFont(font);
  textSize(fontsize / sf);
  textAlign(CENTER, CENTER);
}

function drawAxis_XYZ() {
  // https://p5js.org/reference/#/p5/stroke
  strokeWeight(sf / 100);
  stroke(0, 0, 0);
  noFill();

  let L = 1.3;
  beginShape(LINES);
  vtx(0, 0, 0);
  vtx(L, 0, 0); // x
  vtx(0, 0, 0);
  vtx(0, L, 0); // y
  vtx(0, 0, 0);
  vtx(0, 0, L); // z
  endShape();
  noStroke();

  push();
  fill("#000000");
  push();
  translate(1.34, 0.03, 0);
  undoRot();
  text("z", 0, 0); // note: we swapped X and z using VTX func to get RHS
  pop();
  push();
  translate(0, 1.4, 0);
  undoRot();
  text("y", 0, 0);
  pop();
  push();
  translate(0, 0.03, 1.34);
  undoRot();
  text("x", 0, 0); // note: we swapped X and z using VTX func to get RHS
  pop();
  pop();
}

//event listeners to input fields to update the cube automatically

function updateCube() {
  updateRGBValues();
  redraw();
}

// Function to update RGB values

// Function to reset RGB values to default

// Update RGB values when the button is clicked
document
  .getElementById("updateRGB2")
  .addEventListener("click", updateRGBValues);

// Call the reset function when the page loads and rest button is pressed
document.getElementById("resetRGB2").addEventListener("click", resetRGBValues);
window.onload = resetRGBValues;

function draw() {
  background(1.0);

  if (mouseIsPressed) {
    yRotDeg += ((pmouseX - mouseX) / width) * 200; // change in x rotates around y axis
    xRotDeg += ((pmouseY - mouseY) / height) * 200; // change in y rotates around x axis
  }

  push();

  translate(0, -1000, -sf * 2);
  rotateX((xRotDeg / 180) * PI);
  rotateY((yRotDeg / 180) * PI);
  scale(1200);
  drawAxis_XYZ();
  drawRGB();
  pop();
}
