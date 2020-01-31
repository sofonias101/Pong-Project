import { SVG_NS } from '../settings'

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    // this.x = this.boardWidth / 2;
    // this.y = this.boardHeight / 2;
    this.direction = 1;
    this.reset();

  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = (Math.random() * 10) - 5;

    }
    this.vx = (6 - Math.abs(this.vy)) * this.direction;
  }

  wallCollusion() {
    if ((this.y + this.radius >= this.boardHeight) || (this.y - this.radius <= 0)) {
      this.vy = this.vy * -1;
    }
  }


  ballMove() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  render(svg) {

    const ballSvg = document.createElementNS(SVG_NS, 'circle');
    ballSvg.setAttributeNS(null, "cx", this.x);
    ballSvg.setAttributeNS(null, "cy", this.y);
    ballSvg.setAttributeNS(null, "r", this.radius);
    ballSvg.setAttributeNS(null, "fill", "white");
    svg.appendChild(ballSvg);
    this.ballMove();
    this.wallCollusion();


  }
}