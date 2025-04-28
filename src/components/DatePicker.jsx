import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";

export const DatePicker = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(undefined);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = () => {
    setDate(selectedDate);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <TextField
        variant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder={"DD/MM/YYYY"}
      />
      <Button
        variant="contained"
        disabled={!selectedDate}
        onClick={handleSubmit}
        sx={{ marginLeft: 2, height: 56 }}
      >
        Submit
      </Button>
    </Box>
  );
};
