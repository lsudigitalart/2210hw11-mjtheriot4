var accidents;
var rowCount;

function preload() {
  accidents = loadTable("BRTrafficData.csv", "header")
}

function setup() {
  createCanvas(1024, 768);

  rowCount = accidents.getRowCount();
  background(0);
  fill(255);
  noStroke();

}

function draw() {
  println(rowCount);

  // for(var i = 0; i < rowCount; i++ ) {
  //   var latitude = cities.getNum(i, "lat");
  //   var longitude = cities.getNum(i, "lng");
  //   setXY(latitude, longitude);
  // }
}

// function setXY(lat, lng) {
//   var x = map(lat, -90, 90, 0, height);
//   var y = map(lng, -180, 180, 0, width);
//   ellipse(x, y, 0.25);
// }
