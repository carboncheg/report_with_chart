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
    series: [
        {
            data: [1, 6, 5, 2, 4, 3]
        }
    ]
};

const App = () => (
    <div>
        <HighchartsReact highcharts = {Highcharts} options = {options} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();