//importing React modules
import React, { Component } from 'react';

//importing semantic ui elements
import {Icon} from 'semantic-ui-react';


export default class Scanner extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){

    const styles = {
      heading:{
        backgroundColor:this.props.color,
        color:'white',
        padding:10,
        letterSpacing:8,
        textTransform:'uppercase'
    },
    searchDiv:{
      display:'flex'
    },
    searchButton:{
      float:'right',
      background:this.props.color,
      padding:20,
      borderRadius:'50%'
    },
    searchText:{
      width:0,
      border:'none',
      outline:'none',
      color:'white',
      transition:'0.4s'
    },
    searchTextAnimated:{
      width:240,
      border:'none',
      outline:'none',
      color:'white',
      transition:'0.4s'
    }
  }

    return(
      <div style={{position:'relative'}}>
        <h2 style={styles.heading}>Scan or Search the product</h2>
          <div style={styles.searchDiv}>
            <div style={{flex:1}} />

            <div>
              <input type="text" style={styles.searchText}/>

              <div style={styles.searchButton}>
                <Icon inverted name="search" size="big"/>
              </div>
            </div>

            <div style={{flex:1}} />
          </div>
      </div>
    );
  }
}
