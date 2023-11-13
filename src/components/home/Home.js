import React, { useState } from "react";
import Exercises from "../exercises/Exercises";
import SearchExercises from "../search-exercises/SearchExercises";
function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [exerciseId, setExerciseId] = useState();
  return (
    <>
      <SearchExercises
        setExercises={setExercises}
        exercises={exercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        exerciseId={exerciseId}
      />
    </>
  );
}

export default Home;
