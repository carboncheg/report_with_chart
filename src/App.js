import React, { Component } from 'react';
import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import products from './data.js';


const options = {
  chart: {
      type: "scatter",
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
  legend: {
      layout: 'vertical',
      align: 'right'
  },
  series: products
};

// [
//     {
//       name: 'p1',
//       data: [[4, 2.5]]
//     },
//     {
//       name: 'p2',
//       data: [[5, 4]]
//     },
//     {
//       name: 'p3',
//       data: [[3, 1]]
//     },
//     {
//       name: 'p4',
//       data: [[2, 2]]
//     },
//     {
//       name: 'p5',
//       data: [[5, 1.5]]
//     },
//     {
//       name: 'p6',
//       data: [[4.4, 3]]
//     },
//     {
//       name: 'p7',
//       data: [[1, 1]]
//     },
//     {
//       name: 'p8',
//       data: [[2.9, 5]]
//     },
//     {
//       name: 'p9',
//       data: [[0.2, 3.5]]
//     },
//     {
//       name: 'p10',
//       data: [[3, 4]]
//     },
//     {
//       name: 'p11',
//       data: [[1.7, 4.1]]
//     },
//     {
//       name: 'p12',
//       data: [[2.9, 2]]
//     }
//   ]
// };

// let prod = document.querySelector('.prod');

// prod.addEventListener('change', (e) => {
//   let prodItem = e.target.value;

// });


// var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
// var result = Object.keys(obj).map(function(key) {
//   return [Number(key), obj[key]];
// });

// console.log(result);

// let arr = products[index];
// console.log(Object.values(arr));


// function getFeature1Values() {
//   for (let i in products) {
//     console.log(products[i].feature1);
//   }
// }
// getFeature1Values();

// let i;
// let x = products[i].feature1;



// let xAxisValues = [];

// xAxisValues.push(getFeature1Values);
// console.log(xAxisValues);

// for (let key in products) {
//   console.log(products[key].feature2);
// }

// products.forEach(function(item, i) {
//   console.log(i + ' ' + item.name + ' ' + item.feature1 + ' ' + item.feature2 + ' ' + item.year);
// });

// products.forEach(function(item) {
//   let x = item.feature1;
//   console.log(x);
// });

const Home = () => {
  return (
    <div className = "content">
      <h1>Welcome to my Chart-app!</h1>
    </div>
  )
}

const Chart = () => {
  return (
    <div>
      <div className = "chart-content">
        <HighchartsReact highcharts = {Highcharts} options = {options} />
      </div>
      <select name = "years" className = "years">
          <option value = "2015">2015</option>
          <option value = "2016">2016</option>
      </select>
      <select name = "products" className = "prod">
          <option value = "goods">Goods</option>
          <option value = "categories">Categories</option>
      </select>
    </div>
  )
}

const About = () => {
  return (
    <div className = "content">
      <h3>This chart was created during the test assignment.</h3>
    </div>
  )
}

class Navigation extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li type = "none"><Link to = "/">Home</Link></li>
            <li type = "none"><Link to = "/chart">Chart</Link></li>
            <li type = "none"><Link to = "/about">About</Link></li>
          </ul>
        </nav>

        <Route exact path = "/" component = {Home}></Route>
        <Route exact path = "/chart" component = {Chart}></Route>
        <Route exact path = "/about" component = {About}></Route>

      </Router>
    )
  }
}

export default Navigation;
