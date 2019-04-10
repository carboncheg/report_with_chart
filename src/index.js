import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
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

const App = () => (
    <div>
        <HighchartsReact highcharts = {Highcharts} options = {options} />
        <select>
            <option>2015</option>
            <option>2016</option>
        </select>
        <select>
            <option>Goods</option>
            <option>Categories</option>
        </select>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();