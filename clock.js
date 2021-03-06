
function renderClock(ctx){
  var now = new Date();
  ctx.save();
  ctx.clearRect(0,0,1280,960);
  ctx.translate(75,75);
  ctx.scale(.6,.6);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 1;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  ctx.beginPath();
  for (var i=0;i<12;i++){
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
  }
  ctx.stroke();
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  ctx.beginPath();
  for (i=0;i<60;i++){
    if (i%5!=0) { // 5 minutes
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.stroke();
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "green";

  

  // write Hours
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#357ff4";
  ctx.fillStyle = "#357ff4";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}


