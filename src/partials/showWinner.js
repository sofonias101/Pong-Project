import { SVG_NS, white } from '../settings';

export default class showWinner {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  //...
  render(svg, message) {
    const showWinner = document.createElementNS(SVG_NS, 'text');
    showWinner.setAttributeNS(null, 'x', this.x);
    showWinner.setAttributeNS(null, 'y', this.y);
    showWinner.setAttributeNS(null, 'font-size', this.size);
    showWinner.setAttributeNS(null, 'text-anchor', 'middle');
    showWinner.setAttributeNS(null, 'fill', white);
    showWinner.textContent = message;
    svg.appendChild(showWinner);
  }
}
