import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../../redux/slices/loginSlice";
import { useSelector } from "react-redux";
function Copyright(props) {
  return (
    <Typography

      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

function Login() {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.login.currentUser);
  const isLogin = useSelector((state) => state.login.isLogin);


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid   container component="main" sx={{ height: "100vh" }} >
        <CssBaseline />
        <Grid 
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://images.pexels.com/photos/18792340/pexels-photo-18792340/free-photo-of-burger-with-christmas-ornaments-and-a-sparkler.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
            ,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center",
          }}
        />
        <Grid      item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
       
        
            sx={{
              position: 'relative',
              // backgroundImage: "url(https://images.pexels.com/photos/18792340/pexels-photo-18792340/free-photo-of-burger-with-christmas-ornaments-and-a-sparkler.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              textAlign: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              my: 0,
              mx: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "&::before": {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                // width: '100%',
                // height: '100%',


                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }
            }}
          >

            <Avatar sx={{ m: 2, bgcolor: "black", marginTop: "295px", fontSize: "2px", height: "100px", width: "100px" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography style={{ color: "black", fontSize: "35px", width: "150px", height: "50px", textAlign: "center" }} component="h1" variant="h5">
              <b>Sign in</b>
            </Typography>

            <Box style={{ marginTop: "35px" }} >
              <Formik initialValues={{
                name: "",
                password: ""
              }} onSubmit={(values) => {
                axios("http://localhost:3000/users").then((res) => {
                  let users = res.data;
                  let check = users.find((user) => user.name == values.name && user.password == values.password)
                  if (check) {
                    dispatch(loginSuccess(check));
                    console.log(isLogin);
                    localStorage.setItem("loggeduser", JSON.stringify(check))
                    navigate("/")
                  }
                  else {
                    alert("user not found")
                  }
                })
              }}>
                <div>
                  <Form >
                    <label style={{ color: "black", fontSize: "25px", marginLeft: "8px" }} htmlFor="name"><b>Name</b></label>
                    <Field style={{ marginLeft: "50px", marginTop: "20px", fontSize: "25px", textAlign: "center", height: "39px" }}
                      name="name"
                      type="text"

                    />  <br />
                    <label style={{ color: "black", marginLeft: "5px", position: "relative", top: "25px", fontSize: "25px" }} htmlFor="password"> <b>Password</b></label>
                    <Field style={{ marginLeft: "22px", fontSize: "19px", textAlign: "center", position: "relative", top: "25px", fontSize: "25px", height: "39px" }} name="password"
                      type="password"
                    />

                    <Button style={{
                      background: "black",
                      marginTop: "55px",
                      position: "relative",
                      height: "45px",
                      width: "100%",
                      color: "white", borderRadius: "8px"
                    }} type="submit"><b>Submit</b></Button>

                  </Form>
                </div>




              </Formik>
            </Box>

          </Box>

        </Grid>
      </Grid>
    </ThemeProvider >

  );
}

export default Login;