import React, { useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../../utils/FetchData";
import CardExercise from "../card-exercise/CardExercise";
import { Box, Typography } from "@mui/material";
import "./Exercises.css";
function Exercises({ exercises, setExercises, bodyPart, exerciseId }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setLoading(true);

        let exercisesData = [];

        if (bodyPart === "all") {
          exercisesData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises?limit=999999",
            exercisesOptions
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exercisesOptions
          );
        }

        setExercises(exercisesData);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minHeight={"600px"}>
      {loading ? (
        <span className="loader"></span>
      ) : exercises.length > 0 ? (
        <CardExercise exercises={exercises} exerciseId={exerciseId} />
      ) : (
        <Typography>
          {exercises.length === 0 ? "No results for your search..." : ""}
        </Typography>
      )}
    </Box>
  );
}

export default Exercises;
