import {
  RouterProvider,
} from "react-router-dom";

import { router } from "./providers/router";
import {useContext} from "react";
import {AuthContext} from "./providers/auth";

const App = () => {
  const authContext = useContext(AuthContext);

  return <RouterProvider router={router(authContext)} />;
};

export default App;
