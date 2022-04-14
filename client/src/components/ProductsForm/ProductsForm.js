import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import { addProduct, updateProduct } from "../../js/actions/productsActions";
import { useDispatch } from "react-redux";

function ProductForm({ edit, product }) {
  const [show, setShow] = useState(false);
  const [typeOfTransaction, setTypeOfTransaction] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [adresseProduct, setAdresseProduct] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) {
        setTypeOfTransaction(product.typeOfTransaction);
        setDescription(product.description);
      setPrice(product.price);
      setArea(product.area);
      setAdresseProduct(product.adresseProduct);
    } else {
        setTypeOfTransaction("");
        setDescription("");
      setPrice("");
      setArea("");
      setAdresseProduct("");

    }
  }, [edit, product]);

  const update = (e) => {
    e.preventDefault();

    let updatedProduct = {
        typeOfTransaction,
        description,
        price,
        area,
        adresseProduct,
    };

    dispatch(updateProduct(product._id, updatedProduct));
    handleClose();
  };

  const add = (e) => {
    e.preventDefault();

    let newProduct = {
        typeOfTransaction,
        description,
        price,
        area,
        adresseProduct,
    };

    dispatch(addProduct(newProduct));
    handleClose();
  };

  return (
    <>
      {edit ? (
        <EditIcon onClick={handleShow} />
      ) : (
        <AddCircleIcon
          onClick={handleShow}
          className="add-icon"
          fontSize="large"
        />
      )}

      <Modal show={show} onHide={handleClose} className="myform">
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit" : "Add"} Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <Form.Control
            type="text"
            placeholder="typeOfTransaction ..."
            value={typeOfTransaction}
            onChange={(e) => setTypeOfTransaction(e.target.value)}
          />

          <br />
          <Form.Control
            type="text"
            placeholder="description ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Price ..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Area ..."
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <br/>
          <Form.Control
            type="text"
            placeholder="Adresse ..."
            value={adresseProduct}
            onChange={(e) => setAdresseProduct(e.target.value)}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              edit ? update(e) : add(e);
            }}
          >
            {edit ? "Edit" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductForm;