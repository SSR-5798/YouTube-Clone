import React from 'react';
import { Stack, CardMedia , Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture, demoChannelTitle } from '../utils/constant';


const ChannelCard = ({channel, marginTop, fontSize}) => {

  return (
    <Box>
    <Stack direction="column" alignItems="center" justifyContent="center" width={360} margin="auto" borderRadius="30px" marginTop={marginTop}>
      <Link to={`/channel/${channel?.id?.channelId  || channel?.id}`}>
         <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} sx={{height:200, width:200, borderRadius:'50%', mb:"20px", mt:"30px"}}/>
      </Link>
      <Link to={`/channel/${channel?.id?.channelId || channel?.id}`}>
      <Stack direction="row" alignItems="center">
         <Box color="white" fontFamily="'Bree Serif', serif" letterSpacing="0.1px" fontSize={fontSize}>{channel?.snippet?.title || demoChannelTitle}</Box>
         <CheckCircle sx={{color:"blue", fontSize:fontSize || 15, ml:"5px"}}/>
      </Stack>
      </Link>
      {channel?.statistics?.subscriberCount && <Typography variant="subtitle2" color="white" marginTop="10px" opacity="0.9">{parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>}
    </Stack>
    </Box>
  )
}

export default ChannelCard