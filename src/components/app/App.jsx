import {
  RouterProvider,
} from "react-router-dom";

import { router } from "./providers/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
