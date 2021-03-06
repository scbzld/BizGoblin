import { Chart, Axis, Geom, Tooltip, Legend } from '../../../packages/goblin-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

function formatLabel (text, index, total) {
  const textCfg: any = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  } else if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}

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

class App extends React.Component<{data?: Array<any>}> {
  state = {
    height: 240,
    width: '320',
    pixelRatio: window.devicePixelRatio*2
  }

  static defaultProps = {
    data: []
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width, pixelRatio } = this.state;
    return (
      <div>
        <Chart height={height} width={width} data={data} defs={defs} pixelRatio={pixelRatio} >
          <Axis dataKey='date' label={formatLabel} />
          <Axis dataKey='value' label={{ fontSize:12 }} />
          <Legend />
          <Tooltip showCrosshairs custom onChange={onChangeTooltip} onHide={onHideTooltip} />
          <Geom geom='line' position='date*value' color='type' />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
