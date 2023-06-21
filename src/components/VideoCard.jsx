import React from 'react'
import { Link } from "react-router-dom"
import { Stack, Card, CardMedia, CardContent, Box } from "@mui/material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoProfilePicture } from '../utils/constant'
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({video}) => {

    const { id, snippet } = video;
    const { videoId } = id;

  return (
    <Box>
    <Card sx={{width:{ xs:"100%" , sm:"360px" }, borderRadius:0, boxShadow:"none"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url || demoProfilePicture} alt={demoThumbnailUrl} sx={{height:200, width: { xs: "100%" ,sm:'360px'}}}/>
        </Link>
        <CardContent sx={{background:"#1A1A1B", height:80}}>
           <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Box color="white" fontFamily="'Bree Serif', serif" mb="5px">{snippet?.title.slice(0,80) || demoVideoTitle.slice(0,60)}</Box>
           </Link>  

           <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Stack direction="row" alignItems="center">
              <Box color="grey" fontFamily="'Eczar', serif" fontWeight="500" lineHeight="1.5">{snippet?.channelTitle || demoChannelTitle}</Box>
              <CheckCircle sx={{color:"grey", fontSize:15, ml:"5px"}}/>
            </Stack>
           </Link>     
        </CardContent>
    </Card>
    </Box>
  )
}

export default VideoCard;