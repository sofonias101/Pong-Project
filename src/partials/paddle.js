import { SVG_NS } from "../settings";

export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }
  //paddles
  render(svg) {
    const paddleSvg = document.createElementNS(SVG_NS, 'rect');
    paddleSvg.setAttributeNS(null, "x", this.x, 0);
    paddleSvg.setAttributeNS(null, "y", this.y, 0);
    paddleSvg.setAttributeNS(null, "width", this.width);
    paddleSvg.setAttributeNS(null, "height", this.height);
    paddleSvg.setAttributeNS(null, "fill", "white");
    svg.appendChild(paddleSvg);
  }
}