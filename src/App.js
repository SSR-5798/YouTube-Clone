import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";
import Feed from "./pages/Feed";
import RootLayout from "./pages/RootLayout";
import { loader as channelLoader } from "./pages/ChannelDetail";
import { loader as searchLoader }  from "./pages/SearchFeed";
import { loader as videoLoader } from "./pages/VideoDetail";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { index:true, element: <Feed /> },
      { path: "video/:id", element: <VideoDetail />, loader:videoLoader },
      { path: "channel/:id", element: <ChannelDetail />, loader:channelLoader },
      { path: "search/:searchTerm", element: <SearchFeed />, loader:searchLoader},
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
