import React from "react";
import { connect } from 'react-redux';

import contactActions from '../../redux/contact/actions'

import Button from 'react-bootstrap/Button';

class Contact extends React.Component {
  delete = (id) => {
    this.props.dispatch(contactActions.delete(id));
  }

  render() {
    const contact = this.props.contact;

    return (
      <div>
        { contact && Object.keys(contact).length > 0 > 0 && 
            <div>
              { contact.id }{ contact.firstname }{ contact.lastname }{ contact.email }{ contact.phone }
              <Button onClick={() => this.delete(contact.id)} variant="danger">Delete</Button>
            </div>
          }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  app: state.App,
  contacts: state.Contact,
});

export default connect(mapStateToProps)(Contact);