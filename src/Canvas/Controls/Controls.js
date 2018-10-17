import React, { Component } from 'react';
import '../../App.css';
import { TryParseFloat } from '../Helpers/Helpers';
import { _setX0, _setV0, _setDelta, _setM, _setK, _setW, _setH, _setC, setTime, _setA, _setOmega, _setTeta } from '../Spring/Spring';

export default class Controls extends Component {
    constructor(props) {
        super(props);
        this.setC = this.setC.bind(this);
        this.setX0 = this.setX0.bind(this);
        this.setV0 = this.setV0.bind(this);
        this.setDelta = this.setDelta.bind(this);
        this.setM = this.setM.bind(this);
        this.setK = this.setK.bind(this);
        this.setW = this.setW.bind(this);
        this.setH = this.setH.bind(this);
        this.setT = this.setT.bind(this);
        this.setA = this.setA.bind(this);
        this.setOmega = this.setOmega.bind(this);
        this.setTeta = this.setTeta.bind(this);
    }
    setC(e){
        _setC(TryParseFloat(e.target.value, 1));
    }
    setT() {
        setTime(0);
    }
    setX0(e){
        _setX0(TryParseFloat(e.target.value, 1));
    }
    setV0(e){
        _setV0(TryParseFloat(e.target.value, 1));
    }
    setDelta(e){
        _setDelta(TryParseFloat(e.target.value, 1));
    }
    setM(e){
        _setM(TryParseFloat(e.target.value, 1));
    }
    setK(e){
        _setK(TryParseFloat(e.target.value, 1));
    }
    setW(e){
        _setW(TryParseFloat(e.target.value, 1));
    }
    setH(e){
        _setH(TryParseFloat(e.target.value, 1));
    }
    setA(e){
        _setA(TryParseFloat(e.target.value, 1));
    }
    setOmega(e){
        _setOmega(TryParseFloat(e.target.value, 1));
    }
    setTeta(e){
        _setTeta(TryParseFloat(e.target.value, 1));
    }
    render(){
        return(
            <div>
                <div className="ab-texts-continer">
                    <label className="ab-label">x0</label>
                    <input onChange={this.setX0} defaultValue="1" type="text" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">v0</label>
                    <input onChange={this.setV0} defaultValue="0.2" type="text" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">delta</label>
                    <input onChange={this.setDelta} type="text" defaultValue="0.01" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">m</label>
                    <input onChange={this.setM} defaultValue="10" type="text" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">k</label>
                    <input onChange={this.setK} type="text" defaultValue="1" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">c</label>
                    <input onChange={this.setC} type="text" defaultValue="10" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">h(t)</label>
                    <select className="ab-select" onChange={this.setW}>
                        <option value="0">A</option>
                        <option value="1">sgn(Asin(&#969;t+	&#952;))</option>
                        <option value="2">Asin(&#969;t+	&#952;)</option>
                    </select>
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">w(t):</label>
                    <select className="ab-select" onChange={this.setW}>
                        <option value="0">A</option>
                        <option value="1">sgn(Asin(&#969;t+	&#952;))</option>
                        <option value="2">Asin(&#969;t+	&#952;)</option>
                    </select>
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">A:</label>
                    <input type="text" onChange={this.setA} defaultValue="1" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">&#969;:</label>
                    <input type="text" onChange={this.setOmega} defaultValue="1" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <label className="ab-label">&#952;:</label>
                    <input type="text" onChange={this.setTeta} defaultValue="1" className="ab-input" />
                </div>
                <div className="ab-texts-continer">
                    <button onClick={this.setT}>Reset</button>
                </div>
            </div>
        );
    }
}