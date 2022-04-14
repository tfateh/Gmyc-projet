import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { logout } from "../../js/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.authReducer.user.role);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <Button
            component={Link}
            to={{ pathname: "/productslist" }}
            color="inherit"
          >
            Products
          </Button>

          <Button
            component={Link}
            to={{ pathname: "/profile" }}
            color="inherit"
          >
            {role ==="admin" ?<Link to="/dashboard">
              <Button variant="outline-success" >Admin Dashbord</Button>
               </Link>:null}
            Profile
          </Button>

          <Button onClick={() => dispatch(logout())} color="inherit">
            Logout
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}