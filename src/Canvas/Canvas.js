import React, { Component } from 'react';
import { setBallPosition, setCanvasForBall } from './Ball/Ball';
import { startMoving } from './Spring/Spring';
let canvas;

export default class Canvas extends Component {

  componentDidMount(){
    //variables
    canvas = this.refs.can;
    setCanvasForBall(canvas);
    setBallPosition(600);
    startMoving();
  }
  render() {
    return (
      <div>
        <canvas ref="can" className="ab-canvas" width="800" height="800"></canvas>
      </div>
    );
  }
}
