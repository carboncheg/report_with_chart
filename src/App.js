import React, { Component } from 'react';
import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DataRow from './data.tsx';

const options = {
  chart: {
      type: "scatter"
  },
  title: {
      text: "Goods"
  },
  xAxis: {
      title: {
          text: 'Feature 1'
      }
  },
  yAxis: {
      title: {
          text: 'Feature 2'
      }
  },

  series: DataRow
};

class App extends Component {
  render() {
      return (
          <div>
              <HighchartsReact highcharts = {Highcharts} options = {options} />
              <select name = "years">
                  <option value = "2015">2015</option>
                  <option value = "2016">2016</option>
              </select>
              <select name = "products">
                  <option value = "goods">Goods</option>
                  <option value = "categories">Categories</option>
              </select>
          </div>
      )
  }
};

export default App;
