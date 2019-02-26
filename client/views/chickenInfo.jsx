//importing React modules
import React, { Component } from 'react';

//importing Components
import InfoPreview from './../components/infoPreview.jsx';
import ConfirmationSummary from './../components/confirmationSummary.jsx';
import Buttons from './../components/buttons.jsx';

//import data
import ChickenData from './../../data/chickenData.json';

//importing Semantic ui
import { Transition, Modal, Icon, Button, Header, Image } from 'semantic-ui-react'

//importing React Router elements
import {Link} from 'react-router-dom';


export default class ChickenInfo extends Component{

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
      <div className="sectionContainer">
        <div className="sectionLeft">
          <div className="sectionImgBox">
            <img src="./../../assets/images/chicken.jpg" />
          </div>
        </div>

        <div className="sectionRight">
          <h1>Farmer</h1>

          <div className="slider">
            <div className={this.state.className}>
              {this.state.flag ? <InfoPreview data={ChickenData} heading={"adding chicken information"} color="#c6a017"/> : <ConfirmationSummary heading={"Verifying chicken information"} data={ChickenData} color="#c6a017"/>}
            </div>
            <Buttons color="#c6a017" handleSubmit={this.handleSubmit} button1={this.state.button1} button2={this.state.button2} handleNext={this.handleNext} handlePrev={this.handlePrev}/>

            <Transition animation={"bounce"} duration={800} visible={this.state.animationState}>
              <Modal open={this.state.modalState}>
                <Modal.Header style={{backgroundColor:'#c6a017',color:'white'}}>Product Information Submitted Successfully</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='small' src='./../../assets/images/tick.png' />
                  <Modal.Description>
                    <Header as={'h2'} style={{color:'#c6a017'}}>Product ID PROD524932</Header>
                    <Header as={'h4'}>Blockchain Address</Header>
                      <p>Product Route :</p>
                      <p>7th Jan 2018,Sun |Slaughter House| 1K31KZXjcoxhXpRyjH9g5NxFSJIPi2zEXb</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button as={Link} to="/" color='red' onClick={() => this.setState({modalState:false})}>
                    <Icon name='remove' /> Close
                  </Button>
                </Modal.Actions>
              </Modal>
            </Transition>

          </div>
        </div>
    </div>
    )
  }
}
