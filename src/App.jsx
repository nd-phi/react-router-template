import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
    name: "Home",
  },
  {
    path: "page1",
    element: <Page1 />,
    name: "Page 1",
  },
];

function Home() {
  return (
    <div>
      <p>Home</p>
    </div>
  );
}

function Page1() {
  return (
    <div>
      <p>Page 1</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <p>Page Not Found!</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <NavBar routes={routes} />
      <Routes>
        {routes.map(({ path, exact, element }) => (
          <Route path={path} exact={exact} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
