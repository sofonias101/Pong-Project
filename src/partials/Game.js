import { SVG_NS, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_GAP, BALL_RADIUS } from '../settings';
import Board from './Board';
import Paddle from './paddle';
import Ball from './ball';
import Score from './score';
import showWinner from './showWinner'

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
    this.gameWon = false;
    this.showWinner = new showWinner(this.width / 2, this.height / 2, 40);

    // othercode
    document.addEventListener("keydown", event => {
      if (event.key === " ") {
        this.paused = !this.paused;
      }

      // Event Listener For goal count and "winner"


    });

  }
  gameWin(paddle1Score, paddle2Score) {
    if (paddle1Score === 5) {
      console.log('paddle1 won');
      this.gameWon = true;
      return 'Paddle1 won';
    } else if (paddle2Score === 5) {
      console.log('paddle2 won');
      this.gameWon = true;
      return 'Paddle2 won';
    }

  }

  //(boardHeight, width, height, x, y)



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


      const winningPlayer = this.gameWin(
        this.paddle1.getScore(),
        this.paddle2.getScore()
      );
      if (this.gameWon === true) {
        this.showWinner.render(svg, `${winningPlayer}!`);
        this.paused = true;
        this.paddle1.resetScore();
        this.paddle2.resetScore();
        this.gameWon = false;
      }

    }
  }
}
