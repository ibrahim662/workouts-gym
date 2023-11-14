import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Card,
  Chip,
  Pagination,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { exercisesOptions, fetchData } from "../../utils/FetchData";
import ExercisesDetails from "../exercises-details/ExercisesDetails";

function CardExercise({ exercises }) {
  const [open, setOpen] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  const handleOpen = async (exerciseId) => {
    setOpen(true);
    let exercisesData = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`,
      exercisesOptions
    );

    setCurrentExercise(exercisesData);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentExercise(null);
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedExercises = exercises.slice(startIndex, endIndex);

  const style = {
    borderRadius: "8px",
    // border: "1px solid #000",
    "&:hover": {
      boxShadow: 8,
    },
    p: 4,
    maxWidth: "345px",
    fontFamily:"Oswald', sans-serif;"
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={"30px"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        width={"100%"}
        flexWrap={"wrap"}
        gap={"16px"}
        justifyContent={"center"}
      >
        {displayedExercises.map((exercise, i) => (
          <Card key={i} sx={style}>
            <CardMedia
              component="img"
              alt={exercise.name}
              loading="lazy"
              image={exercise.gifUrl}
            />
            <CardHeader title={exercise.name} subheader={exercise.bodyPart} />
            <CardContent>
              <Stack
                display={"flex"}
                flexDirection={"row"}
                gap={"16px"}
                flexWrap={"wrap"}
              >
                <Chip label={exercise.target} color="primary" />
                {exercise.secondaryMuscles.map((item) => (
                  <>
                    <Box display={"flex"}>
                      <Chip label={item} color="secondary" />
                    </Box>
                  </>
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleOpen(exercise.id)}>
                {" "}
                Learn More
              </Button>
            </CardActions>
            <ExercisesDetails
              exercise={exercise}
              open={open}
              handleClose={handleClose}
              currentExercise={currentExercise}
            />
          </Card>
        ))}
      </Box>
      <Box mt={2}>
        <Pagination
          count={Math.ceil(exercises.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Box>
  );
}

export default CardExercise;
