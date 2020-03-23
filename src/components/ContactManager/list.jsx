import React from "react";

export default class List extends React.Component {

  render() {
    const contacts = this.props.contacts;

    return (
      <div className="contact-list">
        { contacts && contacts.length > 0 &&
          <ul>
            { contacts.map((v) => (
              <li key={v.id} onClick={() => this.props.handleContactClick(v.id)}>
                { v.firstname } { v.lastname }
              </li>
            )) }
          </ul>
        }
      </div>
    );
  }
}