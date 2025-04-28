import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as MUIDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const DatePicker = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MUIDatePicker
          label="Wedding Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
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
