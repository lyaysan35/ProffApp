import React, { Component } from 'react';
import { Card, Icon, Image, Form, Button, Message } from 'semantic-ui-react';

class AccountComponent extends Component {
  constructor(props) {
    super(props)

    this.state= {
      editedProfessional: ''
    };
  }

  deleteProfessional = async () => {
    const deleteProfessionalResponse = await fetch(process.env.REACT_APP_API_URL +
      '/api/v1/professionals/' +
      this.props.professional.id, {
        method: 'DELETE',
        credentials: 'include'
      }
    );
    // This is the parsed response from professional
    const deleteProfessionalParsed = await deleteProfessionalResponse.json();
    console.log(deleteProfessionalParsed);
    this.props.history.push('/');
  }

  editProfessional = async() => {
    try {
      const editResponse = await fetch(process.env.REACT_APP_API_URL + 
        '/api/v1/professionals/' + this.state.professional.id, {
            method: 'PUT',
            body: JSON.stringify(this.state.editedProfessional),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
            
        const editResponseParsed = await editResponse.json();
        console.log('edit response', editResponseParsed);
        this.props.updateProf(editResponseParsed);

    } catch(err) {
        console.log(err)
    }
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{ this.props.professional.name }</Card.Header>
            <Card.Meta>
              <span className='date'>{ this.props.professional.field }</span>
              <span className='date'>{ this.props.professional.subfield }</span>
              <span className='date'>{ this.props.professional.location }</span>
            </Card.Meta>
            <Card.Description>
              {this.props.professional.bio}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              { this.props.professional.rating }
            </a>
          </Card.Content>
        </Card>
        <Message
          attached
          header='Edit your professional details!'
          content='Fill out the form below to update or change details'
        />
        <Form className='attached fluid segment'>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='Name'
              placeholder={ this.props.professional.name }
              type='text'
            />
            <Form.Input
              fluid
              label='Field'
              placeholder={ this.props.professional.field }
              type='text'
            />
            <Form.Input
              fluid
              label='Subfield'
              placeholder={ this.props.professional.subfield }
              type='text'
            />
            <Form.Input
              fluid
              label='Location'
              placeholder={ this.props.professional.location }
              type='text'
            />
            <Form.Input
              fluid
              label='Bio'
              placeholder={ this.props.professional.bio }
              type='text'
            />
          </Form.Group>
          <Form.Input label='Email' placeholder='Email' type='text' />
          <Form.Input label='Password' type='password' />
          <Button color='blue' onClick={ this.editProfessional }>Submit</Button>
        </Form>
        <Button basic color='red' onClick={ this.deleteProfessional }>Terminate Account</Button>
      </div>
    )
  }
}

export default AccountComponent