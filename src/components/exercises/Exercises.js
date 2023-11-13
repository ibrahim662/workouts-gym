import React, { useEffect } from "react";
import { exercisesOptions, fetchData } from "../../utils/FetchData";
import CardExercise from "../card-exercise/CardExercise";

function Exercises({ exercises, setExercises, bodyPart, exerciseId }) {
  useEffect(() => {
    const fetchExercisesData = async () => {
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
    };

    fetchExercisesData();
  }, [bodyPart]);

  return <CardExercise exercises={exercises} exerciseId={exerciseId} />;
}

export default Exercises;
