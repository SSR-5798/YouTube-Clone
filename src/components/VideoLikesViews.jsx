import React from "react";
import classes from "./VideoLikesViews.module.css";
import { ThumbUpOffAlt, Visibility } from "@mui/icons-material";
import { Stack, Box, Typography } from "@mui/material";

const VideoLikesViews = ({ data }) => {
  const likeCount = parseInt(data?.statistics?.likeCount) || 0;
  const num = Intl.NumberFormat("en", { notation: "compact" }).format(likeCount);

  return (
    <Stack direction="row" gap={2}>
      <Box className={classes.likes}>
        <ThumbUpOffAlt sx={{mr:"8px"}}/>
        <Typography variant="body1" sx={{opacity:"0.8"}}>{num}</Typography>
      </Box>
      <Box className={classes.likes}>
        <Visibility sx={{mr:"8px"}}/>
        <Typography variant="body1" sx={{opacity:"0.8"}}>{parseInt(data?.statistics?.viewCount).toLocaleString()}</Typography>
      </Box>
    </Stack>
  );
};

export default VideoLikesViews;
