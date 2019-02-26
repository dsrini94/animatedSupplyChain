//importing React modules
import React, { Component } from 'react';


//importing components
import Loader from './../components/loader.jsx';
import Buttons from './../components/buttons.jsx';
import ConfirmationSummary from './../components/confirmationSummary.jsx';
import InfoPreview from './../components/infoPreview.jsx';
import Scanner from './../components/scanner.jsx';

//importing Semantic ui
import { Transition, Modal, Icon, Button, Header, Image } from 'semantic-ui-react'

//import data
import log1Data from './../../data/log1.json';

export default class LogPartenr1 extends Component{

  constructor(props){
    super(props);

    this.state = {
      className:'turnstile',
      flag:1,
      button1:'PREV',
      button2:'NEXT',
      modalState:false,
      animationState:false
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNext(){
    this.setState({className:'turn',flag:0,button1:'PREV',button2:'SUBMIT'});
  }

  handlePrev(){
    console.log('clicked');
    this.setState({className:'turnstile',flag:1,button1:'PREV',button2:'NEXT'});
  }

  handleSubmit(){
    this.setState({modalState:true,animationState:true});
  }

  render(){
    return(
          <div className="sectionContainerLog">
            <div className="sectionLeftLog">
              <div className="sectionImgBoxLog">
                <img src='./../../assets/images/log1.jpeg' />
              </div>
            </div>

            <div className="sectionRightLog">
              <h1>Americold Logistics</h1>
              <div className="slider">
                <Scanner color="#265b60"/>
                {/* <ConfirmationSummary data={log1Data} color="#265b60" heading="Adding Logistics Information"/> */}
                <Buttons color="#265b60" handleSubmit={this.handleSubmit} button1={this.state.button1} button2={this.state.button2} handleNext={this.handleNext} handlePrev={this.handlePrev}/>
              </div>
            </div>
        </div>
    )
  }
}
