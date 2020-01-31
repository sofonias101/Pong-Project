import { SVG_NS } from "../settings";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, KeyDown, KeyUp) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 15;
    this.score = 0;
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case KeyUp:
          this.moveUp();
          break;
        case KeyDown:
          this.moveDown()
          break;
      }
    });
  }
  getPaddlePosition() {
    const position = {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width
    };
    return position;
  }
  //moves paddle up
  moveUp() {
    console.log('up was pressed');
    this.y = Math.max(0, this.y - this.speed);

  }
  // moves paddle down
  moveDown() {
    console.log('down was pressed');
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);

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