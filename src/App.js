import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./pages/loginpage/Loginpage";
import Testing from "./pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/main",
    element: <Testing />,
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
