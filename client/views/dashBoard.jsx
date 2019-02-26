//importing React modules
import React, { Component } from 'react';

//importing semantic-ui components
import { Icon } from 'semantic-ui-react'

//importing React Router elements
import { Link } from 'react-router-dom';


var data = [{
  id:"1",
  img:'./../../assets/images/farmer.jpg',
  heading:'Farmer',
  icon:'snowflake'
},
{
  id:"2",
  img:'./../../assets/images/log1.jpeg',
  heading:'Logistic Partner',
  icon:'shipping fast'
},
{
  id:"3",
  img:'./../../assets/images/dc.jpeg',
  heading:'Distribution Center',
  icon:'warehouse'
},
{
  id:"4",
  img:'./../../assets/images/log2.jpg',
  heading:'Logistic Partner',
  icon:'shipping fast'
},
{
  id:"5",
  img:'./../../assets/images/retailer.jpg',
  heading:'Retailer',
  icon:'shopping cart'
}]

module.exports = () => {
  return(
      <div className="container">

        <div className="appbar">
          <h1>Track and Trace</h1>
        </div>

        <div className="box">
          <div className="thumb">
            <img src='./../../assets/images/farmer.jpg' />
          </div>
          <div className="details">
            <div className="content">
              <Icon inverted size="huge" name="snowflake outline" />
              <h3>Farmer</h3>
              <Link to="/farmerMenu">View More</Link>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="thumb">
            <img src='./../../assets/images/log1.jpeg' />
          </div>
          <div className="details">
              <div className="content">
                <Icon inverted size="huge"  name="shipping" />
                <h3>Logistic Partner</h3>
                <Link to="/logisticPartner1">View More</Link>
              </div>
          </div>
        </div>

        <div className="box">
          <div className="thumb">
            <img src='./../../assets/images/dc.jpeg' />
          </div>
          <div className="details">
            <div className="content">
              <Icon inverted size="huge"  name="factory" />
              <h3>Distribution Center</h3>
              <a href="#">View More</a>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="thumb">
            <img src='./../../assets/images/log2.jpg' />
          </div>
          <div className="details">
            <div className="content">
              <Icon inverted size="huge"  name="shipping" />
              <h3>Logistic Partner</h3>
              <Link to="/logisticPartner2">View More</Link>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="thumb">
            <img src='./../../assets/images/retailer.jpg' />
          </div>
          <div className="details">
            <div className="content">
              <Icon size="huge" inverted name="shopping cart" />
              <h3>Retailer</h3>
              <Link to="/retailer">View More</Link>
            </div>
          </div>
        </div>

    </div>
  );
}
