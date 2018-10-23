import React, { Component } from 'react';
import '../../App.css';
import { DrawLine } from '../../Draw/DrawLine';
import { getLastTrajectory } from '../../Datas/Datas';

export function getChart2(){
    return _canvas;
}
let _canvas;
export default class Chart2 extends Component {
    componentDidMount(props) {
        _canvas = this.refs.can;
    }
    componentWillReceiveProps(props){
        if(!props.datas) {
            return;
        }
        const canvas = this.refs.can;
        const tr = getLastTrajectory();
        if(tr && tr.length === 2) {
            DrawLine(canvas, (tr[0].x / 2) + (canvas.width / 4), (tr[0].y / 2) +  (canvas.height / 4),
             (tr[1].x / 2) + (canvas.width / 4), (tr[1].y / 2) + (canvas.height / 4), "rgba(0, 0, 0, 255)");
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