import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Octicon, {MarkGithub} from '@primer/octicons-react'

import ContactManager from './containers/ContactManager';

function App() {
  return (
    <Router>
      <header>
        <Navbar variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="/">Contacts</Navbar.Brand>
            <Nav>
              <Link className="nav-link" to="/">List</Link>
            </Nav>
            <Nav className="ml-auto">
              <Link className="nav-link" to="//github.com/nigeon/contacts-frontend" target="_blank"><Octicon icon={MarkGithub} /></Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      
      <Container>
        <Row className="justify-content-md-center mt-5 mb-5">
          <Col xs={12}>
            <Switch>
              <Route path="/:param?" component={ContactManager} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
