import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { getAllProducts } from '../../js/actions/productsActions';
import { getUsers } from '../../js/actions/userActions';

const AdminDashboard = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users);
    const products = useSelector((state)=> state.productReducer.products)
    


    useEffect(() => {
        dispatch(getUsers());
        dispatch(getAllProducts())
        

      }, [dispatch]);
    
  return (
    <>
    <div style={{display:"flex",justifyContent:"space-between",margin:"80px 12%"}}>
    <Link to="/dashboard/users">
  <Card style={{ width: '20rem' }} >
    <Card.Img style={{height:350}} variant="top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU"
          alt="profile avatar"/>
         
    <Card.Body>
      <Card.Title>Users List </Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Number of users {users.length}</small>
    </Card.Footer>
  </Card>
  </Link>
  <Link to="/dashboard/products">
  <Card style={{ width: '20rem' }} >
    <Card.Img style={{height:350}} variant="top"  src="https://images-na.ssl-images-amazon.com/images/I/71IfGdoNC1L.jpg"
          alt="profile avatar"/>
         
    <Card.Body>
      <Card.Title>Product List </Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Number of product {products.length}</small>
    </Card.Footer>
  </Card>
  </Link>
</div>

    </>
  )
}

export default AdminDashboard