import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import  {getAllProducts}  from "../../js/actions/productsActions";
import ProductForm from "../ProductsForm/ProductsForm";
import ProductCard from "./productCard";
import "./productslist.css";

const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsReducer.products);
  const loading = useSelector((state) => state.productsReducer.loading);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return loading ? (
    <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
  ) : (
    <div className="products">
      <ProductForm edit={false} />

      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsList;