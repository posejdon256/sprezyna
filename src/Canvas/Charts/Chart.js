import React, { Component } from 'react';
import '../../App.css';
import { clearCanvas } from '../../Draw/Clear';
import { DrawLine } from '../../Draw/DrawLine';

export default class Chart extends Component {
    componentWillReceiveProps(props){
        if(!props.datas1 || !props.datas2 || !props.datas3) {
            return;
        }
        const canvas = this.refs.can;
        clearCanvas(canvas);
        for(let i = 1; i < props.datas1.length; i ++) {
            DrawLine(canvas, i - 1, props.datas1[i - 1],  i, props.datas1[i], "rgba(0, 0, 0, 255)");
        }
        for(let i = 1; i < props.datas2.length; i ++) {
            DrawLine(canvas, i - 1, props.datas2[i - 1],  i, props.datas2[i], "rgba(150, 150, 150, 255)");
        }
        for(let i = 1; i < props.datas3.length; i ++) {
            DrawLine(canvas, i - 1, props.datas3[i - 1],  i, props.datas3[i], "rgba(210, 210, 210, 255)");
        }
    }
    render(){
        return(
            <div>
                <canvas ref="can" className="ab-small-canvas" width="300" height="300"></canvas>
            </div>
        );
    }
}