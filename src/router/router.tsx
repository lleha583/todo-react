import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Important from "../pages/Important";
import Completed from "../pages/completed";
import Tasks from "../pages/Tasks/Tasks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'tasks',
                element: <Tasks />
            },
            {
                path: 'important',
                element: <Important />
            },
            {
                path: 'completed',
                element: <Completed />
            }


        ],
    }
])

export default router