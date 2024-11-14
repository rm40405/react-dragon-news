import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([

    {
        path: "/",
        element:<h1>Router</h1>
    },
    {
        path: "/news",
        element:<h1>News</h1>
    }
]);
export default router;