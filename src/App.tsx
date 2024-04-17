import React from "react";
import { EmployeeProfile } from "./components/profile/profile.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:id" element={<EmployeeProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
