import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Today from "../pages/Today";

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Today />
            },

        ],
    }
])

export default router