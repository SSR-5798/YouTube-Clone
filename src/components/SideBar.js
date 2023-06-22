import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";


const SideBar = ({category, setSelectedCategory}) => {

  
  const clickHandler = (name) => {
    setSelectedCategory(name)
  }

  return <Stack
    direction="row"
    sx={{
      flexDirection: { md: "column" },
      overflowY: "auto",
      height: { sm: "auto", md: "90%" },
    }}
  >
    {categories.map((e) => {
      return (
        <button
          className="category-btn"
          key={e.name}
          style={{
            backgroundColor: e.name === category && "#FC1503",
            opacity: e.name === category ? "1" : "0.8",
          }}
          onClick={clickHandler.bind(this,e.name)}
        >
          <span style={{ color: e.name === category ? "white" : "red", marginRight: "10px",}}>
            {e.icon}
          </span>
          <span style={{ color: "white", fontFamily:"Libre Baskerville", letterSpacing: "0.8px" }}>{e.name}</span>
        </button>
      );
    })}
  </Stack>
};

export default SideBar;
