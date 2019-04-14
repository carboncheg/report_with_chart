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
