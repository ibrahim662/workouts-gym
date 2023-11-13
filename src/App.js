import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExercisesDetails from "./components/exercises-details/ExercisesDetails";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Box width={"400px"} sx={{ width: { xl: "1480px" } }} m={"auto"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exersice/:id" element={<ExercisesDetails />} />
      </Routes>
    </Box>
  );
}

export default App;
