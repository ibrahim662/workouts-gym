import { Box, Button, Stack, TextField, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../../utils/FetchData";
import HorizantalBodyPartsCards from "../horizantal-body-parts-cards/HorizantalBodyPartsCards";

function SearchExercises({ setExercises, setBodyPart, bodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBodyPartListData = async () => {
      try {
        setLoading(true);

        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exercisesOptions
        );
        setBodyParts(["all", ...bodyPartsData]);
      } catch (error) {
        console.error("Error fetching body parts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBodyPartListData();
  }, []);

  const handleSearchExercises = async () => {
    try {
      setLoading(true);

      if (search) {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=999999",
          exercisesOptions
        );

        const searchedExercises = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 450, left: 100, behavior: "smooth" });

        setSearch("");
        setExercises(searchedExercises);
      }
    } catch (error) {
      console.error("Error searching exercises:", error);
    } finally {
      setLoading(false);
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
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search exercises"
          type="text"
        />
        <Button onClick={handleSearchExercises}>Search</Button>
      </Box>

      {loading ? (
       <span class="loader"></span>
      ) : (
        <Box
          sx={{
            width: "100%",
            p: "20px",
            display: "flex",
            flexDirection: "row",
            overflow: "scroll",
          }}
        >
          <HorizantalBodyPartsCards
            data={bodyParts}
            bodyParts
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      )}
    </Stack>
  );
}

export default SearchExercises;