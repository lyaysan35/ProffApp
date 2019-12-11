import React from 'react';
import { Card, Button,  Image} from 'semantic-ui-react';
function ProfComponent(props){
 let profs;
 (props.location) ? profs = props.location.state.professionals : profs = props.professionals;
 const professional = profs.map((prof) => {
 console.log('professional >>', prof);
  // console.log('user >>', props.userId);
   return (
       <Card key={prof.id} style={{width: '20%'}}>
         <Card.Content>
           <Card.Header>{prof.name}</Card.Header>
           <Image src={prof.personal_image_url}/>
           <Card.Description>{prof.field}</Card.Description>
           <Card.Description>{prof.subfield}</Card.Description>
           <Card.Description>{prof.location}</Card.Description>
           <Card.Description>{prof.contact}</Card.Description>
           <Card.Description>{prof.bio}</Card.Description>
         </Card.Content>
       </Card>
       )
 })
 return (
     <Card.Group itemsPerRow={4}>
       { professional }
     </Card.Group>
   )
}
export default ProfComponent