import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";



const router = createBrowserRouter([

    {
        path: "/",
        element:<HomeLayout></HomeLayout>
    },
    {
        path: "/news",
        element:<h1>News</h1>
    },
    {
        path: "/auth",
        element:<h1>Auth</h1>
    },
    {
        path: "*",
        element:<h1>Page Not Found</h1>
    }
]);
export default router;