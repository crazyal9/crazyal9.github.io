class Particle {

  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  createParticle() {
    noStroke();
    fill('rgba(200,169,169,0.5)');
    circle(this.x,this.y,this.r);
  }

  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

let particles = [];



function setup() {
  createCanvas (window.innerWidth, window.innerHeight);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}


function draw() {
  background (0);
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }

fill (255,180,0)
 circle(250, 300, 500);

  noFill ();
  stroke (255,0,0);
  circle (100, 260, 980);
  noFill ();
  stroke (255,100,0);
  circle (160, 320, 1100);
  noFill ();
  stroke (255,140,0);
  circle (250, 350, 1100);
  noFill ();
  stroke (200,50,100);
  circle (330, 350, 1200);
  noFill ();
  stroke (220,50,150);
  circle (430, 370, 1300);
  noFill ();
  stroke (0,50,150);
  circle (530, 440, 1400);
  noFill ();
  stroke (200,0,20);
  circle (620, 480, 1600);
  noFill ();
  stroke (200,0,200);
  circle (750, 500, 1800);

  fill (90,100,120)
  circle(485, 570, 90);
  fill (163,100,120)
  circle(690, 420, 100);
  fill (0,51,102)
  circle(789, 220, 120);
  fill (204,0,0)
  circle(880, 600, 120);
  fill (204,102,0)
  circle(1080, 320, 170);
  fill (255,255,153)
  circle(1230, 520, 140);
  noFill ();
  ellipse(1080, 320, 240, 30);

  fill (51,153,255)
  circle(1340, 120, 120);
  fill (0,0,153)
  circle(1630, 340, 100);
}


