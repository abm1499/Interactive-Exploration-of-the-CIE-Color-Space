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
  rx: 0.726,
  ry: 0.266,
  rz: 0.54,
  gx: 0.155,
  gy: 0.72,
  gz: 0.2,
  bx: 0.15,
  by: 0.15,
  bz: 1,
  kx: 0.0,
  ky: 0.0,
  kz: 0.0,
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

function drawTriangle() {
  strokeWeight(sf / 100);
  stroke(0, 0, 0);
  noFill();

  let L = 1.3;
  beginShape(LINES);

  vtx(1, 0, 0);
  vtx(0, 1, 0); // xy
  vtx(0, 1, 0);
  vtx(0, 0, 1); // yz
  vtx(0, 0, 1);
  vtx(1, 0, 0); // zx
  endShape();
  noStroke();
}

function drawSidesFace() {
  stroke(0);
  noStroke();
  translate(0, 0, 0);
  beginShape(TRIANGLES); // see https://p5js.org/reference/#/p5/beginShape

  let a = mcCurve;
  let xb = 0;
  let yb = 0;
  let zb = 0; // black point
  for (let i = 1; i < mcCurve.length; i++) {
    let x1 = a[i - 1][4];
    let y1 = a[i - 1][5];
    let x2 = a[i][4];
    let y2 = a[i][5];
    let z1 = 1 - x1 - y1;
    let z2 = 1 - x2 - y2;

    //           R          G          B
    fill(0, 0, 0);
    vtx(xb, yb, zb); // black point is part of each triangle
    fill(a[i - 1][1], a[i - 1][2], a[i - 1][3]);
    vtx(x1, y1, z1);
    fill(a[i][1], a[i][2], a[i][3]);
    vtx(x2, y2, z2);
  }

  endShape();
}

function drawBottomFace() {
  stroke(0);
  noStroke();
  translate(0, 0, 0);
  beginShape(TRIANGLES);
  let a = mcCurve;
  let xb = 0;
  let yb = 0;
  let zb = 0;
  let last = a.length - 10;
  let x1 = a[0][4];
  let y1 = a[0][5];
  let x2 = a[last][4];
  let y2 = a[last][5];
  let z1 = 1 - x1 - y1;
  let z2 = 1 - x2 - y2;
  fill(0, 0, 0);
  vtx(xb, yb, zb); // black point is part of each triangle
  fill(a[5][1], a[5][2], a[5][3]);
  vtx(x1, y1, z1);
  fill(a[last][1], a[last][2], a[last][3]);
  vtx(x2, y2, z2);
  endShape();
}

function r2(v) {
  return ((v * 100 + 0.5) | 0) / 100;
}

function drawFrontFace() {
  beginShape();
  let a = mcCurve;
  let zb = 0; // Set the z-coordinate for the front face

  for (let i = 0; i < a.length - 1; i++) {
    let x = a[i][4];
    let y = a[i][5];
    let z = 1 - x - y;

    let nextColorIndex = (i + 1) % a.length; // Wrap around for the last point
    let nextX = a[nextColorIndex][4];
    let nextY = a[nextColorIndex][5];
    let nextZ = 1 - nextX - nextY;

    // Interpolate colors with more steps for smoother transition
    for (let t = 0; t <= 1; t += 0.005) {
      let interpColor = lerpColor(
        color(a[i][1], a[i][2], a[i][3]),
        color(a[nextColorIndex][1], a[nextColorIndex][2], a[nextColorIndex][3]),
        t
      );

      fill(interpColor);
      vtx(lerp(x, nextX, t), lerp(y, nextY, t), lerp(z, nextZ, t));
    }
  }

  endShape(CLOSE);
}

let showAxis = true;
let showTriangle = false;
let showSides = false;
let showBottom = false;
let showFront = false;
let showRGB = false;

document.getElementById("btn-axis").addEventListener("change", function () {
  showAxis = this.checked;
});

document.getElementById("btn-triangle").addEventListener("change", function () {
  showTriangle = this.checked;
});
document.getElementById("btn-sides").addEventListener("change", function () {
  showSides = this.checked;
});

document.getElementById("btn-bottom").addEventListener("change", function () {
  showBottom = this.checked;
});

document.getElementById("btn-front").addEventListener("change", function () {
  showFront = this.checked;
});
document.getElementById("btn-rgb").addEventListener("change", function () {
  showRGB = this.checked;
});

//let Rxy = [0.726, 0.266]; // XY values for pure red
let R = [defaultRGB.rx, defaultRGB.ry, defaultRGB.rz];
//let Gxy = [0.075, 0.809]; // XY values for pure red
let G = [defaultRGB.gx, defaultRGB.gy, defaultRGB.gz];
//let Bxy = [0.2, 0.02]; // XY values for pure red
let B = [defaultRGB.bx, defaultRGB.by, defaultRGB.bz];
let K = [0, 0, 0]; // XY values for black

let r = K.map((val, index) => val + R[index]);
let g = K.map((val, index) => val + G[index]);
let b = K.map((val, index) => val + B[index]);
let Y = K.map((val, index) => val + R[index] + G[index]);
let M = K.map((val, index) => val + R[index] + B[index]);
let C = K.map((val, index) => val + G[index] + B[index]);
let W = K.map((val, index) => val + R[index] + G[index] + B[index]);

function drawRGB() {
  strokeWeight(sf / 100);
  stroke(0, 0, 0);
  noFill();

  let L = 1;
  beginShape(LINES);

  vtx(K[0], K[1], K[2]);
  vtx(R[0], R[1], R[2]);
  vtx(K[0], K[1], K[2]);
  vtx(G[0], G[1], G[2]);
  vtx(K[0], K[1], K[2]);
  vtx(B[0], B[1], B[2]);
  vtx(G[0], G[1], G[2]);
  vtx(Y[0], Y[1], Y[2]);
  vtx(Y[0], Y[1], Y[2]);
  vtx(R[0], R[1], R[2]);
  vtx(R[0], R[1], R[2]);
  vtx(M[0], M[1], M[2]);
  vtx(M[0], M[1], M[2]);
  vtx(B[0], B[1], B[2]);
  vtx(M[0], M[1], M[2]);
  vtx(W[0], W[1], W[2]);
  vtx(W[0], W[1], W[2]);
  vtx(Y[0], Y[1], Y[2]);
  vtx(B[0], B[1], B[2]);
  vtx(C[0], C[1], C[2]);
  vtx(C[0], C[1], C[2]);
  vtx(G[0], G[1], G[2]);
  vtx(C[0], C[1], C[2]);
  vtx(W[0], W[1], W[2]);
  endShape();
  noStroke();
}

// Function to update RGB values
function updateRGBValues() {
  R = [
    parseFloat(document.getElementById("rx").value),
    parseFloat(document.getElementById("ry").value),
    parseFloat(document.getElementById("rz").value),
  ];
  //R = [Rxy[0], Rxy[1], 1 - Rxy[0] - Rxy[1]];
  G = [
    parseFloat(document.getElementById("gx").value),
    parseFloat(document.getElementById("gy").value),
    parseFloat(document.getElementById("gz").value),
  ];
  //G = [Gxy[0], Gxy[1], 1 - Gxy[0] - Gxy[1]];
  B = [
    parseFloat(document.getElementById("bx").value),
    parseFloat(document.getElementById("by").value),
    parseFloat(document.getElementById("bz").value),
  ];
  //B = [Bxy[0], Bxy[1], 1 - Bxy[0] - Bxy[1]];
  K = [
    parseFloat(document.getElementById("kx").value),
    parseFloat(document.getElementById("ky").value),
    parseFloat(document.getElementById("kz").value),
  ];
  //K = [Kxy[0], Kxy[1], 1 - Kxy[0] - Kxy[1]];

  // Update RGB values
  r = K.map((val, index) => R[index] - val);
  g = K.map((val, index) => G[index] - val);
  b = K.map((val, index) => B[index] - val);
  Y = K.map((val, index) => val + r[index] + g[index]);
  M = K.map((val, index) => val + r[index] + b[index]);
  C = K.map((val, index) => val + g[index] + b[index]);
  W = K.map((val, index) => val + r[index] + g[index] + b[index]);
}

// Function to reset RGB values to default
function resetRGBValues() {
  document.getElementById("rx").value = defaultRGB.rx;
  document.getElementById("ry").value = defaultRGB.ry;
  document.getElementById("rz").value = R[2];
  document.getElementById("gx").value = defaultRGB.gx;
  document.getElementById("gy").value = defaultRGB.gy;
  document.getElementById("gz").value = G[2];
  document.getElementById("bx").value = defaultRGB.bx;
  document.getElementById("by").value = defaultRGB.by;
  document.getElementById("bz").value = B[2];
  document.getElementById("kx").value = K[0];
  document.getElementById("ky").value = K[1];
  document.getElementById("kz").value = K[2];

  updateRGBValues();
}

// Update RGB values when the button is clicked
document.getElementById("updateRGB").addEventListener("click", updateRGBValues);

// Call the reset function when the page loads and rest button is pressed
document.getElementById("resetRGB").addEventListener("click", resetRGBValues);
window.onload = resetRGBValues;

function draw() {
  background(1.0);

  if (mouseIsPressed) {
    yRotDeg += ((pmouseX - mouseX) / width) * 200; // change in x rotates around y axis
    xRotDeg += ((pmouseY - mouseY) / height) * 200; // change in y rotates around x axis
  }

  push();

  translate(0, sf / 20, -sf * 2);
  rotateX((xRotDeg / 180) * PI);
  rotateY((yRotDeg / 180) * PI);
  scale(1200);

  if (showAxis) {
    drawAxis_XYZ();
  }

  if (showTriangle) {
    drawTriangle();
  }
  if (showSides) {
    drawSidesFace();
  }

  if (showBottom) {
    drawBottomFace();
  }
  if (showFront) {
    drawFrontFace();
  }
  if (showRGB) {
    drawRGB();
  }
  pop();
}
