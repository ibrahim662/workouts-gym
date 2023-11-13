import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function ExercisesDetails({ open, handleClose, currentExercise }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {currentExercise && (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {currentExercise.name}
            </Typography>
            <Stack id="modal-modal-description" sx={{ mt: 2 }}>
              <List sx={{ listStyle: "decimal", pl: 4 }}>
                {currentExercise.instructions.map((item) => (
                  <ListItem sx={{ display: "list-item" }}>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Typography>
                This exercise target : {currentExercise.target}
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                alignItems={"flex-start"}
              >
                <Typography>And also : </Typography>
                {currentExercise.secondaryMuscles.map((item) => (
                  <Typography sx={{ paddingRight: "15px" }}>{item}</Typography>
                ))}
              </Box>
            </Stack>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default ExercisesDetails;
