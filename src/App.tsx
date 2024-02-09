import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Vacancy from "./pages/Vacancy/Vacancy";
import Events from "./pages/Events/Events";
import Community from "./pages/Community/Community";
import Organization from "./pages/Organization/Organization";
import ChatGPT from "./pages/ChatGPT/ChatGPT";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/vacancy" index element={<Vacancy />} />
          <Route path="/events" index element={<Events />} />
          <Route path="/community" index element={<Community />} />
          <Route path="/organization" index element={<Organization />} />
          <Route path="/chatGPT" index element={<ChatGPT />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
