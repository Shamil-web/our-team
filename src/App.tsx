import React, { createContext, useState } from "react";
import { EmployeeProfile } from "./components/profile/profile.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main.tsx";

// export const ThemeContext = createContext(null);

function App() {
  // const age = 12;
  // const [name, setName] = useState("shamil");
  return (
    // <ThemeContext.Provider value={{ name, age }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          // action={({ params }) => {}}
          path="/profile/:id"
          element={<EmployeeProfile />}
        />
      </Routes>
    </BrowserRouter>
    // </ThemeContext.Provider>
  );
}

export default App;
