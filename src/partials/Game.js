import { SVG_NS, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_GAP, BALL_RADIUS } from '../settings';
import Board from './Board';
import Paddle from './paddle';
import Ball from './ball';
import Score from './score';


export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.paused = false;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.paddle1 = new Paddle(this.height, 10, 56, 10, 100, 's', 'w')
    this.paddle2 = new Paddle(this.height, 10, 56, 494, 100, 'l', 'o')
    this.ball = new Ball(8, this.width, this.height)
    this.score1 = new Score(this.width / 2 - 50, 30, 30);
    this.score2 = new Score(this.width / 2 + 25, 30, 30);
    // othercode
    document.addEventListener("keydown", event => {
      if (event.key === " ") {
        this.paused = !this.paused;
      }
    });


    //(boardHeight, width, height, x, y)

  }

  render() {
    // More code goes here....
    if (this.paused === false) {
      this.gameElement.innerHTML = '';
      let svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttributeNS(null, "width", this.width);
      svg.setAttributeNS(null, "height", this.height);
      svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
      this.gameElement.appendChild(svg);
      //render board
      this.board.render(svg);
      this.paddle1.render(svg);
      this.paddle2.render(svg);
      this.ball.render(svg, this.paddle1, this.paddle2);
      this.score1.render(svg, this.paddle1.getScore());
      this.score2.render(svg, this.paddle2.getScore());
    }
  }
}
