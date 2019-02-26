//importing React modules
import React, { Component } from 'react';

//importing React Router elements
import { Link } from 'react-router-dom';


var data = [{
  name:'Chicken',
  link:'/chickenInfo',
  img:'./../../assets/images/chicken.jpg'
},
{
  name:'Mutton',
  link:'/chickenInfo',
  img:'./../../assets/images/goat.jpg'
},
{
  name:'Pork',
  link:'/chickenInfo',
  img:'./../../assets/images/pig.jpg'
}]

module.exports = () => {
  return(
    <div className="farmerContainer">

      <div className="heading">
        <h1>Select a Product</h1>
      </div>

      <div className="menuContainer">

        {/* looping through the data and displaying as cards*/}
        {
          data.map((item,index) => (
            <div className="menu" key={index}>
              <div className="imgBox">
                <img src={item.img} />
              </div>

              <div className="content">
                <h2>{item.name}</h2>
                <Link to={item.link}><input type="submit" value="View More"/></Link>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
