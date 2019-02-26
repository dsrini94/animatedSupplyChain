//importing React modules
import React, { Component } from 'react';

//importing semantic ui elements
import {Form, Grid, Input} from 'semantic-ui-react';

module.exports = (props) => {

  const styles = {
    textField:{
          border: 0,
          outline: 0,
          background: 'transparent',
          borderBottom: "2px solid "+props.color,
        },
        heading:{
          backgroundColor:props.color,
          padding:10,
          color:'white',
          textTransform:'uppercase',
          letterSpacing:8
        }
  }

  var comp = [];

  for(var prop in props.data)
  {
    comp.push(
     <Grid.Column key={prop}>
       <Form>
             <Form.Field>
               <label >{prop}</label>
               <input style={styles.textField} defaultValue={props.data[prop]}/>
             </Form.Field>
         </Form>
     </Grid.Column>
   );
  }


  return(
    <div style={{overflow:'hidden',marginTop:5}}>
      <h2 style={styles.heading}>{props.heading}</h2>
      <Grid columns={2}>
          {comp}
      </Grid>
    </div>
  );
}
