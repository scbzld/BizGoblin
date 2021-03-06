import { Chart, Axis, Geom, Tooltip, Legend } from '../../../packages/goblin-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

function onChangeTooltip (obj, chart) {
  const legend = chart.get('legendController').legends.top[0];
  const tooltipItems = obj.items;
  const legendItems = legend.items;
  const map = {};
  legendItems.map(function(item) {
    map[item.name] = item;
  });
  tooltipItems.map(function(item) {
    const name = item.name;
    const value = item.value;
    if (map[name]) {
      map[name].value = value;
    }
  });
  legend.setItems(Object.keys(map).map(key=>map[key]));
}

function onHideTooltip (obj, chart) {
  const legend = chart.get('legendController').legends.top[0];
  legend.setItems(chart.getLegendItems().country);
}

class App extends React.Component {
  state = {
    height:240,
    width:320,
    pixelRatio: window.devicePixelRatio*2
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width, pixelRatio } = this.state;
    return (
      <div>
        <Chart height={height} width={width} data={data} defs={defs} pixelRatio={pixelRatio} >
          <Axis dataKey='月份'/>
          <Legend />
          <Tooltip custom onChange={onChangeTooltip} onHide={onHideTooltip} />
          <Geom geom='interval' position='月份*月均降雨量' color='name' adjust='stack' />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
