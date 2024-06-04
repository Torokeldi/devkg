import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import JobOpenings from "./pages/JobOpenings/JobOpenings";
import Events from "./pages/Events/Events";
import Video from "./pages/VideosDev/Videos";
import Organizations from "./pages/Organizations/Organizations";
import Community from "./pages/Community/Community";
import AddVacancy from "./pages/addVacancy/addVacancy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/JobOpenings",
        element: <JobOpenings />,
    },
    {
        path: "/Events",
        element: <Events />,
    },
    {
        path: "/Video",
        element: <Video />,
    },
    {
        path: "/Organizations",
        element: <Organizations />,
    },
    {
        path: "/Community",
        element: <Community />,
    },
    {
        path: "/AddVacancy",
        element: <AddVacancy />,
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
