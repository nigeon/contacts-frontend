import React from "react";

import Button from 'react-bootstrap/Button';

export default class Contact extends React.Component {
  render() {
    const contact = this.props.contact;

    return (
      <div>
        { contact && (Object.keys(contact).length > 0)  && 
            <div>
              <dl>
                <dt>Id:</dt>
                <dd>{ contact.id }</dd>
                <dt>First name:</dt>
                <dd>{ contact.firstname }</dd>
                <dt>Lastname:</dt>
                <dd>{ contact.lastname }</dd>
                <dt>Email:</dt>
                <dd>{ contact.email }</dd>
                <dt>Phone:</dt>
                <dd>{ contact.phone }</dd>
                <dt>Created:</dt>
                <dd>{ contact.createdAt }</dd>
                <dt>Updated:</dt>
                <dd>{ contact.updatedAt }</dd>
              </dl>

              <Button onClick={this.props.handleEdit}>Edit</Button>
              <Button onClick={this.props.handleDelete} variant="danger">Delete</Button>
            </div>
          }
      </div>
    );
  }
}