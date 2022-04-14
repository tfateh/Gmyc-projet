import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers/Headers';
import UserNav from './components/Headers/UserNav';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { getAuthUser } from './js/actions/authActions';
import Profile from './components/Profile/Profile';
import ProductsList from './components/ProductList/productList';
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import UsersList from './components/UserList/UsersList';






function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const role = useSelector((state) => state.authReducer.user.role);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [isAuth, dispatch]
  );
  return (
    <div className='App'>

      {isAuth ? <UserNav /> : <Headers />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/productslist"
          element={
            <PrivateRoute>
              <ProductsList />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {role === "admin" ? <Route path="/dashboards"
          element={<PrivateRoute> <AdminDashboard /> </PrivateRoute>} /> : <Route path="/" element={<Home />} />}
        <Route path="dashboard">
          <Route path="users" element={<PrivateRoute> <UsersList /> </PrivateRoute>} />


        </Route>
      </Routes>
    </div>
  );
}

export default App;