function setup() {
  createCanvas(750, 500);
background(0);
  }

  function draw() {
  }
  
  function mouseReleased() {
background(0);
    bob(200,200, random(60,90), random(60,90), random(0,300), 4);
  }
  
  function bob(body, body2, bodyWidth, bodyHeight, armWidth, armHeight) {

  
  var body = 350;
  var body2 = 350;
  var bodyWidth = random(100, 200);
  var bodyHeight = random(50, 75);
  var armWidth = random(50, 75)
  var armHeight = random(50, 75);
  
  fill(random(63.75, 255), random(63.75, 255), random(63.75, 255));
  strokeWeight(3);
  
  //legs
  rect(body+10,body2+30,random(10,30),armWidth)
  rect(body+50,body2+30,random(10,20),armWidth)
  //body
  rect(body-40,body2,bodyWidth,bodyHeight);
  //eye
  fill("white")
  ellipse(body,body2,random(30,60));
  ellipse(random(340,360),random(340,360),20,20);
  //arms
  rectangle(body+80,body2,random(10,30),armWidth)
  



  
  }