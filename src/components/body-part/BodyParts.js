import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    display={"flex"}
    alignItems="center"
    justifyContent="center"
    flexDirection={"row"}
    border={"1px solid black"}
    sx={bodyPart === item ? { border: '4px solid #1976d2',borderRadius: "8px", background: '#fff', width: '270px', height: '282px', cursor: 'pointer', gap: '47px', } : { background: '#fff', width: '270px', height: '282px', cursor: 'pointer', gap: '47px', borderRadius: "8px" }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 450, left: 100, behavior: 'smooth' });
    }}
  >
    {/* <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} /> */}
    <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;