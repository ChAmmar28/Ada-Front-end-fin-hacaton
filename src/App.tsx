import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
