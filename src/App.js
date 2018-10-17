import React, { Component } from 'react';
import './App.css';
import Chart from './Canvas/Charts/Chart';
import Canvas from './Canvas/Canvas';
import { getDatasF, getDatasG, getDatasX, getDatasTrajectory, getDatasH, getDatasX_t, getDatasW, getDatasX_tt } from './Datas/Datas';
import Chart2 from './Canvas/Charts/Chart2';
import Controls from './Canvas/Controls/Controls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasF: getDatasF(),
      datasG: getDatasG(),
      datasX: getDatasX(),
      datasH: getDatasH(),
      datasW: getDatasW(),
      datasX_t: getDatasX_t(),
      datasX_tt: getDatasX_tt(),
      datasTrajectory: getDatasTrajectory()
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      datasF: getDatasF(),
      datasG: getDatasG(),
      datasX: getDatasX(),
      datasH: getDatasH(),
      datasW: getDatasW(),
      datasX_t: getDatasX_t(),
      datasX_tt: getDatasX_tt(),
      datasTrajectory: getDatasTrajectory()
    }), 1);
  }
  render() {
    return (
      <div className="App">
       <div className="ab-controls">
        <Controls />
       </div>
       <div className="ab-canvas-container">
        <Canvas/>
       </div>
       <div>
       <Chart datas1={this.state.datasF}
               datas2={this.state.datasG}
               datas3={this.state.datasH}
         />
        <Chart datas1={this.state.datasX}
               datas2={this.state.datasX_t}
               datas3={this.state.datasX_tt}
         />
        <Chart2 datas={this.state.datasTrajectory}/>
       </div>
      </div>
    );
  }
}

export default App;
