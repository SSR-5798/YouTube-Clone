import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <Stack direction="row" p={2} alignItems="center" sx={{top:0, background:"black", justifyContent:"space-between"}} >
      <Stack direction="row">
        <Link to="/">
          <img src={logo} height={35} alt="logo" />
        </Link>
        <Typography variant="h5" color="white">YouTube</Typography>
      </Stack>

      <SearchBar />
    </Stack>
  );
};

export default Nav;
