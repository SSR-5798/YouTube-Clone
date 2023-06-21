import React from "react";
import { Box } from "@mui/material";
import classes from "./ErrorPage.module.css";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    const navigateToHomePage = () => {
            navigate("/");
    }

  return (
    <>
      <Nav />
      <Box className={classes.backdrop}></Box>
      <Box className={classes["modal-overlay"]}>
        <h1>Page Not Found !!</h1>
        <button className={classes.actions} onClick={navigateToHomePage}>Back to Home Page</button>
      </Box>
    </>
  );
};

export default ErrorPage;
