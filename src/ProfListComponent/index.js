import React, { Component } from 'react';
import ProfComponent from '../ProfComponent'
import {Grid} from 'semantic-ui-react'
// import EditProfessionalModal from '../EditProfessionalModal';


class ProfessionalContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      professionals: [],
      showEditModal: false,
      professionalToEdit:  {
          name: '',
          location: '',
          image: '',
          bio: '',
          contact: '',
          field: '',
          subfield: '',
          id: ''
      }
    }
  }

  //<EditProfessionalModal handleEditChange={this.handleEditChange} 
  //        closeAndEdit={this.closeAndEdit} professionalToEdit={this.state.professionalToEdit}
  //        open={this.state.showEditModal} />

  //{
  //          (this.props.userId) ?
  //            <Grid.Column>
  //              <CreateProfessionalForm addProfessional={this.addProfessional}/>
  //            </Grid.Column>
  //          : ""
  //        }
  componentDidMount(){
    this.getProfessionals();
    //calling this function here so that the data will be loaded for user
    //as soon as app loads up
  }
  //as long as you write an arrow funtion you don't have to use .bind
  getProfessionals = async () => {

    try {
      //api calls need to be made from where they exist in state
      //process.env allows us to access our env. variable 
      //we are making a request to our flask app
      const professionals = await fetch(process.env.REACT_APP_API_URL + '/api/v1/professionals/', {
        credentials: 'include' //sending sesion cookie
      });
      const parsedProfessionals = await professionals.json();
      console.log(parsedProfessionals);
      let countries = parsedProfessionals.data.map(professional => {
        return {
          country: professional.country,
          city: professional.city
        }
      });
      console.log(countries)
      this.setState({
        professionals: parsedProfessionals.data, //array from flask
        countries: countries
      })
    } catch(err){
      console.log(err);
    }
  }
  deleteProfessional = async (idOfProfessional) => {
    console.log(idOfProfessional)
    const deleteProfessionalResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/professionals/' + idOfProfessional, {
                                              method: 'DELETE',
                                              credentials: 'include'
                                            });

    // This is the parsed response from professional
    const deleteProfessionalParsed = await deleteProfessionalResponse.json();
    console.log(deleteProfessionalParsed)
    // Now that the db has deleted our item, we need to remove it from state
    this.setState({professionals: this.state.professionals.filter((professional) => professional.id !== idOfProfessional )})
  }
  openEditModal = (professionalFromList) => {
      console.log('professional', professionalFromList);

      this.setState({
          showEditModal: true,
          professionalToEdit: {
              ...professionalFromList 
          }
      })
  }
  handleEditChange = (e) => {
      this.setState({
          professionalToEdit: {
              ...this.state.professionalToEdit,
              [e.currentTarget.name]: e.currentTarget.value
          }
      })
  }
  closeAndEdit = async(e) => {
    e.preventDefault();
    try {
        const editResponse = await fetch(process.env.REACT_APP_API_URL + 
            '/api/v1/professionals/' + this.state.professionalToEdit.id, {
                method: 'PUT',
                body: JSON.stringify(this.state.professionalToEdit),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const editResponseParsed = await editResponse.json();
            console.log('edit response', editResponseParsed);

            const newProfessionalArrayWithEdit = this.state.professionals.map(
                (professional) => {
                    if(professional.id === editResponseParsed.data.id) {
                        professional = editResponseParsed.data
                    }
                    return professional;
                })
                this.setState({
                    professionals: newProfessionalArrayWithEdit,
                    showEditModal: false
                })
    }catch(err) {
        console.log(err)
    }
  }
  render(){
    console.log(this.state.professionals);
    let userProfessionals;
    // If this component receives a filtered list of professionals, use that filtered list
    // Otherwise, use a list of all professionals
    if(this.props.location.state) {
      userProfessionals = this.props.location.state.professionals.data;
    } else {
      userProfessionals = this.state.professionals;
    }
    return (
      <div style={{marginTop: '10px', backgroundColor: '#C1F9F7', minHeight: '100vh', height: '100%'}}>
        <Grid columns={2}  style={{ height: '100%' }} verticalAlign='top' stackable>
        <Grid.Row style={{backgroundColor: '#C1F9F7'}}>
          <Grid.Column>
            <ProfComponent openEditModal={this.openEditModal} professionals={userProfessionals} userId={this.props.userId} deleteProfessional={this.deleteProfessional}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      )
  }
}

export default ProfessionalContainer