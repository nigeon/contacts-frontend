import React from "react";
import { connect } from 'react-redux';

import contactActions from '../../redux/contact/actions'

class ContactList extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(contactActions.list());
  }

  contactClick = (id) => {
    this.props.dispatch(contactActions.get(id));
  }

  render() {
    console.log('PROPS', this.props);
    const contactList = this.props.contacts.list;
    const detail = this.props.contacts.detail;
    return (
      <div>
        <h1>List</h1>
        <div>
          { contactList && contactList.length > 0 &&
            <ul>
              { contactList.map((v) => (
                <li key={v.id} onClick={() => this.contactClick(v.id)}>
                  { v.firstname } { v.lastname }
                </li>
              )) }
            </ul>
          }
        </div>
        <div>
          { detail && 
            <div>{ detail.id }{ detail.firstname }{ detail.lastname }{ detail.email }{ detail.phone }</div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.App,
  contacts: state.Contact,
});

export default connect(mapStateToProps)(ContactList);