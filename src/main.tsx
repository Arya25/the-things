import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Stories from "./pages/Stories.tsx";
import StoryDetail from "./pages/StoryDetail.tsx";
import Minutes from "./pages/Minutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/minutes" element={<Minutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
