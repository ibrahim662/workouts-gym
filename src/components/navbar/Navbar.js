import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      gap={"20px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <h2>Workouts</h2>
      <Stack direction={"row"} gap={"20px"}>
        <Link to="/">Home</Link>
        <Link to="#exercises">Exrecises</Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
