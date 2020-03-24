import React from "react";

import { Link } from "react-router-dom";

export default class List extends React.Component {

  render() {
    const contacts = this.props.contacts;

    return (
      <div className="contact-list">
        { contacts && contacts.length > 0 &&
          <ul>
            { contacts.map((v) => (
              <li key={v.id} onClick={() => this.props.handleContactClick(v.id)}>
                <Link to={ v.id }>{ v.firstname } { v.lastname }</Link>
              </li>
            )) }
          </ul>
        }
      </div>
    );
  }
}