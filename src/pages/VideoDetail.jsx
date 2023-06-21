import React from "react";
import { Box, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import { useLoaderData, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/FetchFromAPI";
import VideoLikesViews from "../components/VideoLikesViews";
import ChannelDesc from "../components/ChannelDesc";
import Videos from "../components/Videos";

const VideoDetail = () => {
  const { id: videoId } = useParams();
  const { data, relatedVideo } = useLoaderData();
  const { snippet } = data;

  return (
    <Box sx={{ minHeight: "90vh", background: "#070707"}}>
      <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{ m: {md:"40px 60px"}, width: "100%" }}>
          <Box sx={{position:"sticky", top:0}}>
            <Box sx={{mb:{sm:"10px", md:"20px"}}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className="react-player" controls/>
            </Box>
            <Box>
              <h1 style={{margin:0, fontFamily:"'Bree Serif', serif", fontSize:"1.5rem", lineHeight:"1.3", opacity: 0.9}}>{snippet?.localized?.title}</h1>
            </Box>
            <Box>
              <Stack direction="row" justifyContent="space-between">
                <ChannelDesc data={data} />
                <VideoLikesViews data={data} />
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box sx={{ m:{ md:"40px 40px 0 0" } }}>
          <Videos videos={relatedVideo} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;

export const loader = async ({ params }) => {
  const { id: videoId } = params;

  const response = await fetchFromApi(`videos?part=contentDetails,snippet,statistics&id=${videoId}`);
  const data = await response.items[0]; //return an object

  const responseToRelatedVideo = await fetchFromApi(`search?part=id,snippet&type=video&relatedToVideoId=${videoId}`);
  const relatedVideo = await responseToRelatedVideo.items; // returns an array

  return { data, relatedVideo };
};
