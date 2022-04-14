import React, { useEffect, useState } from 'react'
import { Modal, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../js/actions/userActions';
import UserCard from './UserCard';
import './userList.css';

const UsersList = () => {
    const dispatch = useDispatch();
    const Users = useSelector((state)=>state.userReducer.user);
    const loading = useSelector((state) => state.productsReducer.loading);
    const er = useSelector((state)=>state.userReducer.er);
    const errors= useSelector((state)=>state.userReducer.errors);
    const [show,setShow]= useState(true);

    const handleClose = () => setShow(false);
    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch]
    );
  return loading ? (
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  ):(
    <>
    <div style={{ margin: "115px 10%" }}>
      {er ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            closeButton
            style={{ background: "rgba(255, 0, 0, 0.4)", height: 150 }}
          >
            <Modal.Title style={{ textAlign: "center" }}>
              {errors.status}:{errors.message}
            </Modal.Title>
          </Modal.Header>
        </Modal>
      ) : null}
<h1>        Users List</h1>        
      <Table striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Role</th>
    <th className="delete">Delete</th>
  </tr>
</thead>

</Table>
      {Users.map((user,i) => (
     <UserCard user={user} key={user._id} />
      ))}
  
    </div>
  </>
  
  )
}

export default UsersList