import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './App.css';
import Box from './Components/box';
class App extends Component {
  render() {
    return (
      <Grid>
  <Row>
  
      <div className="App">
        <header className="App-header"></header>
        
        <h1 className="App-title">Notre équipe</h1>
      <div>
      <Col xs={6} md={3}>
      <Box  img=".\res/image1.jpg" name='yahya bouhlel' des1="Founder" des2="CEO"/>
    </Col>
      &nbsp;&nbsp;&nbsp;
      <Col xs={6} md={3}>
      <Box  img=".\res/image2.jpg"  name='Amin bouhlel' des1="Founder" des2="COO"/>
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col xs={6} md={3}>
      <Box  img=".\res/image3.jpg" name='Arsslen Idadi' des1="SOFTWARE ENGINEER" des2="PART TIME PRG:MANAGER"/>
      </Col>
      &nbsp;&nbsp;&nbsp;
      <Col xs={6} md={3}>
      <Box  img=".\res/image4.jpg"  name='yahya bouhlel' des1="FULL TIME PROGRAM" des2="MANAGER"/>
      </Col>
      </div>
     
       <header className="App-header"></header>
 </div>
 </Row>
 </Grid>
    );
  }
}
export default App;
