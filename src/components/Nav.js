import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <Stack direction="row" p={2} alignItems="center" sx={{top:0, background:"black", justifyContent:"space-between"}} >
      <Stack direction="row" alignItems="center">
        <Link to="/">
          <img src={logo} height={35} alt="logo" />
        </Link>
        <Box color="white" fontFamily="'Eczar'" sx={{fontSize:{xs:"20px" , md:"28px"}}}>YouTube</Box>
      </Stack>
      <SearchBar />
    </Stack>
  );
};

export default Nav;
