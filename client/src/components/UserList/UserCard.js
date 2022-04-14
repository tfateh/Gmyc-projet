import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import {Button, Card} from 'react-bootstrap';
import {deleteUser} from '../../js/actions/userActions'
const UserCard = (user) => {
    const dispatch = useDispatch()
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{user.firstName}{user.lastName}</Card.Title>
    <Card.Text>
      {user.phone}
      <br/>
      {user.adresse}
      <br/>
      {user.role}
    </Card.Text>
    <Button variant="primary" onClick={() => dispatch(deleteUser(user._id))}>Delete</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default UserCard