//importing React modules
import React, { Component } from 'react';

//importing semantic ui elements
import {Form, Grid, Input} from 'semantic-ui-react';


module.exports = (props) => {

  var comp = [];

  for(var prop in props.data)
  {
    comp.push(
     <Grid.Column key={prop}>
       <Form>
             <Form.Field>
               <label >{prop}</label>
               <label className="headers" style={{fontSize:'20px',color:props.color}}>{props.data[prop]}</label>
             </Form.Field>
         </Form>
     </Grid.Column>
   );
  }


  return(
    <div className="chickenConfirmationSegment">
      <h2>Verifying Chicken Information</h2>
      <Grid columns={2}>
          {comp}
      </Grid>
    </div>
  );
}
