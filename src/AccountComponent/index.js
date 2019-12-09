import React, { Component } from 'react';
import { Card, Icon, Image, Form, Button, Message } from 'semantic-ui-react';

class AccountComponent extends Component {
  constructor(props) {
    super(props)

    console.log(props.professional)

    this.state= {
      id: this.props.professional.id,
      name: this.props.professional.name,
      field: this.props.professional.field,
      subfield: this.props.professional.subfield,
      location: this.props.professional.location,
      bio: this.props.professional.bio,
      // 1. Add all fields here
      // 2. Add name attribute to inputs in the form
      // 3. Add the handeChange method to this class
      // 4. Change onClick = this.props.handleChange to this.handleChange in inputs
      // 5. Change the body of the put request to 'state' instead of 'editedProfessional' line 41
      // 6. Find out why this.props.professional.id is 'undefined' and fix => could
      // set it in state like other properties and use the state instead of props
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
        '/api/v1/professionals/' + this.state.id, {
            method: 'PUT',
            body: JSON.stringify(this.state),
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


handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
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
              name='name'
              value={ this.state.name } onChange={this.handleChange}
              type='text'
             />
            <Form.Input
              fluid
              label='Field'
              name='field'
              value={ this.state.field } onChange={this.handleChange}
              type='text'
            />
            <Form.Input
              fluid
              label='Subfield'
              name='subfield'
              value={ this.state.subfield } onChange={this.handleChange}
              type='text'
            />
            <Form.Input
              fluid
              label='Location'
              name='location'
              value={ this.state.location } onChange={this.handleChange}
              type='text'
            />
            <Form.Input
              fluid
              label='Bio'
              name='bio'
              value={ this.state.bio } onChange={this.handleChange}
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