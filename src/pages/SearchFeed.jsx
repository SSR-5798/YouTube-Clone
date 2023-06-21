import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import VideoCard from "../components/VideoCard";
import ChannelCard from "../components/ChannelCard";
import { useParams, useLoaderData } from "react-router-dom";
import { fetchFromApi } from "../utils/FetchFromAPI";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const videos = useLoaderData();

  return (
    <Box sx={{ minHeight: "92vh", background: "black"}}>
      <Typography variant="h3"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: "30px",
          textAlign: "center",
        }}
      >Search Results for: <span style={{ color: "red" }}>{searchTerm}</span> videos
      </Typography>

      <Stack sx={{flexDirection:{xs:"column", sm:"row"}}} justifyContent="center" alignItems="center" flexWrap="wrap" gap={3}>
        {videos.map((e, idx) => {
          return (e.id.videoId && <VideoCard key={idx} video={e}/>) || (e.id.channelId && <ChannelCard key={idx} channel={e}/>)
        })}
      </Stack>
    </Box>
  );
};

export default SearchFeed;

export const loader = async ({ params }) => {
  const { searchTerm } = params;
  const response = await fetchFromApi(
    `search?part=snippet,id&order=date&q=${searchTerm}`
  );
  const data = await response.items; // returns an array

  return data;
};
