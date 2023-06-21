import { Stack, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoChannelUrl } from "../utils/constant";
import React from "react";
import classes from "./VideoLikesViews.module.css"

const ChannelDesc = ({ data }) => {
  return (
    <Stack direction="row" justifyContent="flex-start">
      <Box className={classes.likes}>
        <Link to={`/channel/${data?.snippet?.channelId}` || demoChannelUrl}>
          <Box sx={{ color: "white", fontSize: "20px", mr: "3px", fontFamily:"'Esteban', serif"}}>
          {data?.snippet?.channelTitle}
          </Box>
        </Link>
        <CheckCircle sx={{ color: "blue", fontSize: 20 }} />
      </Box>
    </Stack>
  );
};

export default ChannelDesc;
