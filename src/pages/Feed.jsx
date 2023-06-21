import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import Videos from "../components/Videos";
import { fetchFromApi } from "../utils/FetchFromAPI";

const Feed = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      fetchFromApi(`search?q=${selectedCategory}`).then(data => {
         return setVideos(data.items)
      })
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "black" }}>
      <Box sx={{height: { sm: "auto", md: "92vh" },borderRight: "1px solid #3d3d3d",px: "20px"}}>
        <SideBar category={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            mt: { md: "20px" },
            py: { md: "10px" },
            borderTop: { md: "1px solid #3d3d3d" },
            display: {xs:"none", md:"block"}
          }}
        >
          © 2023 Google LLC
        </Typography>
      </Box>
      <Box sx={{ml: { md:"20px"}}}>
        <Typography variant="h4" sx={{ color: "white", fontWeight: "bold", my:"20px" }}>
          {selectedCategory}<span style={{color:"red"}}> videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
