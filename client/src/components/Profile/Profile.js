import React, { useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../js/actions/authActions";
import ProductCard from "../ProductList/productCard";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const user = useSelector((state) => state.authReducer.user);
  const products = useSelector((state) => state.authReducer.products);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);

  return loading ? (
    <ProgressBar className="loading-pofile" striped variant="danger" now={100} />
  ) : (
    <div className="user-profile">
      <section className="user-details">
        <img
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          alt=" profile avatar"
        />

        <h1>
          {user.firstName} {user.lastName}
        </h1>

        <span>Email : {user.email}</span>
        <span>Adress : {user.adress}</span>
        <span>Phone: {user.phone}</span>
        <span>Roles: {user.role}</span>
      </section>

      <section className="user-products">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </section>
    </div>
  );
};

export default Profile;