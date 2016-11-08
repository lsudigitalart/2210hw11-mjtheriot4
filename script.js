var accidents;
var rowCount;

function preload() {
  accidents = loadTable("BRTrafficData_sorted.csv", "header")
}

function setup() {
  createCanvas(1024, 768);

  rowCount = accidents.getRowCount();
  background(0);
  noStroke();
  // for(var i = 0; i < rowCount; i++ ) {
  //   var latitude = accidents.getNum(i, "LATTITUDE");
  //   var longitude = accidents.getNum(i, "LONGITUDE");
  //   setXY(latitude, longitude);
  // }
}

function draw() {
  background(0);
  if (!mouseIsPressed){
    scale(.75);
    translate(200, 150);
  }
  for(var i = 0; i < rowCount; i++ ) {
    var latitude = accidents.getNum(i, "LATTITUDE");
    var longitude = accidents.getNum(i, "LONGITUDE");
    var roadType = accidents.getString(i, "OCCURED ON");
    plot(latitude, longitude, roadType);
  }

}

function plot(lat, lng, type) {
  var y = map(lat, 30.54, 30.37, 0, height);
  var x = map(lng, -91.20, -90.97, 0, width);
  switch (type) {
    case "INTERSTATE":
      fill(255,0,0);
      break;
    case "U.S. HWY":
      fill(0,0,255);
      break;
    case "CITY STREET":
      fill(0,255,0);
      break;
    case "STATE HWY":
      fill(255,255,0);
      break;
    default:
     fill(255);
  }
  ellipse(x, y, 1.5);
}
