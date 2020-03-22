import React from "react";
import { connect } from 'react-redux';

import contactActions from '../../redux/contact/actions'

import List from './list';
import Contact from './contact';

class ContactManager extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(contactActions.list());
  }

  contactClick = (id) => {
    this.props.dispatch(contactActions.get(id));
  }

  render() {
    console.log('PROPS', this.props);

    return (
      <div>
        <List contacts={this.props.contacts.list} handleContactClick={this.contactClick} />
        <Contact contact={this.props.contacts.detail} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.App,
  contacts: state.Contact,
});

export default connect(mapStateToProps)(ContactManager);