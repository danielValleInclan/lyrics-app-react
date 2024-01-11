import './App.css';
import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Form_search from './components/Form_search';
import Table_songs from './components/Table_songs';


class App extends Component{
  constructor() {
    super()
    this.state = {
      data: [],
      artist: '',
      title: '',
      lyric: ''
    }
  }
  passParams= (data) => {
    let dataNew = this.state.data; //let declara variables de ámbito local
    dataNew.push(data) //El método push anexa nuevos elementos a un array
    this.setState({
      data: dataNew
    });
  }
  render(){
    return (
      <Container>
        <Row>
          <Col>
            <Form_search passParams={this.passParams} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Table_songs data={this.state.data}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
