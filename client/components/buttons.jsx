//importing React modules
import React, { Component } from 'react';

//importing semantic ui elements
import {Button} from 'semantic-ui-react';

export default class Buttons extends Component {

  render(){

    const styles = {
      buttonContainer:{
        float:'right',
      },
      buttons:{
        margin:10,
        padding:'10px 14px',
        backgroundColor:this.props.color,
        color:'white',
      }
    }

    if(this.props.button2 != "SUBMIT")
      return(
        <div style={styles.buttonContainer}>
          <Button style={styles.buttons} onClick={() => this.props.handlePrev()}>
            {this.props.button1}
          </Button>
          <Button style={styles.buttons} onClick={() => this.props.handleNext()}>
            {this.props.button2}
          </Button>
        </div>
      );
    else
      return(
        <div style={styles.buttonContainer}>
          <Button style={styles.buttons} onClick={() => this.props.handlePrev()}>
            {this.props.button1}
          </Button>
          <Button style={styles.buttons} onClick={() => this.props.handleSubmit()}>
            {this.props.button2}
          </Button>
        </div>
      );
  }
}
