import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Today from "../pages/Today";
import Important from "../pages/important";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'today',
                element: <Today />
            },
            {
                path: 'important',
                element: <Important />
            }

        ],
    }
])

export default router