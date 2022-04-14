import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "../ProductsForm/ProductsForm";
import { deleteProduct } from "../../js/actions/productsActions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({
  
  product,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const user = useSelector((state) => state.authReducer.user);

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        subheader={product.dateOfCreactionProduct}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://www.marrakech-golf-location.com/images/slides/slide1.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.typeOfTransaction}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {product.userId === user._id ? (
          <>
            <ProductForm
              idProduct={product._id}
              edit={true}
              product={product}
            />
            <IconButton aria-label="share">
              <DeleteIcon
                onClick={() => dispatch(deleteProduct(product._id))}
              />
            </IconButton>
          </>
        ) : null}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Characteristic :</Typography>
          <Typography paragraph>Description : {product.description}</Typography>
          <Typography paragraph>Adresse : {product.adresseProduct}</Typography>
          <Typography paragraph>Price : {product.price} $</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
        }