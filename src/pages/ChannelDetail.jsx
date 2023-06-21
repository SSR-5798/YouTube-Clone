import React, { useState, useEffect } from 'react';
import { Stack, Box } from "@mui/material";
import { fetchFromApi } from "../utils/FetchFromAPI";
import { useLoaderData } from 'react-router-dom';
import classes from "./ChannelDetail.module.css";
import ChannelCard from '../components/ChannelCard';
import VideoCard from '../components/VideoCard';

const ChannelDetail = () => {

const [channelInfo, setChannelInfo] = useState(null);
const [channelVideo, setChannelVideo] = useState([]);
const {channelData, channelVideoData} = useLoaderData();

useEffect(() => {
   setChannelInfo(channelData)
   setChannelVideo(channelVideoData)
}, [channelData, channelVideoData]);

  return (
   <Box sx={{minHeight:"92vh", background:"black"}}>
     <Box mb={10}>
      <div className={classes.channel}/>
      <ChannelCard channel={channelInfo} marginTop="-120px" fontSize={20}/>
     </Box>
     <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={3}>
       {channelVideo.map((e, idx) => {
       return <VideoCard key={idx} video={e}/>
       })}
     </Stack>   
   </Box>
  )
}

export default ChannelDetail;

export const loader = async ({params}) => {

  const channelId = params.id;

  const channelResponse = await fetchFromApi(`channels?part=snippet,statistics&id=${channelId}`);
  const channelData = await channelResponse.items[0]; // returns an object

  const channelVideoResponse = await fetchFromApi(`search?part=snippet,id&order=date&channelId=${channelId}`);
  const channelVideoData = await channelVideoResponse.items; //returns an array
  
  return { channelData, channelVideoData }
}