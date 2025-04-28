import React, { useState } from "react";
import { DatePicker } from "./DatePicker";
import { Gallery } from "./Gallery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ErrorBoundary } from "./ErrorBoundary";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const FrontPage = () => {
  const [date, setDate] = useState(null);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {date ? <Gallery date={date} /> : <DatePicker setDate={setDate} />}
      </ThemeProvider>
    </ErrorBoundary>
  );
};
