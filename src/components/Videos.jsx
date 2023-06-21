import React from "react";
import { Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="flex-start" gap={direction ? 4 : 2}>
     {videos.map((e,idx) => {
        return (e.id.videoId && <VideoCard key={idx} video={e}/>) || (e.id.channelId && <ChannelCard key={idx} channel={e}/>)
     })}
    </Stack>
  );
};

export default Videos;
