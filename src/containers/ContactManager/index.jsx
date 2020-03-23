import React from "react";
import { connect } from 'react-redux';

import contactActions from '../../redux/contact/actions'

import List from '../../components/ContactManager/list';
import Contact from '../../components/ContactManager/contact';
import CreateEdit from '../../components/ContactManager/createedit';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class ContactManager extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(contactActions.list());
  }

  listContactClick = (id) => {
    this.props.dispatch(contactActions.get(id));
  }

  changeMode = (mode) => {
    this.props.dispatch(contactActions.changeMode(mode));
  }

  handleCreateEdit = (values, actions) => {
    this.props.dispatch(contactActions.createEdit(values, actions.setErrors, actions.setSubmitting));
  }

  handleDelete = (id) => {
    this.props.dispatch(contactActions.delete(id));
  }

  render() {
    let contact = this.props.contacts.detail;
    if(this.props.contacts.mode === 'create'){
      contact = {};
    }

    return (
      <div className="contact-manager">
        <Row>
          <Col xs={12}>
            <Nav className="justify-content-end head">
              <Button variant="outline-light" onClick={() => this.changeMode('create')}>New contact</Button>
            </Nav>
          </Col>
        </Row>
        

        <Row noGutters className="justify-content-md-center main">
          <Col xs={4}>
            <List contacts={this.props.contacts.list} handleContactClick={this.listContactClick} />
          </Col>
          <Col xs={8}>
            <div className="viewer">
              {this.props.contacts.mode === 'detail' && 
                <Contact 
                  contact={contact}
                  handleDelete={() => this.handleDelete(contact.id)}
                  handleEdit={() => this.changeMode('edit')}
                />
              }
              {(this.props.contacts.mode === 'create' || this.props.contacts.mode === 'edit') &&
                <CreateEdit 
                  contact={contact} 
                  handleSubmit={this.handleCreateEdit} 
                />
              }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.App,
  contacts: state.Contact,
});

export default connect(mapStateToProps)(ContactManager);