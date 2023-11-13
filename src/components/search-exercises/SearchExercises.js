import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { exercisesOptions, fetchData } from "../../utils/FetchData";

function SearchExercises({ setExercises, setBodyPart, bodyPart }) {
  const [search, setSearch] = useState("");
  //   const [bodyParts, setBodyParts] = useState([]);

  //   useEffect(() => {
  //     const fetchBodyPartListData = async () => {
  //       const bodyPartsData = await fetchData(
  //         "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //         exercisesOptions
  //       );
  //       setBodyParts(["all", ...bodyPartsData]);
  //     };
  //     fetchBodyPartListData();
  //   }, []);

  const handleSearchExercises = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=999999",
        exercisesOptions
      );

      const searchedExcercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExcercises);
    }
  };
  return (
    <Stack>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <TextField
          height="76px"
          sx={{
            width: { lg: "1170px", xs: "350px" },
            borderRadius: "40px",
            backgroundColor: "#fff",
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search exercises"
          type="text"
        ></TextField>
        <Button onClick={handleSearchExercises}>Search</Button>
      </Box>

      {/* <HorizantalBodyPartsCards data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}
    </Stack>
  );
}

export default SearchExercises;
