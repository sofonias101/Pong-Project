import { SVG_NS } from '../settings'

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    this.direction = 1;
  }
  render(svg) {

    const ballSvg = document.createElementNS(SVG_NS, 'circle');
    ballSvg.setAttributeNS(null, "cx", this.x);
    ballSvg.setAttributeNS(null, "cy", this.y);
    ballSvg.setAttributeNS(null, "r", this.radius);
    ballSvg.setAttributeNS(null, "fill", "white");
    svg.appendChild(ballSvg);

  }
}