import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";
import LoginPage from "./login-register/login";

// function App() {
// const [currentPage, setCurrentPage] = React.useState("Login");
// const [loginLogout, setLoginLogout] = React.useState("Log In");

const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoginPage
      // setCurrentPage={setCurrentPage}
      // setLoginLogout={setLoginLogout}
      />
    )
  }
]);
// }

// export default App;

// const router =

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
