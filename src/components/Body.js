import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {Login,Browse,Signup,WatchList} from "./Index";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login-signup",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/watchlist",
      element: <WatchList />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
